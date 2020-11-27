<template>
  <div class="book-page">
    <figure v-for="book in books" :key="book.id" class="book-box" :class="{'detail-open':openBookId===book.id&&(!showInside),'big-open':showInside&&openBookId===book.id}">
      <div class="perspective">
        <div class="book" data-book="book-1">
          <div class="left-img" :style="{backgroundImage:'linear-gradient(to right,transparent 0%,rgba(0, 0, 0, 0.01) 1%,rgba(0, 0, 0, 0.1) 50%,transparent 100%),url('+book.img1+')'}" />
          <div class="cover" :img-text="book.img1">
            <div class="front" :style="{backgroundImage:'linear-gradient(to right, rgba(0, 0, 0, 0.1) 0%, rgba(211, 211, 211, 0.1) 5%, rgba(255, 255, 255, 0.15) 5%, rgba(255, 255, 255, 0.1) 9%, rgba(0, 0, 0, 0.01) 100%),url('+book.img+')'}" />
            <div class="inner inner-left" />
          </div>
          <div class="inner inner-right" />
        </div>
      </div>

      <div class="buttons">
        <a @click="onInsideClick(book.id)">Look inside</a><a @click="onDetailClick(book.id)">Details</a>
      </div>
      <figcaption>
        <h2>{{ book.name }} <span>{{ book.author }}</span></h2>
      </figcaption>
      <div class="details">
        <span class="close-details" @click="onCloseClick">&#10005;</span>
        <ul>
          <li>{{ book.detail }}</li>
          <li>{{ book.press }}</li>
          <li>{{ book.time }}</li>
          <li>{{ book.total }}</li>
        </ul>
      </div>
    </figure>

    <BookInside v-show="showInside" :class="{'inside-open':insideState === 1}" />
  </div>
</template>

<script>
import BookInside from './BookInside'

