# jsjs

用js实现js. 
为什么要自己实现一遍js in js, 虽然开源已经有很多替代eval等js in js，但通常js in js解释器的覆盖率都不会太高，毕竟只有作者本人知道corner case是哪些，单纯地使用他人的肯定会出现各种问题，在这种背景下，最好实现一个自己完全了解的js in js解释器
(暂定es6,不求多完善，只求能基本满足常见的在线编辑器的热更新和小程序的热更新即可， 主体参考了很多开源的元循环解释器的结构，求人一起贡献遍历器的模块，只需按照 https://github.com/estree/estree/blob/master/es2015.md 的描述 完成模块功能即可，但是数量过于庞大，一个人时间比较有限，希望有人能一起来填) 

完成情况： 

~~Program 程序~~

~~VariableDeclaration 变量声明~~

VariableDeclarator

~~FunctionDeclaration 函数声明~~

~~Identifier 标识符~~

~~NumericLIteral 数字字面量~~

~~StringLiteral~~

~~RegExpLiteral~~

~~BooleanLiteral~~

~~NullLiteral~~

ExpressionStatement 表达式statement

~~BlockStatement 块级statement~~

IfStatement

ForStatement

ForInStatement 

DoWhileStatement

WhileStatement

ThrowStatement

TryStatement

CatchClause

SwitchStatement

SwitchCase

DebuggerStatement

LabeledStatement

BreakStatement

ContinueStatement

ReturnStatement

CallExpression

FunctionExpression

MemberExpression

AssignmentExpression

ConditionalExpression

SequenceExpression

NewExpression

LogicalExpression

UpdateExpression

ThisExpression

ArrayExpression

ObjectExpression

BinaryExpression

UnaryExpression

ObjectProperty

ObjectMethod
