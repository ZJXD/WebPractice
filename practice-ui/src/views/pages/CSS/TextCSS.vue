<template>
  <div class="css-text-page main-contariner-content">
    <h4>text-decoration 文字装饰</h4>
    <div class="box-content decoration-box">
      <div v-for="stype in lineStyleList" :key="stype.id" class="style">
        <p :style="{textDecorationStyle:stype.text}">
          {{ stype.text }}
        </p>
        <p>text-decoration-stype: {{ stype.text }}</p>
        <!-- <p>text-decoration-line: underline</p>
        <p>text-decoration-color: #dd0000;</p> -->
      </div>
      <div v-for="line in lineList" :key="line.id" class="line">
        <p :style="{textDecorationLine:line.text}">
          {{ line.text }}
        </p>
        <p>text-decoration-line: {{ line.text }}</p>
      </div>
      <div v-for="thick in thickList" :key="thick.id" class="thickness">
        <p :style="{textDecorationThickness:thick.text}">
          {{ thick.text }}
        </p>
        <p>text-decoration-line: {{ thick.text }}</p>
      </div>
      <div class="tranform-style">
        <p>结合 transform 实现过渡效果， text-decoration-style background </p>
      </div>
      <div class="animation-style">
        <p data-content="动效下划线动效下划线动效下划线">
          动效下划线
        </p>
      </div>
    </div>

    <h4>text-emphasis 文字强调</h4>
    <div class="box-content emphasis-box">
      <div>
        <p>This is <span>Text-emphasis</span></p>
      </div>
      <div>
        <p>This is <span>Text-emphasis</span></p>
      </div>
      <div>
        <p>A B C D E F G H I J <span>K L M N O P Q</span></p>
      </div>
      <div>
        <p>A B C D E<span> F G H</span> I J K L <span>M N O</span> P Q</p>
      </div>
    </div>
    <h4>tbackground 模拟下划线</h4>
    <div class="box-content downline-box">
      <p class="downline-background">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <a>Mollitia nostrum placeat consequatur deserunt velit ducimus possimus commodi temporibus debitis quam</a>, molestiae laboriosam sit repellendus sed sapiente quidem quod accusantium vero.
      </p>
      <p class="downline-background">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <a class="dotted">Mollitia nostrum placeat consequatur deserunt velit ducimus possimus commodi temporibus debitis quam</a>, molestiae laboriosam sit repellendus sed sapiente quidem quod accusantium vero.
      </p>
      <p class="downline-background">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <a class="hover-line">Mollitia nostrum placeat consequatur deserunt velit ducimus possimus commodi temporibus debitis quam</a>, molestiae laboriosam sit repellendus sed sapiente quidem quod accusantium vero.
      </p>
      <p class="downline-background">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <a class="hover-line-back">Mollitia nostrum placeat consequatur deserunt velit ducimus possimus commodi temporibus debitis quam</a>, molestiae laboriosam sit repellendus sed sapiente quidem quod accusantium vero.
      </p>
    </div>

    <p class="quote">
      参考自Coco博客：<a href="https://www.cnblogs.com/coco1s/p/14620738.html" target="_blank">CSS 文字装饰 text-decoration & text-emphasis</a>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lineStyleList: [
        { id: 'stype1', text: 'solid' },
        { id: 'stype2', text: 'dotted' },
        { id: 'stype3', text: 'dashed' },
        { id: 'stype4', text: 'wavy' }
      ],
      lineList: [
        { id: 'line1', text: 'underline' },
        { id: 'line2', text: 'overline' },
        { id: 'line3', text: 'underline overline' },
        { id: 'line4', text: 'line-through' }
      ],
      thickList: [
        { id: 'thick1', text: '1px' },
        { id: 'thick2', text: '3px' },
        { id: 'thick3', text: '5px' },
        { id: 'thick4', text: '8px' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.css-text-page {
  color: #333;
  font-size: 18px;

  .box-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    & > div {
      width: 25%;
    }
  }

  .decoration-box {
    .style {
      p {
        &:first-child {
          font-weight: bold;
          text-decoration-line: underline;
          text-decoration-color: #dd0000;
        }
      }
    }
    .line {
      p {
        &:first-child {
          font-weight: bold;
          text-decoration-color: #dd0000;
        }
      }
    }
    .thickness {
      p {
        &:first-child {
          font-weight: bold;
          text-decoration-line: underline;
          text-decoration-color: #dd0000;
        }
      }
    }

    .tranform-style {
      p {
        text-decoration-line: underline;
        text-decoration-color: #333;
        text-underline-offset: 2px;
        color: #333;
        transition: 1.5;

        &:hover {
          color: #dd0000;
          text-decoration-color: #dd0000;
          text-underline-offset: 8px;
        }
      }
    }

    .animation-style p {
      width: 100px;
      height: 28px;
      position: relative;
      overflow: hidden;
      cursor: pointer;
      z-index: 2;

      &::before {
        content: attr(data-content);
        position: absolute;
        left: 0;
        top: 0;
        color: transparent;
        white-space: nowrap;
        text-decoration-line: underline;
        text-decoration-style: wavy;
        text-underline-offset: 2px;
        text-decoration-color: #333;
        z-index: -1;
      }

      &:hover::before {
        animation: scrollAni 2.5s infinite linear;
      }

      @keyframes scrollAni {
        100% {
          transform: translate(-100px, 0);
        }
      }
    }
  }

  .emphasis-box {
    div {
      &:first-child {
        span {
          text-emphasis: circle;
        }
      }
      &:nth-child(2) {
        span {
          text-emphasis: circle #f00;
        }
      }
      &:nth-child(3) {
        span {
          text-emphasis: '😋';
        }
      }
      &:nth-child(4) {
        span {
          &:first-child {
            text-emphasis: '😋';
            text-emphasis-position: under left;
          }
          &:nth-child(2) {
            text-emphasis: '😋';
            text-emphasis-position: over right;
          }
        }
      }
    }
  }

  .downline-box {
    .downline-background {
      width: 600px;
      font-size: 24px;
      color: #666;

      a {
        background: linear-gradient(90deg, #0cc, #0cc);
        background-size: 100% 3px;
        background-repeat: no-repeat;
        background-position: 100% 100%;
        color: #0cc;
      }

      .dotted {
        background: linear-gradient(90deg, #0cc 50%, transparent 50%);
        background-size: 10px 2px;
        background-repeat: repeat-x;
        background-position: 100% 100%;
      }

      .hover-line {
        background: linear-gradient(90deg, #ff3c41, #fc0, #0ebeff);
        background-size: 0 3px;
        background-repeat: no-repeat;
        background-position: 0 100%;
        transition: 1s all;

        &:hover {
          background-size: 100% 3px;
          color: #000;
        }
      }

      .hover-line-back {
        background: linear-gradient(90deg, #0cc, #0cc),
          linear-gradient(90deg, #ff3c41, #fc0, #0ebeff);
        background-size: 100% 3px, 0 3px;
        background-repeat: no-repeat;
        background-position: 100% 100%, 100% 100%;
        transition: 1s all;

        &:hover {
          background-size: 0 3px, 100% 3px;
          color: #000;
        }
      }
    }
  }

  .quote {
    color: #999;
    text-align: left;
  }
}
</style>
