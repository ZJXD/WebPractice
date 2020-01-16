/*
 * @Author: ZHT
 * @Date: 2020-01-14 09:55:11
 * @Last Modified by: ZHT
 * @Last Modified time: 2020-01-14 10:02:45
 */

/**
 * 作用域练习
 */
const { log } = console

function outFun() {
  var str1 = 'sss'

  srr2 = 'sss2'

  log(srr2)
}
outFun()

log(srr2)
