/**
 * 每个粒子运动轨迹类
 */

class Particle {
  /**
   * 粒子运动轨迹构造函数
   * @param {canvasContext} ctx 画布
   * @param {point} center 停留点
   * @param {Number} width 画布宽
   * @param {Number} height 画布高
   */
  constructor(ctx, center, width, height) {
    this.ctx = ctx
    // 点位最终停留的位置
    this.x = center.x
    // 点位最终停留的位置
    this.y = center.y
    // 贝塞尔曲线系数
    this.item = 0
    // 点位在 x 轴移动速度
    this.vx = 1
    this.vy = 1
    // 随机生成点位的初始位置
    this.initX = Math.random() * width
    this.initY = Math.random() * height
  }

  // 绘制点
  draw() {
    this.ctx.beginPath()
    const { x, y } = threeBezier(
      this.item,
      [this.initX, this.initY],
      [this.x, this.y],
      [this.x, this.y],
      [this.x, this.y]
    )
    this.ctx.arc(x, y, 2, 0, 2 * Math.PI, true)
    this.ctx.fillStyle = 'red'
    this.ctx.fill()
    this.ctx.closePath()
    this.speed()
  }

  // 点位移动
  speed() {
    this.initX += this.vx
    this.initY += this.vy
    this.item += 0.05
  }
}

const threeBezier = (t, p1, p2, cp1, cp2) => {
  const [startX, startY] = p1
  const [endX, endY] = p2
  const [cp1X, cp1Y] = cp1
  const [cp2X, cp2Y] = cp2

  const x =
    startX * Math.pow(1 - t, 3) +
    3 * cp1X * t * Math.pow(1 - t, 2) +
    3 * cp2X * Math.pow(t, 2) * (1 - t) +
    endX * Math.pow(t, 3)
  const y =
    startY * Math.pow(1 - t, 3) +
    3 * cp1Y * Math.pow(1 - t, 2) * t +
    3 * cp2Y * (1 - t) * Math.pow(t, 2) +
    endY * Math.pow(t, 3)

  return { x, y }
}

export default Particle
