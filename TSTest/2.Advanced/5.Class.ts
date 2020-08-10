/**
 * 类（Class）
 * 传统方法中，JS 通过构造函数实现类的概念，通过原型链实现继承
 * ES6 中有了 Class
 *
 * TS 除了实现所有的 ES6 中类的功能外，还添加了一些新的方法
 */

// 类的概念 -----------------------------------------------------------------

/**
 * 概念
 * 类（Class）：定义了一件事物的抽象特点，包含属性和方法
 * 对象（Object）：类的实例，通过 new 生成
 * 面向对象（OOP）三大特性：封装、继承、多态
 * 封装（Encapsulation）：对数据的操作细节隐藏起来，只暴露对外接口。
 *     外界调用端不需要知道细节，通过接口来访问对象，同时也保证了外界
 *     无法任意更改对象内部的数据
 * 继承（Inherritance）：子类继承父类，子类除了拥有父类的所有特性外，
 *     还有一些更具体的特性
 * 多态（Polymorphism）：由继承产生了相关的不同的类，对同一个方法有
 *     不同的响应。比如 Cat 和 Dog 都继承自 Animal，但分别实现了自
 *     己的 eat 方法。此时针对某一个实例，我们无需了解它是 Cat 还是
 *     Dog，就可以直接调用 eat 方法，程序会自动判断该如何执行 eat
 * 存取器（getter、setter）：属性的读取、赋值行为
 * 修饰符（Modifiers）：是一些关键字，用于限定成员或类型的性质。比如
 *     比如 public 表示共有属性或方法
 * 抽象类（Abstract Class）：抽象类是供其他类继承的基类，不允许实例
 *     化，抽象类中的抽象方法在子类必须实现
 * 接口（Interface）：不同类之间共有的属性或方法，可以抽象成一个接口，
 *     接口可以被类实现。一个类只能继承自一个类，但是可以实现多个接口
 */

// ES6 类的用法 -------------------------------------------------------------
// 基本使用
class Animal {
  // 示例属性
  public name: string
  // 静态属性
  static ClassName: string = 'Animal'
  constructor(name: string) {
    this.name = name
  }
  sayHi(): string {
    return 'My name is' + this.name
  }

  // 存取器，改变属性的赋值和读取行为
  get address() {
    return 'address test'
  }
  set address(value) {
    console.log('setter:' + value)
  }

  // 静态方法，不需要实例化可以直接调用
  static isAnimal(a: any): Boolean {
    return a instanceof Animal
  }
}

let a = new Animal('Kitty')
a.address = 'Tom'
console.log(a.address)
console.log(Animal.ClassName)

// 类的继承
class Cat extends Animal {
  constructor(name: string) {
    super(name) // 调用父类 constructor
  }
  sayHi(): string {
    return 'Meow, ' + super.sayHi() // 调用父类方法
  }
}
