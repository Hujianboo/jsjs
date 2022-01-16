/*
 * @Author: Hujianbo
 * @Date: 2022-01-15 19:55:01
 * @LastEditors: Hujianbo
 * @LastEditTime: 2022-01-16 23:41:53
 * @FilePath: /jsjs/src/esmap/es2015.ts
 */
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
  
  Identifier(nodeTravel:NodeTravel<babelType.Identifier>){
    const node = nodeTravel.node
    const value = nodeTravel.scope.get(node.name).v
    return value;
  },
  NumericLiteral(nodeTravel:NodeTravel<babelType.NumericLiteral>){
    return nodeTravel.node.value
  },
  ExpressionStatement(nodeTravel:NodeTravel<babelType.ExpressionStatement>){
    return nodeTravel.traverse(nodeTravel.node.expression)
  },
  CallExpression(nodeTravel:NodeTravel<babelType.CallExpression>){
    const func = nodeTravel.traverse(nodeTravel.node.callee)    
    const args = nodeTravel.node.arguments.map(item => nodeTravel.traverse(item))
    return func.apply(null,args)
  },
  MemberExpression(nodeTravel:NodeTravel<babelType.MemberExpression>){
    let obj = nodeTravel.traverse(nodeTravel.node.object)
    let property = (nodeTravel.node.property as any).name
    return obj[property]
  }
}
export default es2015map