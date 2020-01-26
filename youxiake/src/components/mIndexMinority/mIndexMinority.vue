<template>
  <div class="mIndexMinority">
    <div class="mIndexMinority__head">
      <p class="head__title">小众种草</p>
      <p class="head__desc">游侠客独一无二的旅行体验</p>
    </div>
    <div>
      <div class="mIndexMinority__list">
        <!-- <a href class="item" style="background-image:url('https://qimg4.youxiake.com/upload/202001/21/51741579612192.jpg?imageslim')">
          <p class="title">2月好货榜</p>
          <p class="desc">年后去哪儿玩</p>
        </a>-->
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in minorityData" :key="index">
              <a
                href
                class="item"
                style="background-image:url('https://qimg4.youxiake.com/upload/202001/21/51741579612192.jpg?imageslim')"
              >
                <p class="title">2月好货榜</p>
                <p class="desc">年后去哪儿玩</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
// 引入swiper js文件
import Swiper from "swiper";
// 引入 swiper 样式文件
import "swiper/dist/css/swiper.min.css";

export default {
  props: {
    m: { default: () => {}, type: Object }
  },
  data() {
    return {
      minorityData: []
    };
  },
  methods: {
    initBanner() {
      let mySwiper = new Swiper(".swiper-container", {
        slidesPerView: 3,
        slidesPerGroup: 3
      });
    }
  },
  watch: {
    m(newVal, oldValue) {
      this.$nextTick(() => {
        console.log(this.$props.m);
        this.minorityData = this.$props.m.data;
        console.log(this.minorityData);
        this.initBanner();
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import "~style/index.less";
.mIndexMinority {
  .mtop(5);
  .pbottom(5);
  width: 100%;
  background-color: #fff;
  border-radius: 5px;
  box-sizing: border-box;
  overflow: hidden;
  .mIndexMinority__head {
    display: flex;
    align-items: center;
    padding: 0 5px;
    .h(44);
    overflow: hidden;
    .head__title {
      .mright(8);
      font-size: 16px;
      font-weight: 700;
      color: #333;
    }
    .head__desc {
      padding: 0 5px;
      .h(18);
      .lh(18);
      background-color: #fff3ea;
      font-size: 12px;
      color: #ff9e51;
      box-sizing: border-box;
      border-radius: 5px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
  .mIndexMinority__list {
    .w(791);
    display: flex;
    overflow: hidden;
    .swiper-container {
      position: relative;
      width: 100%;
      .h(152);
      .swiper-slide {
        .item {
          position: absolute;
          .l(5);
          .mright(3);
          .w(125);
          .h(152);
          background: #fff9db no-repeat 50% / cover;
          .title {
            margin: 100px auto 5px;
            font-size: 16px;
            font-weight: 700;
          }
          .desc {
            font-size: 12px;
          }
          p {
            width: 85%;
            text-align: center;
            color: #fff;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }
        }
      }
    }
  }
}
</style>