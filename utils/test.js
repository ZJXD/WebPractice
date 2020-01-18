/*
 * @Author: ZHT
 * @Date: 2020-01-18 12:13:26
 * @Last Modified by: ZHT
 * @Last Modified time: 2020-01-18 12:13:53
 */

// const path = require('path')
// console.log('path.....', path.resolve('./gps.js'))

//#region 测试坐标转换
// import GPS from './gps'  // 浏览器模式下
// import { GCJ02toWGS84 } from './gps'
// let GPS = require('./gps.js') // Node 模式下和 浏览器模式

// let location = [120.209493, 30.281839]

// let newLocation = GPS.GCJ02toWGS84(location[0], location[1])

// console.log('newLocation', newLocation)
//#endregion

//#region 测试河道坐标剔除下级坐标（适应场景有局限）
// let parentPoint = [
//   [120.209493, 30.281839],
//   [120.210866, 30.281247],
//   [120.212368, 30.280246],
//   [120.214342, 30.277948],
//   [120.216445, 30.275243],
//   [120.220351, 30.270202],
//   [120.227002, 30.260305],
//   [120.228462, 30.25823]
// ]
// let parentPointStr =
//   '[[120.209493,30.281839],[120.210866,30.281247],[120.212368,30.280246],[120.214342,30.277948],[120.216445,30.275243],[120.220351,30.270202],[120.227002,30.260305],[120.228462,30.25823]]'

// let brotherPoints = [
//   [120.209493, 30.281839],
//   [120.210866, 30.281247],
//   [120.212368, 30.280246],
//   [120.214342, 30.277948],
//   [120.215178, 30.276872]
// ]

// let brotherPointsStr = [
//   '[[120.209493,30.281839],[120.210866,30.281247],[120.212368,30.280246],[120.214342,30.277948],[120.215178,30.276872]]',
//   '[[120.215178,30.276872],[120.216445,30.275243],[120.220351,30.270202],[120.227002,30.260305],[120.228462,30.25823]]',
//   '[[120.210178,30.276872],[120.212368,30.280246],[120.214342,30.277948],[120.216445,30.275243],[120.219178,30.276872]]'
// ]
// let temp = brotherPointsStr[2].slice(1, -1).split('],')
// let startPoint = temp[0] + ']'
// let startPoints = temp.slice(0, -1).join('],') + ']'
// let endPoint = temp[temp.length - 1]
// let endPoints = temp.slice(1).join('],')
// let centerPoints = temp.slice(1, -1).join('],') + ']'
// console.log('startPoint', startPoint)

// let newParentPointStr = ''
// if (parentPointStr.indexOf(startPoints) > -1) {
//   console.log('start')
//   newParentPointStr = parentPointStr.replace(startPoints, endPoint)
// } else if (parentPointStr.indexOf(endPoints) > -1) {
//   console.log('end')
//   newParentPointStr = parentPointStr.replace(endPoints, startPoint)
// } else if (parentPointStr.indexOf(centerPoints) > -1) {
//   console.log('center')
//   newParentPointStr = parentPointStr.split(centerPoints)[0] + startPoint + ']'
// }
// console.log('newParentPointStr', newParentPointStr)
// // 思路：子线路一定是父线路中的
// // 1、是开始：把前面几个切割掉，并
// // 2、是结尾
// // 3、是中间

// function getIndex() {
//   let brotherIndexs = []
//   brotherPointsStr.map(item => {
//     brotherIndexs.push(parentPointStr.indexOf(item.slice(1, -1)))
//   })
//   console.log('brotherIndexs', brotherIndexs)
// }

// // getIndex()

//#endregion

//#region 测试字符串
// console.log(y)
// var y = 1
// console.log(y)

// let str1 = 'abceenafghefdaknafbies'

// console.log(str1.indexOf('naf'))
// console.log(str1.lastIndexOf('naf'))

// console.log(str1.indexOf('naf', 50))
//#endregion

function Fun() {
  var getName = function() {
    console.log(1)
  }
  return this
}

Fun.getName = function() {
  console.log(2)
}

Fun.prototype.getName = function() {
  console.log(3)
}

var getName = function() {
  console.log(4)
}

console.log(new new Fun().getName())
// Fun.getName()
// Fun().getName()
