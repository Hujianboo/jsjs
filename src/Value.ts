/*
 * @Author: Hujianbo
 * @Date: 2022-01-15 16:04:36
 * @LastEditors: Hujianbo
 * @LastEditTime: 2022-01-16 23:19:22
 * @FilePath: /jsjs/src/Value.ts
 */
export type kindType = 'let' | 'const' | 'var'

export class SimpleValue {
  kind: kindType
  value: any 
  constructor(value:any,kind: kindType = 'var') {
    this.value = value
    this.kind = kind
  }
  get v(){
    return this.value
  }
  set v(value:any){
    this.value = value
  }
}
export class MemberValue{
  obj: any
  prop: string | number
  constructor(obj:any,prop: string | number){
    this.obj = obj
    this.prop = prop
  }
  get(){
    return this.obj[this.prop]
  }
  set(value:any){
    this.obj[this.prop] = value
  }
}