/**
 * 数据结构练习
 * 参考：https://segmentfault.com/a/1190000020011987
 */

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
    this.count = 0;
    this.storage = {};
  }

  push (value) {
    this.storage[this.count] = value;
    this.count++;
  }

  pop (){
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  peek (){
    return this.storage[this.count-1];
  }

  length (){
    return this.count;
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

/**
 * Queue（队列）
 * 特点：先进先出
 * 方法：
 *    1、enqueue：入队列
 *    2、dequeue：出队列
 *    3、front：获取队列第一个元素
 *    4、isEmpty：队列是否为空
 *    5、size：队列元素个数
 * 这里直接用 JavaScript 的 Array 中的方法实现
 */
class Queue{
  constructor() {
    this.collection = [];
  }

  print (){
    console.log(this.collection)
  }

  enqueue (value){
    this.collection.push(value)
  }

  // 优先队列入列，其他的相同
  priorityEnQueue(value){
    if (this.collection.isEmpty) {
      this.collection.push(value);
    }else{
      let added = false;
      for (let i = 0; i < this.collection.length; i++) {
        if (value<this.collection[i]) {
          this.collection.splice(i,0,value);
          added = true;
          break;
        }
      }
      if (!added) {
        this.collection.push(value);
      }
    }
  }

  dequeue (){
    return this.collection.shift();
  }

  front (){
    return this.collection[0];
  }

  isEmpty (){
    return this.collection.length === 0;
  }

  size (){
    return this.collection.length;
  }
}