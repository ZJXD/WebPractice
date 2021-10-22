<template>
  <div class="video-page">
    <video ref="localVideo" src="" />
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {
    this.getLocalStream()
  },
  methods: {
    getLocalStream() {
      navigator.mediaDevices.getUserMedia({
        video: {
          width: 640,
          height: 480,
          frameRate: 15,
          facingMode: 'enviroment',
          deviceId: undefined
        },
        audio: false
      }).then((mediaStream) => {
        this.$refs.localVideo.srcObject = mediaStream
      }).catch(error => console.log('navigator.getUserMedia error:', error))
    }
  }
}
</script>

<style lang="scss" scoped>
.video-page {
  width: 100%;
  height: 100%;
  padding: 0;
}
</style>
