<template>
  <div class="mIndexMuster">
    <div class="mIndexMuster__top">
      <div
        class="vux-slider mIndexMuster__timelimit"
        v-for="(item,index) in saleProductList"
        :key="index"
      >
        <div class="timelimit__head">
          <p class="title">{{item.title}}</p>
          <div class="Countdown">
            <span class="Countdown__day">{{day}}天</span>
            <span class="Countdown__hour">{{hour}}</span>
            <span class="Countdown__colon">:</span>
            <span class="Countdown__minute">{{min}}</span>
            <span class="Countdown__colon">:</span>
            <span class="Countdown__second">{{sec}}</span>
          </div>
        </div>
        <a href class="timelimit__product">
          <div
            class="top"
            style="background-image:url('http://gallery.youxiake.com/Public/Data/upload/productimg/201811/14/5bebccc54ea05.jpg?imageslim')"
          >
            <span class="tag">仅剩292个</span>
          </div>
          <div class="bottom">
            <p class="title">{{item.productName}}</p>
            <div class="price">
              ￥
              <span>{{item.priceLabel}}</span>
            </div>
            <div class="before__price">￥{{item.priceOtherLabel}}</div>
          </div>
        </a>
      </div>
      <div class="mIndexMuster_recommendAndKing">
        <a href>
          <p class="head">{{newProduct.title}}</p>
          <div class="content">
            <p class="title">{{newProductRecommend.title}}</p>
            <div class="price">
              ￥
              <span>{{newProductRecommend.price}}</span>起
            </div>
          </div>
        </a>
        <a href>
          <p class="head">{{kingProduct.title}}</p>
          <div class="content">
            <p class="title">{{kingProductRecommend.title}}</p>
            <div class="price">
              ￥
              <span>{{kingProductRecommend.price}}</span>起
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="mIndexMuster__ad ad3">
      <a href :style="{backgroundImage:'url('+item.image+')'}" v-for="(item,index) in activityBanner" :key="index">
        <p class="title">{{item.title}}</p>
        <span class="desc">{{item.subTitle}}</span>
      </a>
      <!-- <a href>
        <p class="title">雪景播报</p>
        <span class="desc">get全国一线雪景实况</span>
      </a>
      <a href>
        <p class="title">雪景播报</p>
        <span class="desc">get全国一线雪景实况</span>
      </a> -->
    </div>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    sP: { default: () => [], type: Array },
    nP: { default: () => {}, type: Object },
    kP: { default: () => {}, type: Object },
    aB:{default:()=>[],type:Array}
  },
  data() {
    return {
      saleProductList: [],
      newProduct: {},
      newProductRecommend: {},
      kingProduct: {},
      kingProductRecommend: {},
      activityBanner:[],
      day: "",
      hour: "",
      min: "",
      sec: ""
    };
  },
  methods: {},
  mounted() {
    console.log(this.day);
  },
  watch: {
    sP(newVal, oldValue) {
      this.$nextTick(() => {
        console.log(this.sP);
        this.saleProductList = this.sP;
        console.log(this.saleProductList[0]);
        this.newProduct = this.nP;
        this.newProductRecommend = this.nP.recommend;
        console.log(this.newProduct);
        console.log(this.newProductRecommend);
        this.kingProduct = this.kP;
        this.kingProductRecommend = this.kP.recommend;
        this.activityBanner = this.aB;
        console.log(this.activityBanner)
        let startTime = this.saleProductList[0].startTime;
        let overTime = this.saleProductList[0].overTime;
        // console.log(startTime, overTime);
        let nowTime = new Date().getTime();
        // console.log(nowTime);
        this.day = Math.floor(overTime / 60 / 60 / 24);
        // console.log(this.day);
        this.hour = parseInt((overTime / 60 / 60) % 24);
        // console.log(this.hour);
        this.min = parseInt((overTime / 60) % 60);
        // console.log(this.min);
        this.sec = parseInt(overTime % 60);
        this.day < 10 ? (this.day = "0" + this.day) : this.day;
        this.hour < 10 ? (this.hour = "0" + this.hour) : this.hour;
        this.min < 10 ? (this.min = "0" + this.min) : this.min;
        this.sec < 10 ? (this.sec = "0" + this.sec) : this.sec;
      });
    }
  },
  updated() {
    setTimeout(() => {
      this.sec--;
      this.sec < 10 ? (this.sec = "0" + this.sec) : this.sec;
      this.sec = this.sec;
    }, 1000);
  }
});
</script>

