/*
 * @Author: Hujianbo
 * @Date: 2022-01-10 22:44:01
 * @LastEditors: Hujianbo
 * @LastEditTime: 2022-01-11 00:15:35
 * @FilePath: /jsjs/src/index.ts
 */
import * as acorn from "acorn";
let code = `
  let a = 0;
  console.log(a)
`
let ast= acorn.parse(code,{
  ecmaVersion: 2015,
  sourceType: 'module',
})
console.log(ast);
class jsjs {
  ast: acorn.Node
  constructor (code = '', extraDeclaration = {}) {
    this.ast = acorn.parse(code,{
      ecmaVersion: 2015,
      sourceType: 'module',
    })
    this.init()
  }
  public init() {

  }
  public run() {

  }
}