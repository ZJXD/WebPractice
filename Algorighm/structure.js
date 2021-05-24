/**
 * 数据结构练习
 * 参考：https://segmentfault.com/a/1190000020011987
 */

/**
 * 1、栈 ---------------------------------------------------------------------------
 */
//#region 栈

/**
 * Stack（栈）
 * 特点：后进先出（last in first out）
 * 方法：
 *     1、push：将一个元素推入栈顶；
 *     2、pop：移除栈顶元素，并返回该元素；
 *     3、peek：返回栈顶元素；
 *     4、length：返回栈中元素个数；
 * JavaScript 中的 Array 就具有栈的特性，下面是自己实现的栈
 */
class Stack {
  constructor() {
    this.count = 0
    this.storage = {}
  }

  push(value) {
    this.storage[this.count] = value
    this.count++
  }

  pop() {
    if (this.count === 0) {
      return undefined
    }
    this.count--
    let result = this.storage[this.count]
    delete this.storage[this.count]
    return result
  }

  peek() {
    return this.storage[this.count - 1]
  }

  length() {
    return this.count
  }
}

// let s = new Stack();
// s.push('first');
// s.push('two');
// s.push('thr');
// console.log(s);
// s.pop();
// console.log(s.storage);
// console.log(s.length());

//#endregion

/**
 * 2、队列 -------------------------------------------------------------------------
 */
//#region 队列
/**
 * Queue（队列）
 * 特点：先进先出（first in first out）
 * 方法：
 *    1、enqueue：入队列
 *    2、dequeue：出队列
 *    3、front：获取队列第一个元素
 *    4、isEmpty：队列是否为空
 *    5、size：队列元素个数
 * 这里直接用 JavaScript 的 Array 中的方法实现
 */
class Queue {
  constructor() {
    this.collection = []
  }

  print() {
    console.log(this.collection)
  }

  enqueue(value) {
    this.collection.push(value)
  }

  // 优先队列入列，其他的相同
  priorityEnQueue(value) {
    if (this.collection.isEmpty) {
      this.collection.push(value)
    } else {
      let added = false
      for (let i = 0; i < this.collection.length; i++) {
        if (value < this.collection[i]) {
          this.collection.splice(i, 0, value)
          added = true
          break
        }
      }
      if (!added) {
        this.collection.push(value)
      }
    }
  }

  dequeue() {
    return this.collection.shift()
  }

  front() {
    return this.collection[0]
  }

  isEmpty() {
    return this.collection.length === 0
  }

  size() {
    return this.collection.length
  }
}

//#endregion

/**
 * 3、链表 -------------------------------------------------------------------------
 */
//#region 链表
/**
 * 链表结构
 * 特定：
 *    1、每一个节点包含：节点本身数据和下一节点指针
 *    2、线性的顺序存储数据
 *    3、通过遍历顺序访问，速度慢
 *    4、内存分配灵活，所以添加的时候速度很快
 *    5、可以是单向、双向、循环链表
 * 
 * 单向链表：
 *    1、每一个节点：节点数据和下一节点指针
 *    2、head 是空
 * 
 * 双向链表：
 *    1、每一个节点：两个指针，直接后续、直接前驱
 *    2、从每一个节点开始都可以很方便向前或向后
 *    3、双向循环：把 head 和 最后一个连接起来就形成了循环
 */

/**
 * 链表节点
 * @param {object} element
 */
class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.length = 0
    this.head = null
  }

  size() {
    return this.length
  }

  head() {
    return this.head
  }

  // 在链表末尾添加元素
  add(element) {
    let node = new Node(element)
    if (this.head == null) {
      this.head = node
    } else {
      let currentNode = this.head
      while (currentNode.next) {
        currentNode = currentNode.next
      }
      currentNode.next = node
    }
    this.length++
  }

  // 删除指定元素
  remove(element) {
    let currentNode = this.head
    let previousNode = null
    if (currentNode.element === element) {
      this.head = currentNode.next
    } else {
      while (currentNode.element !== element) {
        previousNode = currentNode
        currentNode = currentNode.next
      }
      previousNode.next = currentNode.next
    }
    this.length--
  }

  isEmpty() {
    return this.length === 0
  }

  // 返回元素的索引
  indexOf(element) {
    let currentNode = this.head
    let index = -1
    while (currentNode) {
      index++
      if (currentNode.element === element) {
        return index
      }
      currentNode = currentNode.next
    }

    return -1
  }

  // 返回指定位置的元素
  elementAt(index) {
    let currentNode = this.head
    let count = 0
    while (count < index) {
      count++
      currentNode = currentNode.next
    }
    return currentNode.element
  }

  // 在指定位置添加
  addAt(index, element) {
    let node = new Node(element)
    let currentNode = this.head
    let previousNode = null
    let currentIndex = 0
    if (index < 0 || index > this.length) {
      return false
    }
    if (index === 0) {
      node.next = currentNode
      this.head = node
    } else {
      while (currentIndex < index) {
        currentIndex++
        previousNode = currentNode
        currentNode = currentNode.next
      }
      previousNode.next = node
      node.next = currentNode
    }
    this.length++
  }

  // 在指定位置移除
  removeAt(index) {
    let currentNode = this.head
    let previousNode = null
    let currentIndex = 0
    if (index < 0 || index >= this.length) {
      return null
    }
    if (index === 0) {
      this.head = currentNode.next
    } else {
      while (currentIndex < index) {
        currentIndex++
        previousNode = currentNode
        currentNode = currentNode.next
      }
      previousNode.next = currentNode.next
    }
    this.length--
    return currentNode.element
  }
}

