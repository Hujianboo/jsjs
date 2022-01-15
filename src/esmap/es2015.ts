/*
 * @Author: Hujianbo
 * @Date: 2022-01-15 19:55:01
 * @LastEditors: Hujianbo
 * @LastEditTime: 2022-01-15 22:22:45
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
      const { name } = declaration.id
      const value = declaration.init ? nodeTravel.traverse(declaration.init) : undefined
    }
  },
  
  Identifier(nodeTravel:NodeTravel<babelType.VariableDeclarator>){

  },
  NumericLiteral(nodeTravel:NodeTravel<babelType.NumericLiteral>){
    return nodeTravel.node.value
  },
  ExpressionStatement(nodeTravel:NodeTravel<babelType.ExpressionStatement>){
    
  },
}
export default es2015map