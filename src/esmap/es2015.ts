import NodeTravel from '../NodeTravel'
import * as babel from '@babel/parser'
import * as babelType from 'babel-types'
interface es2015Type {
  [key:string]: any
}
const es2015map:es2015Type = {
  Program(nodeTravel:NodeTravel<babelType.Program>){
    for (let node of nodeTravel.node.body){
      nodeTravel.traverse(node)
    }
  },
  VariableDeclaration(nodeTravel:NodeTravel<babelType.VariableDeclaration>){
    const kind = nodeTravel.node.kind
    for (const declaration of nodeTravel.node.declarations) {
      const { name } = declaration.id as babelType.Identifier
      const value = declaration.init ? nodeTravel.traverse(declaration.init) : undefined
      nodeTravel.scope.declare(name,value,kind)      
    }
  },
  // 形如function abc() {}
  FunctionDeclaration(nodeTravel:NodeTravel<babelType.FunctionDeclaration>){
    const func = es2015map.FunctionExpression(nodeTravel as any)
    nodeTravel.scope.declare(nodeTravel.node.id.name,func,'var')
  },
  Identifier(nodeTravel:NodeTravel<babelType.Identifier>){
    const node = nodeTravel.node
    const value = nodeTravel.scope.get(node.name).v
    return value;
  },
  NumericLiteral(nodeTravel:NodeTravel<babelType.NumericLiteral>){
    return nodeTravel.node.value
  },
  StringLiteral(nodeTravel:NodeTravel<babelType.StringLiteral>){
    return nodeTravel.node.value
  },
  BooleanLiteral(nodeTravel:NodeTravel<babelType.BooleanLiteral>){
    return nodeTravel.node.value
  },
  RegExpLiteral(nodeTravel:NodeTravel<babelType.RegExpLiteral>){
    return new RegExp(nodeTravel.node.pattern,nodeTravel.node.flags)
  },
  NullLiteral(nodeTravel:NodeTravel<babelType.NullLiteral>){
    return null
  },
  // 创建块级作用域
  BlockStatement(nodeTravel:NodeTravel<babelType.BlockStatement>){
    const node = nodeTravel.node;
    // 变量提升
    for(let i = 0; i < node.body.length;i++){
      const subBody = node.body[i];
      if(subBody.type === 'VariableDeclaration' || subBody.type === 'FunctionDeclaration'){
        nodeTravel.traverse(subBody)
      }
    }
    for(let i = 0; i < node.body.length;i++){
      const subBody = node.body[i];
      if(subBody.type === 'VariableDeclaration' || subBody.type === 'FunctionDeclaration'){
        continue;
      }else{
        nodeTravel.traverse(subBody)
      }
    }  
  },
  ExpressionStatement(nodeTravel:NodeTravel<babelType.ExpressionStatement>){
    return nodeTravel.traverse(nodeTravel.node.expression)
  },
  CallExpression(nodeTravel:NodeTravel<babelType.CallExpression>){
    const func = nodeTravel.traverse(nodeTravel.node.callee)    
    const args = nodeTravel.node.arguments.map(item => nodeTravel.traverse(item))
    return func.apply(null,args)
  },

  // 函数表达式
  FunctionExpression(nodeTravel:NodeTravel<babelType.FunctionExpression>) {
    const node = nodeTravel.node;
    const fn = function() {
      const scope = nodeTravel.createScope('function');
      // 声明arguments变量
      scope.$let('arguments',arguments);
      for(let i = 0 ; i < node.params.length;i++){
        const {name} = node.params[i] as babelType.Identifier
        scope.$let(name,arguments[i])
      }
      nodeTravel.traverse(node.body,scope)
    }
    //未完待续。。。
    return fn;

  },
  MemberExpression(nodeTravel:NodeTravel<babelType.MemberExpression>){
    let obj = nodeTravel.traverse(nodeTravel.node.object)
    let property = (nodeTravel.node.property as any).name
    return obj[property]
  }
}
export default es2015map