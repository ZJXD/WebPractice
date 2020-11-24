<template>
  <div class="stard-gl">
    <canvas ref="canvas" class="canvas-box" />
  </div>
</template>

<script>
import { mat4 } from 'gl-matrix'

// 顶点着色器程序
const VS_SOURCE = `
  attribute vec4 aVertexPosition;
  attribute vec4 aVertexColor;

  uniform mat4 uModelViewMatrix;
  uniform mat4 uProjectionMatrix;

  varying lowp vec4 vColor;

  void main() {
    gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
    vColor = aVertexColor;
  }
`

// 片段着色器程序
const FS_SOURCE = `
  varying lowp vec4 vColor;
  void main() {
    gl_FragColor = vColor;
  }
`

export default {
  data() {
    return {
      glContext: null,
      programInfo: null,
      buffers: null
    }
  },
  mounted() {
    const canvas = this.$refs.canvas
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    this.glContext = canvas.getContext('webgl')
    // 两种方式都可以
    // this.glContext = canvas.getContext('experimental-webgl')

    // 用黑色清除整个区域
    // this.glContext.clearColor(0, 0, 0, 1)
    // 用指定颜色清除缓冲区
    // this.glContext.clear(this.glContext.COLOR_BUFFER_BIT)

    this.drawScene()
  },
  methods: {
    initShaderProgram() {
      const vertexShader = this.loadShader(this.glContext.VERTEX_SHADER, VS_SOURCE)
      const fragmentShader = this.loadShader(this.glContext.FRAGMENT_SHADER, FS_SOURCE)

      // 创建着色器程序，并连接在一起
      const shaderProgram = this.glContext.createProgram()
      this.glContext.attachShader(shaderProgram, vertexShader)
      this.glContext.attachShader(shaderProgram, fragmentShader)
      this.glContext.linkProgram(shaderProgram)

      console.log(`着色器程序：`, this.glContext.getProgramParameter(shaderProgram, this.glContext.LINK_STATUS))
      console.log(`着色器程序：`, this.glContext.getProgramInfoLog(shaderProgram))
      // 创建失败， alert
      if (!this.glContext.getProgramParameter(shaderProgram, this.glContext.LINK_STATUS)) {
        alert('Unable to initialize the shader program: ' + this.glContext.getProgramInfoLog(shaderProgram))
        return null
      }

      this.programInfo = {
        program: shaderProgram,
        attribLocations: {
          vertexPosition: this.glContext.getAttribLocation(shaderProgram, 'aVertexPosition'),
          vertexColorAttribute: this.glContext.getAttribLocation(shaderProgram, 'aVertexColor')
        },
        uniformLocations: {
          projectionMatrix: this.glContext.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
          modelViewMatrix: this.glContext.getUniformLocation(shaderProgram, 'uModelViewMatrix')
        }
      }
    },

    // 创建指定类型的着色器，上传source源码并编译
    loadShader(type, source) {
      // 创建着色器
      const shader = this.glContext.createShader(type)

      // 将源代码发送到着色器
      this.glContext.shaderSource(shader, source)

      this.glContext.compileShader(shader)
      console.log(`${type}着色器编译：`, this.glContext.getShaderParameter(shader, this.glContext.COMPILE_STATUS))
      console.log(`${type}着色器日志：`, this.glContext.getShaderInfoLog(shader))
      // if (!this.glContext.getShaderParameter(shader, this.glContext.COMPILE_STATUS)) {
      //   alert('An error occurred compiling the shaders: ' + this.glContext.getShaderInfoLog(shader))
      //   this.glContext.deleteShader(shader)
      //   return null
      // }

      return shader
    },

    // 创建缓冲器，存储要素顶点
    initBuffers() {
      const positionBuffer = this.glContext.createBuffer()

      const vertices = [
        1.0, 1.0,
        -1.0, 1.0,
        1.0, -1.0,
        -1.0, -1.0
      ]
      this.glContext.bindBuffer(this.glContext.ARRAY_BUFFER, positionBuffer)
      this.glContext.bufferData(this.glContext.ARRAY_BUFFER, new Float32Array(vertices), this.glContext.STATIC_DRAW)

      const colorBuffer = this.glContext.createBuffer()
      const colors = [
        1.0, 1.0, 1.0, 1.0,
        1.0, 0.0, 0.0, 1.0,
        0.0, 1.0, 0.0, 1.0,
        0.0, 0.0, 1.0, 1.0
      ]
      this.glContext.bindBuffer(this.glContext.ARRAY_BUFFER, colorBuffer)
      this.glContext.bufferData(this.glContext.ARRAY_BUFFER, new Float32Array(colors), this.glContext.STATIC_DRAW)

      this.buffers = { position: positionBuffer, color: colorBuffer }
    },

    drawScene() {
      this.initShaderProgram()
      this.initBuffers()

      this.glContext.clearColor(0.0, 0.0, 0.0, 1.0)
      this.glContext.clearDepth(1.0)
      this.glContext.enable(this.glContext.DEPTH_TEST)
      this.glContext.depthFunc(this.glContext.LEQUAL)

      this.glContext.clear(this.glContext.COLOR_BUFFER_BIT | this.glContext.DEPTH_BUFFER_BIT)

      const fieldOfView = 45 * Math.PI / 180
      const aspect = this.glContext.canvas.clientWidth / this.glContext.canvas.clientHeight
      const zNear = 0.1
      const zFar = 100.0
      const projectionMatrix = mat4.create()

      mat4.perspective(projectionMatrix, fieldOfView, aspect, zNear, zFar)

      const modelViewMatrix = mat4.create()

      mat4.translate(modelViewMatrix, modelViewMatrix, [-0.0, 0.0, -6])

      {
        const numComponents = 2
        const type = this.glContext.FLOAT
        const normalize = false
        const stride = 0
        const offset = 0
        this.glContext.bindBuffer(this.glContext.ARRAY_BUFFER, this.buffers.position)
        this.glContext.vertexAttribPointer(
          this.programInfo.attribLocations.vertexPosition,
          numComponents,
          type,
          normalize,
          stride,
          offset
        )
        this.glContext.enableVertexAttribArray(this.programInfo.attribLocations.vertexPosition)
      }

      {
        const numComponents = 4
        const type = this.glContext.FLOAT
        const normalize = false
        const stride = 0
        const offset = 0
        this.glContext.bindBuffer(this.glContext.ARRAY_BUFFER, this.buffers.color)
        this.glContext.vertexAttribPointer(
          this.programInfo.attribLocations.vertexColorAttribute,
          numComponents,
          type,
          normalize,
          stride,
          offset
        )
        this.glContext.enableVertexAttribArray(this.programInfo.attribLocations.vertexColorAttribute)
      }

      this.glContext.useProgram(this.programInfo.program)

      this.glContext.uniformMatrix4fv(this.programInfo.uniformLocations.projectionMatrix, false, projectionMatrix)
      this.glContext.uniformMatrix4fv(this.programInfo.uniformLocations.modelViewMatrix, false, modelViewMatrix)
      {
        const offset = 0
        const vertexCount = 4
        this.glContext.drawArrays(this.glContext.TRIANGLE_STRIP, offset, vertexCount)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.stard-gl {
  width: 100%;
  height: calc(100% - 61px);

  .canvas-box {
    width: 100%;
    height: 100%;
    background-color: #888;
  }
}
</style>
