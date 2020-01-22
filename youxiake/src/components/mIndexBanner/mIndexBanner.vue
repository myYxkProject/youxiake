<template>
  <!-- 主页轮播模块 -->
  <div class="mIndexBanner">
    <div class="mIndexBanner__header">
      <div class="header__location">
        <span>北京</span>
        <i class="iconfont">&#xe649;</i>
      </div>
      <div class="header__search">
        <i class="iconfont">&#xe64c;</i>
        <input
          readonly="readonly"
          placeholder="探索全球小众目的地和创意玩法"
          data-growing-title
          type="search"
          autocomplete="off"
          class="search__input"
        />
      </div>
    </div>
    <div class="mIndexBanner_hot">
      <p class="hot__title">热搜</p>
      <div class="hot__list">
        <a
          href="https://m.youxiake.com/search/results/0-0-0-0-0-0.html?keyword=%E6%B6%A0%E6%B4%B2%E5%B2%9B"
        >
          <span>涠洲岛</span>
        </a>
        <a href="https://m.youxiake.com/search/results/0-0-0-0-0-0.html?keyword=%E9%9B%A8%E5%B4%A9">
          <span>雨崩</span>
        </a>
        <a
          href="https://m.youxiake.com/search/results/0-0-0-0-0-0.html?keyword=%E6%96%B0%E5%8A%A0%E5%9D%A1"
        >
          <span>新加坡</span>
        </a>
        <a
          href="https://m.youxiake.com/search/results/0-0-0-0-0-0.html?keyword=%E6%91%A9%E6%B4%9B%E5%93%A5"
        >
          <span>摩洛哥</span>
        </a>
      </div>
    </div>
    <div class="vux-slider mIndexBannerSwiper">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in slides" :key="index">
            <a href>
              <img
                :src="item.image"
                alt
              />
            </a>
          </div>
          
        </div>
        <!-- 分页器 -->
        <div class="swiper-pagination"></div>
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
    //   创建轮播的数据
    slides: {
      default: () => [],
      type: Array
    }
  },
  methods: {
    initBanner() {
      var mySwiper = new Swiper(".swiper-container", {
        // direction: "vertical", // 垂直切换选项
        notNextTick: false,
        autoplay: 1000,
        loop: true, // 循环模式选项
        pagination: ".swiper-pagination"
      });
      console.log(this.slides);
    }
  },
  watch: {
    slides(newVal, oldValue) {
      this.$nextTick(() => {
        // 获取完整的swiper dom元素
        this.initBanner();
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import "~style/index.less";

.mIndexBanner {
  background-color: rgb(255, 221, 64);
  position: relative;
  .w(375);
  .h(233);
  .mIndexBanner__header {
    display: flex;
    align-items: center;
    .h(45);
    .header__location {
      justify-content: center;
      padding: 0 0.2rem;
      line-height: 0.9rem;
      text-align: center;
      color: #000;
      text-shadow: 0 0 0.08rem rgba(0, 0, 0, 0.18);
      overflow: hidden;
      span {
        display: inline-block;
        max-width: 1rem;
        font-size: 0.4rem;
        font-weight: 700;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      i {
        display: inline-block;
        margin-left: 0.1rem;
        width: 0.26rem;
        height: 0.14rem;
        vertical-align: 2px;
        position: absolute;
      }
    }
  }
  .header__search {
    display: flex;
    align-items: center;
    width: 6.94rem;
    height: 0.8rem;
    border-radius: 0.4rem;
    background: #fff;
    box-shadow: 0 0 0.06rem rgba(0, 0, 0, 0.06);
    .mleft(40);
    i {
      .mleft(10);
      .mright(10);
    }
    .search__input {
      width: 85%;
      height: 0.58rem;
      font-size: 0.35rem;
      color: #999;
      border: none;
    }
  }
  .mIndexBanner_hot {
    margin: 0.12rem 0 0.14rem;
    width: 100%;
    display: flex;
    align-items: center;
    .hot__title {
      margin-left: 0.3rem;
    }
    p {
      flex-shrink: 0;
      font-size: 0.35rem;
      color: #000;
    }
    .hot__list {
      margin-left: 0.06rem;
      display: flex;
      a {
        margin-left: 0.12rem;
        width: 1.98rem;
        height: 0.6rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: hsla(0, 0%, 100%, 0.5);
        border-radius: 0.3rem;
        flex-shrink: 0;
        font-size: 0.35rem;
        color: #000;
      }
    }
  }
  .swiper-container {
    position: relative;
    .w(350);
    .h(150);
    border-radius: 3%;
    // background-color: antiquewhite;
    .swiper-wrapper {
      .swiper-slide {
        // position: absolute;
        a {
          img {
            width: 100%;
            height: 100%;
            display: block;
          }
        }
      }
    }
  }
}
</style>