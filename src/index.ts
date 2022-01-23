import * as acorn from "acorn";
import * as esTree from 'estree';
import * as babelType from 'babel-types';
import * as babel from '@babel/parser';
import Scope from "./Scope";
import NodeTravel from './NodeTravel';
let code = `
  let a = 0;
  let b = 1;
  let c = 33;
  console.log(b,a);
  function func(){
    function funb(){
      let c = 44
      console.log('abasc')
    }
    funb()
  }
  func()
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
    }).program as any
    this.run()
  }
  public run() {
    const globalScope = new Scope('function')
    const startTravelNode = new NodeTravel<babelType.Program>(this.ast,globalScope)
    startTravelNode.traverse(startTravelNode.node)
  }
}
new Jsjs(code)