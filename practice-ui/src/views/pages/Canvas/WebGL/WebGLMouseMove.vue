<template>
  <div class="stard-gl">
    <canvas ref="canvas" class="canvas-box" @mousedown="onMouseDown" @mousemove="onMouseMove" @mouseup="onMouseUp" />
  </div>
</template>

<script>
import { mat4 } from 'gl-matrix'

// 顶点着色器程序
const VS_SOURCE = `
  attribute vec4 aVertexPosition;
  attribute vec4 aVertexColor;
  attribute vec2 aTextureCoord;

  uniform mat4 uModelViewMatrix;
  uniform mat4 uProjectionMatrix;

  varying lowp vec4 vColor;
  varying highp vec2 vTextureCoord;

  void main() {
    gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
    vTextureCoord = aTextureCoord;
  }
`

// 片段着色器程序
const FS_SOURCE = `
  varying highp vec2 vTextureCoord;
  uniform sampler2D uSampler;
  void main() {
    gl_FragColor = texture2D(uSampler,vTextureCoord);
  }
`

export default {
  data() {
    return {
      glContext: null,
      programInfo: null,
      buffers: null,
      rotationAngle: 60,
      oldRotation: 0,
      xRotation: 1,
      yRotation: 1,
      curTexture: null,
      canvasWidth: 0,
      canvasHeight: 0,
      startX: 0,
      startY: 0,
      isDown: false
    }
  },
  mounted() {
    const canvas = this.$refs.canvas
    this.canvasWidth = canvas.offsetWidth
    this.canvasHeight = canvas.offsetHeight
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    this.glContext = canvas.getContext('webgl')
    // 两种方式都可以
    // this.glContext = canvas.getContext('experimental-webgl')

    // 用黑色清除整个区域
    // this.glContext.clearColor(0, 0, 0, 1)
    // 用指定颜色清除缓冲区
    // this.glContext.clear(this.glContext.COLOR_BUFFER_BIT)

    // 正方形动画
    this.initTexture()
    this.initShaderProgram()
    this.initBuffers()
    this.drawScene()
  },
  beforDistroy() {
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
          vertexColorAttribute: this.glContext.getAttribLocation(shaderProgram, 'aVertexColor'),
          textureCoordAttribute: this.glContext.getAttribLocation(shaderProgram, 'aTextureCoord')
        },
        uniformLocations: {
          projectionMatrix: this.glContext.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
          modelViewMatrix: this.glContext.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
          uSampler: this.glContext.getUniformLocation(shaderProgram, 'uSampler')
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

    initTexture() {
      this.curTexture = this.glContext.createTexture()
      this.glContext.bindTexture(this.glContext.TEXTURE_2D, this.curTexture)

      const level = 0
      const internalFormat = this.glContext.RGBA
      const width = 1
      const height = 1
      const border = 0
      const srcFormat = this.glContext.RGBA
      const srcType = this.glContext.UNSIGNED_BYTE
      const pixel = new Uint8Array([0, 0, 255, 255]) // opaque blue
      this.glContext.texImage2D(this.glContext.TEXTURE_2D, level, internalFormat,
        width, height, border, srcFormat, srcType,
        pixel)

      const image = new Image()
      const that = this
      image.onload = () => {
        that.glContext.bindTexture(that.glContext.TEXTURE_2D, that.curTexture)
        that.glContext.texImage2D(that.glContext.TEXTURE_2D, level, internalFormat,
          srcFormat, srcType, image)

        // WebGL1 has different requirements for power of 2 images
        // vs non power of 2 images so check if the image is a
        // power of 2 in both dimensions.
        if (that.isPowerOf2(image.width) && that.isPowerOf2(image.height)) {
          // Yes, it's a power of 2. Generate mips.
          that.glContext.generateMipmap(that.glContext.TEXTURE_2D)
        } else {
          // No, it's not a power of 2. Turn of mips and set
          // wrapping to clamp to edge
          that.glContext.texParameteri(that.glContext.TEXTURE_2D, that.glContext.TEXTURE_WRAP_S, that.glContext.CLAMP_TO_EDGE)
          that.glContext.texParameteri(that.glContext.TEXTURE_2D, that.glContext.TEXTURE_WRAP_T, that.glContext.CLAMP_TO_EDGE)
          that.glContext.texParameteri(that.glContext.TEXTURE_2D, that.glContext.TEXTURE_MIN_FILTER, that.glContext.LINEAR)
        }
      }
      image.src = 'image/WebGL/trophy.png'
    },

    isPowerOf2(value) {
      return (value & (value - 1)) === 0
    },

    // 创建缓冲器，存储要素顶点
    initBuffers() {
      const positionBuffer = this.glContext.createBuffer()

      const vertices = [
        // Front face
        -1.0, -1.0, 1.0,
        1.0, -1.0, 1.0,
        1.0, 1.0, 1.0,
        -1.0, 1.0, 1.0,

        // Back face
        -1.0, -1.0, -1.0,
        -1.0, 1.0, -1.0,
        1.0, 1.0, -1.0,
        1.0, -1.0, -1.0,

        // Top face
        -1.0, 1.0, -1.0,
        -1.0, 1.0, 1.0,
        1.0, 1.0, 1.0,
        1.0, 1.0, -1.0,

        // Bottom face
        -1.0, -1.0, -1.0,
        1.0, -1.0, -1.0,
        1.0, -1.0, 1.0,
        -1.0, -1.0, 1.0,

        // Right face
        1.0, -1.0, -1.0,
        1.0, 1.0, -1.0,
        1.0, 1.0, 1.0,
        1.0, -1.0, 1.0,

        // Left face
        -1.0, -1.0, -1.0,
        -1.0, -1.0, 1.0,
        -1.0, 1.0, 1.0,
        -1.0, 1.0, -1.0
      ]
      this.glContext.bindBuffer(this.glContext.ARRAY_BUFFER, positionBuffer)
      this.glContext.bufferData(this.glContext.ARRAY_BUFFER, new Float32Array(vertices), this.glContext.STATIC_DRAW)

      // 面-顶点索引对应
      const indexBuffer = this.glContext.createBuffer()
      const cubeVertexIndices = [
        0, 1, 2, 0, 2, 3, // front
        4, 5, 6, 4, 6, 7, // back
        8, 9, 10, 8, 10, 11, // top
        12, 13, 14, 12, 14, 15, // bottom
        16, 17, 18, 16, 18, 19, // right
        20, 21, 22, 20, 22, 23 // left
      ]
      this.glContext.bindBuffer(this.glContext.ELEMENT_ARRAY_BUFFER, indexBuffer)
      this.glContext.bufferData(this.glContext.ELEMENT_ARRAY_BUFFER, new Uint16Array(cubeVertexIndices), this.glContext.STATIC_DRAW)

      // 颜色缓存区
      const colorBuffer = this.glContext.createBuffer()
      const colors = [
        [1.0, 1.0, 1.0, 1.0], // Front face: white
        [1.0, 0.0, 0.0, 1.0], // Back face: red
        [0.0, 1.0, 0.0, 1.0], // Top face: green
        [0.0, 0.0, 1.0, 1.0], // Bottom face: blue
        [1.0, 1.0, 0.0, 1.0], // Right face: yellow
        [1.0, 0.0, 1.0, 1.0] // Left face: purple
      ]
      let generatedColors = []
      // 每一个面颜色一样
      // for (let i = 0; i < 6; i++) {
      //   const c = colors[i]
      //   for (let j = 0; j < 4; j++) {
      //     generatedColors = generatedColors.concat(c)
      //   }
      // }
      // 每一个面上的各个顶点颜色不一样
      for (let j = 0; j < 4; j++) {
        generatedColors = generatedColors.concat(...colors)
      }
      this.glContext.bindBuffer(this.glContext.ARRAY_BUFFER, colorBuffer)
      this.glContext.bufferData(this.glContext.ARRAY_BUFFER, new Float32Array(generatedColors), this.glContext.STATIC_DRAW)

      const textureBuffer = this.glContext.createBuffer()
      const textureCoordinates = [
        // Front
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,
        // Back
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,
        // Top
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,
        // Bottom
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,
        // Right
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,
        // Left
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0
      ]
      this.glContext.bindBuffer(this.glContext.ARRAY_BUFFER, textureBuffer)
      this.glContext.bufferData(this.glContext.ARRAY_BUFFER, new Float32Array(textureCoordinates), this.glContext.STATIC_DRAW)

      this.buffers = { position: positionBuffer, color: colorBuffer, index: indexBuffer, texture: textureBuffer }
    },

    drawScene() {
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
      mat4.rotate(modelViewMatrix, modelViewMatrix, this.rotationAngle, [this.xRotation, this.yRotation, 0])

      {
        const numComponents = 3
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
        const numComponents = 2
        const type = this.glContext.FLOAT
        const normalize = false
        const stride = 0
        const offset = 0
        this.glContext.bindBuffer(this.glContext.ARRAY_BUFFER, this.buffers.texture)
        this.glContext.vertexAttribPointer(
          this.programInfo.attribLocations.textureCoordAttribute,
          numComponents,
          type,
          normalize,
          stride,
          offset
        )
        this.glContext.enableVertexAttribArray(this.programInfo.attribLocations.textureCoordAttribute)
      }
      this.glContext.bindBuffer(this.glContext.ELEMENT_ARRAY_BUFFER, this.buffers.index)

      this.glContext.useProgram(this.programInfo.program)

      this.glContext.uniformMatrix4fv(this.programInfo.uniformLocations.projectionMatrix, false, projectionMatrix)
      this.glContext.uniformMatrix4fv(this.programInfo.uniformLocations.modelViewMatrix, false, modelViewMatrix)

      // 贴纹理
      this.glContext.activeTexture(this.glContext.TEXTURE0)
      this.glContext.bindTexture(this.glContext.TEXTURE_2D, this.curTexture)
      this.glContext.uniform1i(this.programInfo.uniformLocations.uSampler, 0)
      this.glContext.drawElements(this.glContext.TRIANGLES, 36, this.glContext.UNSIGNED_SHORT, 0)
    },

    onMouseDown(e) {
      this.startX = e.offsetX
      this.startY = e.offsetY
      this.isDown = true
    },

    // 根据当前点和初始点角度，设置旋转轴和角度
    onMouseMove(e) {
      if (this.isDown) {
        const endX = e.offsetX
        const endY = e.offsetY
        this.rotationAngle = (endX - this.startX) / this.canvasWidth * 10 + this.oldRotation
        this.xRotation = 1
        this.yRotation = 1

        const angle = this.GetAngle(this.startX, this.startY, endX, endY)
        // console.log('angle', angle)
        if ((angle >= 70 && angle <= 110) || (angle >= -110 && angle <= -70)) {
          this.yRotation = 0
          this.rotationAngle = (endY - this.startY) / this.canvasHeight * 10 + this.oldRotation
        } else if ((angle >= 160 && angle <= 180) || (angle >= -20 && angle <= 20) || (angle >= -180 && angle <= -160)) {
          this.xRotation = 0
        } else if ((angle >= -70 && angle <= -20) || (angle >= 110 && angle <= 160)) {
          this.xRotation = -1
        }

        this.drawScene()
      }
    },

    onMouseUp(e) {
      const endX = e.offsetX
      const endY = e.offsetY
      this.rotationAngle = (endX - this.startX) / this.canvasWidth * 10 + this.oldRotation
      this.xRotation = 1
      this.yRotation = 1

      const angle = this.GetAngle(this.startX, this.startY, endX, endY)
      // console.log('angle', angle)
      if ((angle >= 70 && angle <= 110) || (angle >= -110 && angle <= -70)) {
        this.yRotation = 0
        this.rotationAngle = (endY - this.startY) / this.canvasHeight * 10 + this.oldRotation
      } else if ((angle >= 160 && angle <= 180) || (angle >= -20 && angle <= 20) || (angle >= -180 && angle <= -160)) {
        this.xRotation = 0
      } else if ((angle >= -70 && angle <= -20) || (angle >= 110 && angle <= 160)) {
        this.xRotation = -1
      }
      this.drawScene()

      this.oldRotation = this.rotationAngle
      this.isDown = false
    },

    // 计算角度，返回的值是：左：+- 180，右：0，上：-90，下：90
    GetAngle(startx, starty, endx, endy) {
      let tan = 0
      tan = Math.atan2(endy - starty, endx - startx) * 180 / Math.PI
      return tan
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
    cursor: grab;
  }
}
</style>
