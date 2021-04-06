/**
 * 文件上传、下载等
 */

import { BASE_API, BASE_IMG_URL } from './config'

/**
 * 图片路径处理
 * @param baseUrl 基础路径
 * @param url 图片路径
 * @param w 图片宽
 * @param h 图片高
 * @param q 图片质量 （0-100）
 */
const handleImg = function(baseUrl, url, w, h, q) {
  if (!url || url.length < 1) {
    return url
  }
  /* eslint no-useless-escape: */
  const urlMatch = /^((ht|f)tps?):\/\/([\w\-]+(\.[\w\-]+)*\/)*[\w\-]+(\.[\w\-]+)*\/?(\?([\w\-\.,@?^=%&:\/~\+#]*)+)?/
  let fullUrl = url
  if (w && h) {
    fullUrl = fullUrl + '?w=' + w + '&h=' + h
  }
  if (q) {
    fullUrl = w && h ? fullUrl + '&q=' + q : fullUrl + '?q=' + q
  }
  fullUrl = urlMatch.test(url) ? fullUrl : baseUrl + '/' + fullUrl
  return fullUrl
}

export function getImagePath(url, w, h, q) {
  return handleImg(BASE_IMG_URL, url, w, h, q)
}

export function getUploadFilePath() {
  return `${BASE_API}/file/file/upload`
}

export function getUploadFilesPath() {
  return `${BASE_API}/file/file/uploadFiles`
}

// 获取地址栏参数
export function getUrlParam(param) {
  const reg = new RegExp('(^|&)' + param + '=([^&]*)(&|$)')
  const r = window.location.search.substr(1).match(reg) || window.location.hash.substring((window.location.hash.search(/\?/)) + 1).match(reg)
  if (r != null) {
    return decodeURIComponent(r[2])
  }
}
