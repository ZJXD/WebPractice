import SockJS from 'sockjs-client'
import Stomp from 'stompjs'

export default class AppSocket {
  constructor({ guid = '', url = '', headers = {}, heartIntervaltime = 1000 * 10, reconnInterval = 1000 * 5, modules = [] }) {
    this.url = url
    this.guid = guid
    this.headers = headers
    this.heartIntervaltime = heartIntervaltime // 心跳间隔 ms
    this.reconnInterval = reconnInterval // 重连间隔 ms
    this.modules = modules // 模块列表
    this.socketState = 0 // -1异常 0未连接 1已连接 2已断开
    this.handles = {}
    this.url && this.init()
  }

  // 初始化
  init() {
    if (typeof (WebSocket) === 'undefined') {
      this.socket = new SockJS(this.url) // 建立连接对象
      this.stompClient = Stomp.over(this.socket) // 获取STOMP子协议的客户端对象
      this.stompClient.connect(this.headers, () => {
        // 订阅服务端提供的某个topic
        this.stompClient.subscribe('/topic/public', this.onmessage, this.headers)
      }, (err) => {
        console.error('连接失败，错误信息', err)
      })
    } else {
      this.socket = new WebSocket(this.url)
      // 事件
      this.socket.onopen = message => {
        this.socketState = 1
        this.modules.length > 0 && this.send(this.modules)
      }
      this.socket.onmessage = (msg) => {
        try {
          const data = JSON.parse(msg.data)
          this.emit('message', data)
        } catch (error) {
          console.error('收到广播解析错误 catch---- ' + msg.data)
          this.emit('message', msg.data)
        }
      }
      this.socket.onerror = (error) => { console.error('连接错误！！！ ', error) }
      this.socket.onbeforeunload = () => { this.close() }
      this.socket.onclose = () => {
        console.error('连接已关闭！！.... 关闭状态：', this.socketState === 2 ? '主动断开' : '异常断开需要重连')
        if (this.socketState !== 2) {
          this.socketState = -1
          this.reconnection()
        }
      }
    }
    this.keepheart()
  }

  // 订阅事件
  on(eventType, handle) {
    if (!this.handles.hasOwnProperty(eventType)) {
      this.handles[eventType] = []
    }
    if (typeof handle === 'function') {
      this.handles[eventType].push(handle)
    } else {
      throw new Error('缺少回调函数')
    }
    return this
  }

  // 发布事件
  emit(eventType, ...args) {
    if (this.handles.hasOwnProperty(eventType)) {
      this.handles[eventType].forEach((item, key, arr) => {
        item.apply(null, args)
      })
    } else {
      throw new Error(`"${eventType}"事件未注册`)
    }
    return this
  }

  // 删除事件
  off(eventType, handle) {
    if (!this.handles.hasOwnProperty(eventType)) {
      throw new Error(`"${eventType}"事件未注册`)
    } else if (typeof handle !== 'function') {
      throw new Error('缺少回调函数')
    } else {
      this.handles[eventType].forEach((item, key, arr) => {
        if (item === handle) {
          arr.splice(key, 1)
        }
      })
    }
    return this // 实现链式操作
  }

  offAll() {
    this.handles = {}
  }

  // 断线重连
  reconnection() {
    setTimeout(() => {
      console.error('正在重连.... 连接状态：', this.socketState === 2 ? '连接已关闭' : '异常断开重新初始化...')
      this.socketState === -1 && this.init()
    }, this.reconnInterval)
  }

  // 心跳
  keepheart() {
    this.heartInterval && clearInterval(this.heartInterval)
    this.heartInterval = setInterval(() => {
      this.socketState === 1 && this.send('心跳监测...', 0)
    }, this.heartIntervaltime)
  }

  // 发送消息
  send(data, type = 1) {
    const msg = { guid: this.guid, type, data }
    if (type === 1) {
      this.modules = data
    }
    this.socket && this.socket.send(JSON.stringify(msg))
    return this.socket
  }

  // 销毁
  distroy() {
    this.offAll()
    this.heartInterval && clearInterval(this.heartInterval)
    this.socketState = 2
    this.socket && this.socket.close()
  }
}
