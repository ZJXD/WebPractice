/**
 * 调试用
 */
 class TreeNode {
  constructor(data, left = null, right = null) {
    this.data = data
    this.left = left
    this.right = right
  }
}

/**
 * Binary Search Tree
 * 二叉查找树：每个节点最多两个节点，且左节点小于父节点，右节点大于父节点
 */
class BST {
  constructor() {
    this.root = null
  }

  // 插入节点，在插入过程中用到递归
  add(data) {
    debugger
    const node = this.root
    if (node === null) {
      this.root = new TreeNode(data)
      return
    } else {
      const searchTree = function(node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new TreeNode(data)
            return
          } else {
            searchTree(node.left)
          }
        } else if (data > node.right) {
          if (node.right === null) {
            node.right = new TreeNode(data)
            return
          } else {
            searchTree(node.right)
          }
        } else {
          return null
        }
      }
      return searchTree(node)
    }
  }

  // 查找树中最小值，基于二叉树的特性查找最小最大值很快
  findMin() {
    let current = this.root
    while (current.left) {
      current = current.left
    }
    return current.data
  }

  // 查找树中最大值
  findMax() {
    let current = this.root
    while (current.right) {
      current = current.right
    }
    return current.data
  }

  // 查找指定值
  find(data) {
    let current = this.root
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left
      } else {
        current = current.right
      }
      if (current === null) {
        return null
      }
    }
    return current
  }

  // 树中是否存在某值
  isPresent(data) {
    let current = this.root
    while (current) {
      if (current.data === data) {
        return true
      }
      if (data < current.data) {
        current = current.left
      } else {
        current = current.right
      }
    }

    return false
  }

  // 删除指定元素
  remove(data){
    const removeNode = function(node,data){
      if(node === null){
        return null
      }
      if(data === node.data){
        // node 没有子节点
        if(node.left === null && node.right === null){
          return null
        }

        // node 没有左侧节点
        if(node.left === null){
          return node.right
        }

        // node 没有右侧节点
        if(node.right === null){
          return node.left
        }

        // node 有两个节点
        let tempNode = node.right
        while (tempNode.left!==null) {
          tempNode = tempNode.left
        }
        node.data = tempNode.data
        node.right = removeNode(node.right,tempNode.data)
        return node
      } else if(data<node.data){
        node.left = removeNode(node.left,data)
        return node
      } else {
        node.right = removeNode(node.right,data)
        return node
      }
    }

    this.root = removeNode(this.root,data)
  }
}

// 测试
const bst = new BST()

bst.add(4)
bst.add(2)
bst.add(6)
bst.add(1)
bst.add(3)
bst.add(5)
bst.add(7)
console.log(bst.root.right)
console.log('Min:',bst.findMin())
console.log('Max:',bst.findMax())
// bst.remove(7)
console.log('Max:',bst.findMax())
console.log('isPresent:',bst.isPresent(4))
bst.remove(4)
console.log('isPresent:',bst.isPresent(4))