export default {
  components: { BookInside },
  data() {
    return {
      books: [
        {
          id: 1,
          name: '9 Lives',
          author: 'Andrew Hudson',
          press: 'Graham Press',
          time: '12.09.2010',
          total: '397 pages',
          detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          img: './image/book/cover1.svg',
          img1: './image/book/spine1.svg'
        },
        {
          id: 2,
          name: 'Life of a worm',
          author: 'Will Flores',
          press: 'Graham Press',
          time: '12.09.2010',
          total: '397 pages',
          img: './image/book/cover2.svg',
          img1: './image/book/spine2.svg',
          detail: 'Understanding the life of a worm can be enlightening to anybody. Dive into the micro cosmos of a creeping and burrowing invertebrate and learn how a limbless little creature reaches happiness.'
        },
        {
          id: 3,
          name: 'Structure and Space',
          author: 'Christa Hausmann',
          press: 'Graham Press',
          time: '12.09.2010',
          total: '397 pages',
          img: './image/book/cover3.svg',
          img1: './image/book/spine3.svg',
          detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          id: 4,
          name: 'The Rock Enigma',
          author: 'CAROL WINTER',
          press: 'Graham Press',
          time: '12.09.2010',
          total: '397 pages',
          img: './image/book/cover4.svg',
          img1: './image/book/spine4.svg',
          detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          id: 5,
          name: 'An Introduction to Neural Science',
          author: 'WALTER C. HAMILTON',
          press: 'Graham Press',
          time: '12.09.2010',
          total: '397 pages',
          img: './image/book/cover5.svg',
          img1: './image/book/spine5.svg',
          detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          id: 6,
          name: 'Life in Transit',
          author: 'SIMON ABRAMOVICH',
          press: 'Graham Press',
          time: '12.09.2010',
          total: '397 pages',
          img: './image/book/cover6.svg',
          img1: './image/book/spine6.svg',
          detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          id: 7,
          name: 'Architecture',
          author: 'MARINA DOKOVA',
          press: 'Graham Press',
          time: '12.09.2010',
          total: '397 pages',
          img: './image/book/cover7.svg',
          img1: './image/book/spine7.svg',
          detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          id: 8,
          name: 'Lemon Rainbow',
          author: 'RYAN COOPER',
          press: 'Graham Press',
          time: '12.09.2010',
          total: '397 pages',
          img: './image/book/cover8.svg',
          img1: './image/book/spine8.svg',
          detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          id: 9,
          name: 'Digital Nomads',
          author: 'KENNY GARCIA',
          press: 'Graham Press',
          time: '12.09.2010',
          total: '397 pages',
          img: './image/book/cover9.svg',
          img1: './image/book/spine9.svg',
          detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
      ],
      openBookId: null,
      showInside: false,
      insideState: 2
    }
  },
  methods: {
    onDetailClick(id) {
      this.openBookId = id
    },
    onCloseClick() {
      this.openBookId = null
    },
    onInsideClick(id) {
      this.openBookId = id
      this.showInside = true
      this.insideState = 1
    }
  }
}
</script>

<style lang="scss" scoped>
.book-page {
  position: relative;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;

  .book-box {
    position: relative;
    display: inline-block;
    margin: 40px 0 0 0;
    padding: 45px 0;
    max-width: 75%;
    width: 324px;
    color: rgb(100, 105, 106);
    vertical-align: top;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      visibility: hidden;
      width: 100%;
      height: 100%;
      background: #fff;
      opacity: 0;
      transition: opacity 0.3s, visibility 0s 0.3s;
    }
    &::after {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 0;
      background: rgba(51, 51, 51, 0.1);
      opacity: 0;
      transition: opacity 0.3s, height 0s 0.3s;
      backface-visibility: hidden;
      z-index: -1;
    }

    .perspective {
      position: relative;
      width: 100%;
      height: 100%;
    }

    .book {
      position: relative;
      margin: 0 auto;
      width: 180px;
      height: 260px;
      transform-style: preserve-3d;

      div {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        // backface-visibility: hidden;
      }
      .cover {
        z-index: 10;
        transform-origin: 0% 50%;
        transform-style: preserve-3d;
        transition: transform 0.5s;
      }

      .left-img {
        position: absolute;
        left: 0;
        z-index: 10;
        visibility: hidden;
        width: 20px;
        height: 100%;
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        transform: translateX(-100%) rotateY(-90deg);
        transform-origin: 100% 50%;
        transform-style: preserve-3d;
        transition: transform 0.5s;
      }

      .front {
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
      }

      .inner {
        display: none;
        border-width: 3px;
        border-style: solid;
        border-color: lawngreen;
        background-color: #fff;
        transform-origin: left center;

        &.inner-left {
          border-right: none;
          // transform: rotateY(180deg);
        }

        &.inner-right {
          border-left: none;
          background-color: #f9f9f9;
        }
      }
    }

    .buttons {
      margin-top: 5px;
      text-align: center;

      a {
        display: inline-block;
        padding: 0 8px;
        color: rgba(100, 105, 106, 0.7);
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 0.65em;
        line-height: 1.5;

        &:first-child:not(:only-child) {
          border-right: 1px solid rgba(100, 105, 106, 0.3);
        }

        &:hover,
        &:active {
          color: #64696a;
        }
      }
    }

    figcaption {
      position: relative;
      top: 100%;
      padding: 0 2em;
      text-align: center;
      z-index: 5;
      h2 {
        margin: 1em 0 0 0;
        font-size: 1.8em;
        font-weight: 300;
        font-family: 'Abril Fatface', serif;

        span {
          position: relative;
          display: block;
          margin: 1em 0 0 0;
          padding: 1em 0 0 0;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 400;
          font-size: 0.4em;
          font-family: 'Lato', sans-serif;

          &::before {
            position: absolute;
            top: 0;
            left: 40%;
            width: 20%;
            height: 1px;
            background: rgba(0, 0, 0, 0.1);
            content: '';
          }
        }
      }
    }

    .details {
      position: absolute;
      top: 0;
      width: 100%;
      padding-left: 44px;
      visibility: hidden;
      z-index: 5;
      opacity: 0;
      transition: opacity 0.5s, visibility 0s 0.5s;

      ul {
        margin: 0;
        padding: 60px 30px 0 30px;
        list-style: none;
        text-align: left;

        li {
          margin: 0 0 10px;
          font-weight: 300;
          opacity: 0;
          transition: transform 0.5s, opacity 0.5s;
          transform: translateX(100%);

          &:not(:first-child) {
            font-weight: 700;
          }
          &:first-child {
            position: relative;
            margin: 0 0 15px 0;
            padding: 0 0 15px 0;
            text-align: justify;
            &::after {
              position: absolute;
              top: 100%;
              left: 0;
              width: 20%;
              height: 1px;
              background: rgba(0, 0, 0, 0.1);
              content: '';
            }
          }
        }
      }
    }

    .close-details {
      position: absolute;
      top: 10px;
      right: 10px;
      width: 20px;
      height: 20px;
      font-size: 20px;
      opacity: 0.6;
      cursor: pointer;

      &:hover {
        opacity: 1;
      }
    }
  }

  .detail-open {
    &::before {
      visibility: visible;
      opacity: 1;
      z-index: 2;
      transition: opacity 0.5s, visibility 0s;
    }
    &::after {
      height: 100%;
      opacity: 1;
      z-index: 1;
      transition: opacity 0.5s;
    }

    .perspective {
      z-index: 6;
      .left-img {
        visibility: visible;
        transform: translateX(-56px) rotateY(0deg);
      }

      .cover {
        transform: translateX(-36px) rotateY(85deg);
      }
    }

    .details {
      visibility: visible;
      opacity: 1;

      ul li {
        opacity: 1;
        transform: translateX(0);
        &:first-child {
          transition-delay: 0.1s;
        }
        &:nth-child(2) {
          transition-delay: 0.2s;
        }
        &:nth-child(3) {
          transition-delay: 0.3s;
        }
        &:nth-child(4) {
          transition-delay: 0.4s;
        }
      }
    }
  }

  .big-open {
    .inner-right {
      display: inline-block !important;
      // transform: scale(1.5);
      // transition: transform 1s;
      animation: openSmallRight 1s forwards;
    }
    @keyframes openSmallRight {
      0% {
      }
      100% {
        transform: scale(1.5);
      }
    }

    .cover {
      .inner-left {
        display: inline-block !important;
      }
      // transform: scale(1.5) rotateY(-180deg);
      // transition: transform 1s;
      animation: openSmall 1s forwards;
    }
    @keyframes openSmall {
      0% {
      }
      100% {
        transform: scale(1.5) rotateY(180deg);
      }
    }
  }

  .inside-open {
    animation: InsideOpen 1s forwards;
  }
  .inside-close {
    animation: InsideClose 1.5s forwards;
  }

  @keyframes InsideOpen {
    0% {
    }
    45% {
      opacity: 0;
      transform: scale(0.95);
    }
    85% {
      opacity: 1;
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes InsideClose {
    0%,
    15% {
      opacity: 1;
      transform: scale(1);
    }
    55% {
      opacity: 0;
      transform: scale(0.95);
    }
    100% {
      opacity: 0;
      transform: scale(0.95);
    }
  }
}
</style>
