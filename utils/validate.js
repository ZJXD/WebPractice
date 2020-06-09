/**
 * 表单验证相关
 */

// 验证 仅由英文字母，数字以及下划线组成
export function isPassword(value) {
  if (!value) { return false }
  const reg = /^[_a-zA-Z0-9]+$/
  return !!(value && reg.test(value))
}

// 密码校验 6-20位英文字母、数字或者符号（除空格），且字母、数字和标点符号至少包含两种
export function validatePsdReg(value) {
  if (!value) { return false }
  const reg = /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$)([^\u4e00-\u9fa5\s]){6,20}$/
  return !!(value && reg.test(value))
}

// 是否手机号码
export function validatePhone(value) {
  if (!value) { return false }
  const reg = /^[1][3-9][0-9]{9}$/
  return !!(value && reg.test(value))
}

// 是否身份证号码
export function validateIdNo(value) {
  if (!value) { return false }
  const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
  return !!(value && reg.test(value))
}

// 是否邮箱
export function validateEMail(value) {
  if (!value) { return false }
  const reg = /^([a-zA-Z0-9]+[-_\.]?)+@[a-zA-Z0-9]+\.[a-z]+$/
  return !!(value && reg.test(value))
}

// 是否合法IP地址
export function validateIP(value) {
  if (!value) { return false }
  const reg =
    /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/
  return !!(value && reg.test(value))
}

// 是否合法uri
export function validateURL(value) {
  if (!value) { return false }
  const reg =
    /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return !!(value && reg.test(value))
}

// 中文校验
export const validateContacts = (rule, value, callback) => {
  const reg = /^[\u0391-\uFFE5A-Za-z]+$/
  return !!(value && reg.test(value))
}
