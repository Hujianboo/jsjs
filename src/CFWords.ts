/*
 * @Author: Hujianbo
 * @Date: 2022-01-15 16:04:04
 * @LastEditors: Hujianbo
 * @LastEditTime: 2022-01-24 00:51:49
 * @FilePath: /jsjs/src/CFWords.ts
 */
export type CFWordsType = 'return' | 'break' | 'continue' | 'labeled';
export class CFWords {
  value: ''
  constructor(type:CFWordsType,value:any){
    this.value = value
  }
  static isReturn(value:any){
    return value instanceof CFWords
  }
}