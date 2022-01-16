/*
 * @Author: Hujianbo
 * @Date: 2022-01-10 22:44:01
 * @LastEditors: Hujianbo
 * @LastEditTime: 2022-01-16 23:42:10
 * @FilePath: /jsjs/src/index.ts
 */
import * as acorn from "acorn";
import * as esTree from 'estree';
import * as babelType from 'babel-types';
import * as babel from '@babel/parser';
import Scope from "./Scope";
import NodeTravel from './NodeTravel';
let code = `
  let a = 0;
  let b = 23;
  console.log(b,a);
`
let ast= acorn.parse(code,{
  ecmaVersion: 2015,
  sourceType: 'module',
})
class Jsjs {
  ast: babelType.Program
  constructor (code = '', extraDeclaration = {}) {
    this.ast = babel.parse(code,{
      sourceType: 'module',
    }).program
    this.run()
  }
  public run() {
    const globalScope = new Scope('function')
    const startTravelNode = new NodeTravel<babelType.Program>(this.ast,globalScope)
    startTravelNode.traverse(startTravelNode.node)
  }
}
new Jsjs(code)