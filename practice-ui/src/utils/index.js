// 数组去重
export function arrayBreakRepeat(arr) {
  const result = []
  const obj = {}
  for (const i of arr) {
    if (!obj[i]) {
      result.push(i)
      obj[i] = 1
    }
  }
  return result
}

/**
 * 树操作
 */

//  获取树形菜单
export function getMenus(menuList) {
  return menuList.filter(item => item.type !== 3)
    .map(item => {
      item = Object.assign({}, item)
      if (item.children) {
        item.children = getMenus(item.children)
      }
      return item
    })
}

// 获取权限数组
export function getPermissions(datas) {
  const stack = [...datas]
  const permissions = []
  while (stack.length !== 0) {
    const pop = stack.pop()
    permissions.push(pop.code)
    const children = pop.children
    if (children) {
      for (let i = children.length - 1; i >= 0; i--) {
        stack.push(children[i])
      }
    }
  }
  return permissions
}

// 获取权限数组
export function filterTree(datas, key, value) {
  const stack = [...datas]
  const arrs = []
  while (stack.length !== 0) {
    const pop = stack.pop()
    if (pop[key] && pop[key] === value) {
      arrs.push({ ...pop })
      break
    }
    const children = pop.children
    if (children) {
      for (let i = children.length - 1; i >= 0; i--) {
        stack.push(children[i])
      }
    }
  }
  return arrs
}

// 获取子节点
export function getChildren(datas) {
  const stack = [...datas]
  const ids = []
  while (stack.length !== 0) {
    const pop = stack.pop()
    const children = pop.children
    if (children) {
      for (let i = children.length - 1; i >= 0; i--) {
        stack.push(children[i])
      }
    } else {
      ids.push(pop)
    }
  }
  return ids
}
