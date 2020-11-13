export class Crood {
  constructor(x = 0, y = 0) {
    this.x = x
    this.y = y
  }

  setCoord(x, y) {
    this.x = x
    this.y = y
  }

  copy() {
    return new Crood(this.x, this.y)
  }
}

// 流星类
export class ShootingStar {
  constructor(startPoint = new Crood(), endPoint = new Crood(), size = 1, speed = 200, onDistory = null, distance = 0) {
    this.startPoint = startPoint
    this.endPoint = endPoint
    this.size = size
    this.speed = speed
    this.distance = distance

    // 飞行时间
    if (this.distance <= 0) {
      this.distance = Math.sqrt(Math.pow(this.endPoint.x - this.startPoint.x, 2) + Math.pow(this.endPoint.y - this.startPoint.y, 2))
    }
    this.dur = this.distance * 1000 / this.speed
    this.passTime = 0
    this.prePoint = this.startPoint.copy()
    this.nowPoint = this.startPoint.copy()
    this.onDistory = onDistory
  }

  draw(ctx, delay) {
    this.passTime += delay
    this.passTime = Math.min(this.passTime, this.dur)
    const percent = this.passTime / this.dur
    this.nowPoint.setCoord(
      this.startPoint.x + (this.endPoint.x - this.startPoint.x) * percent,
      this.startPoint.y + (this.endPoint.y - this.startPoint.y) * percent
    )

    // canvas 样式
    ctx.strokeStyle = '#fff'
    ctx.lineCap = 'round'
    ctx.lineWidth = this.size
    ctx.beginPath()
    ctx.moveTo(this.nowPoint.x, this.nowPoint.y)
    ctx.lineTo(this.prePoint.x, this.prePoint.y)
    ctx.stroke()

    this.prePoint.setCoord(this.nowPoint.x, this.nowPoint.y)
    if (this.passTime >= this.dur) {
      this.distory()
    }
  }

  distory() {
    this.onDistory && this.onDistory()
  }
}

export class MeteorShower {
  constructor(cvs, ctx) {
    this.cvs = cvs
    this.ctx = ctx
    this.starts = []
    this.frame = null
    this.stop = false
    this.playing = false
    this.lastTime = null
  }

  createStar() {
    const angle = Math.PI / 3
    const distance = Math.random() * 600
    const startPoint = new Crood(Math.random() * this.cvs.width | 0, Math.random() * 100 | 0)
    const endPoint = new Crood(startPoint.x + distance * Math.cos(angle), startPoint.y + distance * Math.sin(angle))
    const size = Math.random() * 2
    const speed = Math.random() * 400 + 100
    const star = new ShootingStar(startPoint, endPoint, size, speed, () => { this.remove(star) }, distance)
    return star
  }

  remove(star) {
    this.starts = this.starts.filter(s => s !== star)
  }

  update(delay) {
    if (!this.stop && this.starts.length < 40) {
      this.starts.push(this.createStar())
    }
    this.starts.map(star => star.draw(this.ctx, delay))
  }

  start() {
    this.stop = false
    this.tick()
  }

  stopStarts() {
    this.stop = true
    // 释放 GPU 资源占用(否则GPU一直在，不会释放)
    this.starts.map(star => star.distory())
  }

  tick() {
    if (this.playing) return
    this.playing = true

    const _tick = () => {
      const now = (new Date()).getTime()
      this.lastTime = now
      let delay = now - this.lastTime

      if (this.stop && this.starts.length === 0) {
        cancelAnimationFrame(this.frame)
        this.playing = false
        return
      }

      delay = delay > 500 ? 30 : (delay < 16 ? 16 : delay)
      this.lastTime = now
      this.frame = requestAnimationFrame(_tick)

      this.ctx.save()
      this.ctx.fillStyle = 'rgba(0,0,0,0.6)'
      this.ctx.globalCompositeOperation = 'destination-in'
      this.ctx.fillRect(0, 0, this.cvs.width, this.cvs.height)
      this.ctx.restore()

      this.update(delay)
    }

    _tick()
  }
}
