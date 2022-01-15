/*
 * @Author: Hujianbo
 * @Date: 2022-01-15 16:04:36
 * @LastEditors: Hujianbo
 * @LastEditTime: 2022-01-15 17:47:34
 * @FilePath: /jsjs/src/Value.ts
 */
export type kindType = 'let' | 'const' | 'var'

export class SimpleValue {
  kind: kindType
  value: any 
  constructor(value:any,kind: kindType) {
    this.value = value
    this.kind = kind
  }
  get(){
    return this.value
  }
  set(value:any){
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