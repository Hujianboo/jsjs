import {es2015} from './esmap'
import * as babel from '@babel/parser'
import * as babelType from 'babel-types'
import Scope from './Scope'
import {scopeType} from './Scope'
// 节点遍历器，
// 包含一个节点，以及对应的遍历方法
export default class NodeTravel<T> {
  node: T
  scope: Scope
  constructor(node:T,scope:Scope) {
    this.node = node
    this.scope = scope
  }
  traverse(node:babelType.Node,optScope?:Scope){
    const scope = optScope || this.scope
    const method = es2015[node.type]
    const nodeTravel = new NodeTravel<babelType.Node>(node,scope)
    if(!method){
      throw new Error(`esmap中不存在该类method,${node.type}`)
    }
    return method(nodeTravel)
  }
  // 新作用域默认此Node的scope为parent
  createScope(type:scopeType = 'block'){
    return new Scope(type,this.scope)
  }
}