// 链表测试
// let link = new LinkedList()
// link.add('head')
// console.log('link:',link)
// link.addAt(0,'newHead')
// console.log('link',link)
// link.add('oh')
// console.log('link:2',link.elementAt(2))
// console.log('link',link)
// link.removeAt(1)
// console.log('link',link)

//#endregion

/**
 * 4、集合 -------------------------------------------------------------------------
 */
//#region 集合
/**
 * 集合：具有某种特性的对象汇总成的集体
 *      不允许出现重复元素，且是无序的
 */
class MySet {
  constructor(elements) {
    this.collection = elements ? elements : []
  }

  has(element) {
    return this.collection.indexOf(element) !== -1
  }

  size() {
    return this.collection.length
  }
  values() {
    return this.collection
  }

  add(element) {
    if (!this.has(element)) {
      this.collection.push(element)
      return true
    }
    return false
  }

  remove(element) {
    if (this.has(element)) {
      let index = this.collection.indexOf(element)
      this.collection.splice(index, 1)
      return true
    }
    return false
  }

  // 两个Set的并集
  union(otherSet) {
    let unionSet = new MySet()
    let firstSet = this.values()
    let secondSet = otherSet.values()
    firstSet.forEach(item => {
      unionSet.add(item)
    })
    secondSet.forEach(item => {
      unionSet.add(item)
    })
    return unionSet
  }

  // 两个集合的交集
  intersection(otherSet) {
    let intersectionSet = new MySet()
    let firstSet = this.values()
    firstSet.forEach(item => {
      if (otherSet.has(item)) {
        intersectionSet.add(item)
      }
    })
    return intersectionSet
  }

  // 两个集合的差集
  difference(otherSet) {
    let differenceSet = new MySet()
    let firstSet = this.values()
    firstSet.forEach(item => {
      if (!otherSet.has(item)) {
        differenceSet.add(item)
      }
    })
    return differenceSet
  }

  // 是否是子集
  subset(otherSet) {
    let firstSet = this.values()
    return firstSet.every(item => {
      return otherSet.has(item)
    })
  }
}

// Set 测试
// let set1 = new MySet([1,2,3,4,5,6,7])
// let set2 = new MySet([5,6,7,8,9,10])
// console.log('union:',set1.union(set2))
// console.log('intersection:',set1.intersection(set2))
// console.log('difference:',set1.difference(set2))
// console.log('subset',set1.subset(set2))

//#endregion

/**
 * 5、哈希表 -----------------------------------------------------------------------
 */
//#region 哈希表
/**
 * 计算hash值
 * @param {*} string
 * @param {*} max
 */
function hash(string, max) {
  let hash = 0
  for (let i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i)
  }
  return hash % max
}

/**
 * HashTable：存储键值对，其key是通过hash计算的，是唯一的，所以查找很快
 */
class HashTable {
  constructor() {
    this.storage = []
    this.storageLimt = 4
  }

  // 向 HashTable 中添加数据
  add(key, value) {
    let index = hash(key, this.storageLimt)
    if (this.storage[index] === undefined) {
      this.storage[index] = [[key, value]]
    } else {
      let inserted = false
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          this.storage[index][i][1] = value
          inserted = true
        }
      }
      if (!inserted) {
        this.storage[index].push([key, value])
      }
    }
  }

  // 从HashTable移除数据
  remove(key) {
    let index = hash(key, this.storageLimt)
    // 分开处理是，当只有一个且key就是要删除的，删除整个的
    if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
      delete this.storage[index]
    } else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          delete this.storage[index][i]
        }
      }
    }
  }

  // 根据key查找hash值
  lookup(key) {
    let index = hash(key, this.storageLimt)
    if (this.storage[index] === undefined) {
      return undefined
    } else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          return this.storage[index][i][1]
        }
      }
    }
  }
}

// HashTable 测试
// let hTable = new HashTable()
// hTable.add('123',123)
// console.log(hTable.storage)
// hTable.add(123,456)
// console.log(hTable.storage)
// hTable.add('tyfhy',897)
// console.log(hTable.storage)

//#endregion

/**
 * 6、树 --------------------------------------------------------------------------
 */
//#region 树
/**
 * 树节点类
 * 树是一个非线性的数据结构，插入和搜索的效率很高
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
 * 二叉查找树：每个节点最多两个节点，且左节点小于父节点，右节点大于父节点（数中的一个常用分类）
 */
class BST {
  constructor() {
    this.root = null
  }

  // 插入节点，在插入过程中用到递归
  add(data) {
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
        } else if (data > node.data) {
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
    // 对树进行遍历，删除要删除的节点数据，并更新值
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
bst.remove(7)
console.log('Max:',bst.findMax())
console.log('isPresent:',bst.isPresent(4))
bst.remove(4)
console.log('isPresent:',bst.isPresent(4))
console.log(bst)

//#endregion

/**
 * 7、堆 ---------------------------------------------------------------------------
 */
//#region 堆
/**
 * 堆：
 *  
 */
//#endregion

/**
 * 8、字典树 -----------------------------------------------------------------------
 */

/**
 * 9、图 ---------------------------------------------------------------------------
 */
