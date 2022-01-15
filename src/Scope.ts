/*
 * @Author: Hujianbo
 * @Date: 2022-01-15 16:04:23
 * @LastEditors: Hujianbo
 * @LastEditTime: 2022-01-15 22:14:28
 * @FilePath: /jsjs/src/Scope.ts
 */
import { SimpleValue,kindType } from "./Value";
// scope type
type scopeType = 'function' | 'block'
export default class Scope {
  type: scopeType
  parentScope?: Scope
  declaration = Object.create(null)
  constructor(type:scopeType,parentScope?:Scope) {
    this.type = type
    this.parentScope = parentScope
  }
  declare(name:string,value: any,kind:kindType){
    switch (kind) {
      case 'let':
        this.$let(name,value)
      break;
      case 'var':
        this.$var(name,value)
      break;
      case 'const':
        this.$const(name,value)
      break;
      default:
      break;
    }
  }
  $let(name:string,value: any){
    if(this.declaration[name]){
      throw new Error('重复定义变量')
    }
    this.declaration[name] = new SimpleValue(value,'let')
  }
  $var(name:string,value: any){
    let scope:Scope = this
    // 找到最外层的block
    while(scope.parentScope && scope.type !== 'function'){
      scope = scope.parentScope
    }
    scope.declaration[name] = new SimpleValue(value,'var')
  }
  $const(name:string,value: any){
    if(this.declaration[name]){
      throw new Error('重复定义变量')
    }
    this.declaration[name] = new SimpleValue(value,'const')
  }
}