<style lang="less" scoped>
@import "~style/index.less";
.mIndexMuster {
  .mtop(5);
  .p(5);
  background-color: #fff;
  border-radius: 6px;
  .mIndexMuster__top {
    display: flex;
    .mbottom(5);
    .mIndexMuster__timelimit {
      position: relative;
      .p(5);
      .w(177);
      .h(189);
      background: pink;
      background-size: cover;
      box-sizing: border-box;
      overflow: hidden;
      .timelimit__head {
        display: flex;
        justify-content: space-around;
        align-items: center;
        .title {
          .lh(14);
          font-size: 14px;
          font-weight: 700;
          color: #fff;
        }
        .Countdown {
          display: flex;
          span {
            color: #fff;
            font-size: 12px;
            font-weight: 700;
          }
          .Countdown__day {
            .mright(2);
          }
          .Countdown__hour,
          .Countdown__minute,
          .Countdown__second {
            display: flex;
            justify-content: center;
            align-items: center;
            .w(15);
            .h(15);
            background-color: #fff;
            color: red;
            border-radius: 50%;
          }
          .Countdown__colon {
            margin: 0 5px;
          }
        }
      }
      .timelimit__product {
        display: block;
        position: relative;
        .mtop(8);
        height: auto !important;
        background-color: #fff;
        border-radius: 5px;
        overflow: hidden;
        .top {
          .w(175);
          .h(79);
          position: relative;
          background: #fff9db no-repeat 50% / cover;
          border-radius: 2px 2px 0 0;
          .tag {
            position: absolute;
            left: 0;
            top: 0;
            padding: 0 2px 0 1px;
            .h(20);
            display: flex;
            align-items: center;
            font-size: 12px;
            background: linear-gradient(-75deg, #ffce07, #fdef5b);
            color: #333;
            border: 1px 0 5px 10px;
          }
        }
        .bottom {
          position: relative;
          .h(64);
          .title {
            padding: 1px 5px 0 2px;
            max-height: 155px;
            .lh(18);
            font-size: 14px;
            font-weight: 700;
            color: #333;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          .price {
            position: absolute;
            .l(5);
            .b(5);
            font-size: 12px;
            color: #ff7100;
            span {
              .mright(2);
              .lh(2);
              font-size: 12px;
              font-weight: 700;
            }
          }
          .before__price {
            position: absolute;
            .r(10);
            .b(5);
            font-size: 12px;
            color: #999;
            text-decoration: line-through;
          }
        }
      }
    }
    .mIndexMuster_recommendAndKing {
      padding: 0 5px;
      .w(177);
      .h(189);
      background-color: #ff7100;
      a {
        position: relative;
        display: block;
        height: 50%;
        box-sizing: border-box;
        color: #333;
        .head {
          display: flex;
          align-items: center;
          .h(33);
          font-size: 14px;
          font-weight: 700;
          color: #fff;
        }
        .content {
          padding: 0 5px;
          .w(155);
          .h(50);
          background-color: #fff;
          border-radius: 5px;
          box-sizing: border-box;
          overflow: hidden;
          .title {
            .mtop(5);
            max-width: 100%;
            font-size: 14px;
            font-weight: 700;
            color: #333;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }
          .price {
            .mtop(5);
            font-size: 12px;
            color: #ff7100;
            span {
              .mright(1);
              .lh(20);
              font-size: 14px;
              font-weight: 700;
              color: #ff7100;
            }
          }
        }
      }
    }
  }
  .mIndexMuster__ad {
    display: flex;
    justify-content: space-between;
    a {
      .w(116);
      .mright(5);
      .p(10);
      .h(87);
      background: #fff9db no-repeat 50% / cover;
      box-sizing: border-box;
      .title {
        max-width: 90%;
        font-size: 14px;
        font-weight: 700;
        color: #333;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        .p(5);
      }
      .desc {
        display: block;
        font-size: 12px;
        color: #999;
      }
    }
  }
}
</style>