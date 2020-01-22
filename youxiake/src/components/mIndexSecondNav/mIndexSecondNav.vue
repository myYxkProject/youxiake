<template>
  <div class="mIndexSecondNav">
    <!-- 上层盒子 -->
    <div class="nav__box">
      <a href="/zty" class="item nav1">
        <p>主体游</p>
        <span>个性独创</span>
      </a>
      <a href="/qinzi" class="item">
        <p>亲子游</p>
      </a>
      <a href="/qinzi" class="item">
        <p>摄影游</p>
      </a>
      <a href="/qinzi" class="item">
        <p>户外游</p>
      </a>
      <a href="/qinzi" class="item">
        <p>活动赛事</p>
      </a>
      <a href="/qinzi" class="item">
        <p>瑜伽行</p>
      </a>
      <a href="/qinzi" class="item">
        <p>游侠旅拍</p>
      </a>
    </div>
    <!-- 下层盒子 -->
    <div class="nav__box">
      <a href="/qinzi" class="item">
        <p>定制游</p>
      </a>
      <a href="/qinzi" class="item">
        <p>签证</p>
      </a>
      <a href="/qinzi" class="item">
        <p>邮轮</p>
      </a>
      <a href="/qinzi" class="item">
        <p>游侠集市</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "~style/index.less";
.mIndexSecondNav {
  .mtop(10);
  padding: 0.3rem 0.2rem;
  background-color: #eee;
  border-radius: 0 0 0.3rem 0.3rem;
  overflow: hidden;
  .nav__box {
    overflow: hidden;
    .item {
      position: relative;
      float: left;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-bottom: 1px solid lightgreen;
      box-sizing: border-box;
      .w(88.5);
      .h(44.5);
      p {
        padding-top: 0.22rem;
        font-size: 14px;
        font-weight: 700;
        color: #333;
      }
    }
    .nav1 {
      border-right: 1px solid lightgreen;
      .h(89);
      p {
        padding: 0.41rem 0 0.09rem;
      }
      span {
        .w(50);
        .h(12);
        .mtop(3);
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #ffd800;
        font-size: 10px;
        font-weight: 700;
        color: #333;
        border-radius: 0.14rem;
      }
    }
  }
}
</style>