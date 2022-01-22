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