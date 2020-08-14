/**
 * 接口（Interfaces）
 *    这里介绍接口的另一个用途：对类的一部分进行抽象
 */

/**
 * 类实现接口
 *     实现（implements）是面向对象中的一个重要概念。一般来讲，一个类只能继承自另一个类，
 *     有时候不同类之间可以有一些共有的特性。这时候就可以把特性提取成接口，用关键字
 *     implements 来实现，这个特性大大提高了面向对象的灵活性。
 */

/**
 * 下面是防盗门和车都实现报警功能，就把报警功能提取出来，防盗门是继承自门
 */
interface Alarm {
  alert(): void
}

class Door {}

// 一个类可以继承自一个类也可以再实现接口
class SecurityDoor extends Door implements Alarm {
  alert() {
    console.log('SecurityDoor alert')
  }
}

interface Light {
  lightOn(): void
  lightOff(): void
}

// 一个类可以实现多个接口
class Car implements Alarm, Light {
  alert() {
    console.log('Car alert')
  }

  lightOff() {
    console.log('Car Light Off')
  }

  lightOn() {
    console.log('Car Light On')
  }
}

/**
 * 接口继承接口
 */

interface LightableAlarm extends Alarm {
  lightOn(): void
  lightOff(): void
}

// 所以上面的也可以这样实现
class AlarmCar implements LightableAlarm {
  alert() {
    console.log('AlarmCar alert')
  }

  lightOff() {
    console.log('AlarmCar Light Off')
  }

  lightOn() {
    console.log('AlarmCar Light On')
  }
}

/**
 * 接口继承类
 * 在一般的面向对象的语音中，接口是不能继承自类的
 * 但是在 TypeScript 中，接口是可以继承自类
 */

// 下面用一个例子来说明
class Point {
  x: number
  y: number
  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
}

interface Point3D extends Point {
  z: number
}

let point3d: Point3D = { x: 120.234, y: 30.235, z: 20 }

// 上面的例子中 Point3D 继承自类 Point
// 因为在 TS 中，当声明 class point 时，除了会创建 Point 类
// 同时也创建一个名为 Point 的类型（实例的类型）
// 所以在声明一个类，既可以当作类用，也可以当作类型来用

// Point 当类型使用
function printPoint(p: Point) {
  console.log(p.x, p.y)
}
printPoint(new Point(2, 4))

function printPoint3D(p: Point3D) {
  console.log(p.x, p.y, p.z)
}
printPoint3D({ x: 3, y: 3, z: 1 })

// 接口继承自类，是继承自定义的对应的类型
// 所以：接口继承自类 = 接口继承自接口

// 创建类时创建的类型，不包含：构造函数、静态方法、静态属性
// 所以接口继承类，只会继承：实例属性、实例方法
