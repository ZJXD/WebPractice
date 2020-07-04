<template>
  <div class="book-page">
    <figure class="book-box" v-for="book in books" :key="book.id">
      <div class="perspective">
        <div class="book" data-book="book-1">
          <div class="cover">
            <div class="front" :style="{backgroundImage:'url('+book.img+')'}"></div>
            <div class="inner inner-left"></div>
          </div>
        </div>
      </div>
      <div class="buttons"><a href="#">Look inside</a><a href="#">Details</a></div>
      <figcaption>
        <h2>{{book.name}} <span>{{book.author}}</span></h2>
      </figcaption>
      <div class="details">
        <span class="close-details"></span>
        <ul>
          <li>{{book.detail}}</li>
          <li>{{book.press}}</li>
          <li>{{book.time}}</li>
          <li>{{book.total}}</li>
        </ul>
      </div>
    </figure>
  </div>
</template>

<script>

export default {
  data(){
    return{
      books:[
        {
          id:1,
          name:'9 Lives',
          author:'Andrew Hudson',
          press:'Graham Press',
          time:'12.09.2010',
          total:'397 pages',
          detail:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          img:'./image/book/cover1.svg'
        },
        {
          id:2,
          name:'Life of a worm',
          author:'Will Flores',
          press:'Graham Press',
          time:'12.09.2010',
          total:'397 pages',
          img:'./image/book/cover2.svg',
          detail:'Understanding the life of a worm can be enlightening to anybody. Dive into the micro cosmos of a creeping and burrowing invertebrate and learn how a limbless little creature reaches happiness.'
        },
        {
          id:3,
          name:'Lemon Rainbow',
          author:'Christa Hausmann',
          press:'Graham Press',
          time:'12.09.2010',
          total:'397 pages',
          img:'./image/book/cover3.svg',
          detail:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          id:4,
          name:'Structure and Space',
          author:'CAROL WINTER',
          press:'Graham Press',
          time:'12.09.2010',
          total:'397 pages',
          img:'./image/book/cover4.svg',
          detail:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          id:5,
          name:'The Rock Enigma',
          author:'WALTER C. HAMILTON',
          press:'Graham Press',
          time:'12.09.2010',
          total:'397 pages',
          img:'./image/book/cover5.svg',
          detail:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          id:6,
          name:'An Introduction to Neural Science',
          author:'SIMON ABRAMOVICH',
          press:'Graham Press',
          time:'12.09.2010',
          total:'397 pages',
          img:'./image/book/cover6.svg',
          detail:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          id:7,
          name:'Life in Transit',
          author:'MARINA DOKOVA',
          press:'Graham Press',
          time:'12.09.2010',
          total:'397 pages',
          img:'./image/book/cover7.svg',
          detail:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          id:8,
          name:'Architecture',
          author:'RYAN COOPER',
          press:'Graham Press',
          time:'12.09.2010',
          total:'397 pages',
          img:'./image/book/cover8.svg',
          detail:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          id:9,
          name:'Digital Nomads',
          author:'KENNY GARCIA',
          press:'Graham Press',
          time:'12.09.2010',
          total:'397 pages',
          img:'./image/book/cover9.svg',
          detail:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.book-page {
  max-width: 990px;
  height: 100%;
  margin: 0 auto;

  .book-box {
    position: relative;
    display: inline-block;
    margin: 40px 0 0 0;
    padding: 45px 0;
    max-width: 75%;
    width: 324px;
    vertical-align: top;
    &::before {
      position: absolute;
      top: 0;
      left: 0;
      visibility: hidden;
      width: 100%;
      height: 100%;
      background: #fff;
      content: '';
      opacity: 0;
      transition: opacity 0.3s, visibility 0s 0.3s;
    }

    .perspective {
      position: relative;
      width: 100%;
      height: 100%;
      perspective: 1800px;
    }

    .book {
      position: relative;
      margin: 0 auto;
      width: 180px;
      height: 260px;
      transform-style: preserve-3d;

      div {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
      }
      .cover {
        z-index: 10;
        transform-origin: 0% 50%;
        transform-style: preserve-3d;
      }

      .cover::before {
        position: absolute;
        left: 0;
        z-index: 10;
        visibility: hidden;
        width: 20px;
        height: 100%;
        background: #000;
        content: '';
        -webkit-transform: translateX(-100%) rotateY(-90deg);
        transform: translateX(-100%) rotateY(-90deg);
        -webkit-transform-origin: 100% 50%;
        transform-origin: 100% 50%;
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
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
        background-color: #fff;
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
      h2 {
        margin: 1em 0 0 0;
        font-weight: 300;
        font-size: 1.8em;
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
      visibility: hidden;

      ul {
        margin: 0;
        padding: 60px 30px 0 30px;
        list-style: none;
        text-align: left;

        li {
          margin: 0 0 10px;
          font-weight: 300;

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
      visibility: hidden;
      width: 20px;
      height: 20px;
      font-size: 0;
      opacity: 0.6;
      cursor: pointer;

      &:hover {
        opacity: 1;
      }

      &::after {
        position: absolute;
        top: 0;
        left: 50%;
        width: 1px;
        height: 100%;
        background: #333;
        content: '';
        transform: rotate(45deg);
      }

      &::before {
        position: absolute;
        top: 0;
        left: 50%;
        width: 1px;
        height: 100%;
        background: #333;
        content: '';
        transform: rotate(-45deg);
      }
    }
  }
}
</style>
