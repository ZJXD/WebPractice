/**
 * 类型别名（Type Alias）
 */

type Name = string
type NameResolver = () => string
type NameOrNameResolver = Name | NameResolver
function getName(n: NameOrNameResolver): Name {
  if (typeof n === 'string') {
    return n
  } else {
    return n()
  }
}

// 用 type 创建别名
// 上面就是用 Name 代替 string
