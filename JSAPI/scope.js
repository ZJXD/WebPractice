/*
 * @Author: ZHT
 * @Date: 2020-01-14 09:55:11
 * @Last Modified by: ZHT
 * @Last Modified time: 2020-02-26 17:59:51
 */

/**
 * 作用域练习
 */
const { log } = console

function outFun() {
  var str1 = 'sss'

  srr2 = 'sss2'

  log(str1)
}
outFun()

log(srr2)
