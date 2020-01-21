<template>
  <!-- 首页广告栏 -->
  <div :class="advFlag?'mDownLoadApp':'hide'">
    <div class="mDownLoadApp__container">
      <div class="mDownLoadApp__close" @click="advHide">X</div>
      <div class="container__box">
        <div class="box__logo"></div>
        <div class="box__context">
          <div class="context__text1">游侠客-真正的旅行</div>
          <div class="context__text2">摄影、亲子、户外、深度游</div>
        </div>
      </div>
      <div class="container__button">打开APP</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
        advFlag: true
    }
  },

  methods: {
    advHide(){
        this.advFlag = false
    }
  }
};
</script>

<style lang="less" scoped>
@import "~style/index.less";
.hide {
  display: none;
}
.mDownLoadApp {
  .w(375);
  .h(75);
  background-image: url("https://m.youxiake.com/static/img/img1.7930e42.png");
  .mDownLoadApp__container {
    .w(375);
    .h(75);
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    .mDownLoadApp__close {
      .w(13);
      .h(13);
      color: red;
      opacity: 0.8;
      font-size: 15px;
      text-align: center;
      position: absolute;
      .l(7);
      .t(30);
    }
    .container__box {
      display: flex;
      align-items: center;
      margin-left: 0.61rem;
      .box__logo {
        .w(45);
        .h(45);
        background-image: url("https://m.youxiake.com/static/img/logo.681ad4b.png");
        background-size: 100%;
      }
      .box__context {
        display: flex;
        flex-direction: column;
        justify-content: center;
        .mright(50px);
        .mleft(10px);
        .context__text1 {
          .mbottom(10);
          font-size: 0.4rem;
          color: #fff;
        }
        .context__text2 {
          font-size: 0.3rem;
          color: #fff;
        }
      }
    }
    .container__button {
      margin-right: 0.1rem;
      margin-top: 0.6rem;
      width: 1.64rem;
      height: 0.5rem;
      line-height: 0.5rem;
      text-align: center;
      font-size: 0.32rem;
      color: #fff;
      border: 1px solid #fff;
      border-radius: 0.1rem;
    }
  }
}
</style>