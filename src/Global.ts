/*
 * @Author: Hujianbo
 * @Date: 2022-01-15 16:04:12
 * @LastEditors: Hujianbo
 * @LastEditTime: 2022-01-16 23:41:50
 * @FilePath: /jsjs/src/Global.ts
 */
import {SimpleValue} from './Value'
const Global:any = {
  Function,
  Array,
  Boolean,
  clearInterval,
  clearTimeout,
  console,
  Date,
  decodeURI,
  decodeURIComponent,
  encodeURI,
  encodeURIComponent,
  Error,
  eval,
  EvalError,
  Infinity,
  isFinite,
  isNaN,
  JSON,
  Math,
  NaN,
  Number,
  Object,
  parseFloat,
  parseInt,
  RangeError,
  ReferenceError,
  RegExp,
  setInterval,
  setTimeout,
  String,
  SyntaxError,
  TypeError,
  URIError
}
const globalMap = Object.keys(Global).reduce((acc,value) => {
  acc[value] = new SimpleValue(Global[value])
  return acc
},{} as any)

export default globalMap