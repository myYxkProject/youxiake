<template>
  <div class="mIndexMainNav">
    <a href="/around" class="nav">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-car" />
      </svg>
      <p>周边游</p>
    </a>
    <a href="/cn" class="nav">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-building_" />
      </svg>
      <p>国内游</p>
    </a>
    <a href="/cn" class="nav">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-lvyou" />
      </svg>
      <p>出境游</p>
    </a>
    <a href="/cn" class="nav">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-hanglixiang" />
      </svg>
      <p>自由行</p>
    </a>
    <a href="/cn" class="nav">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-jiudian" />
      </svg>
      <p>酒店民俗</p>
    </a>
  </div>
</template>

<script>
import "assets/iconfont.js";
export default {};
</script>

<style lang="less" scoped>
@import "~style/index.less";

.mIndexMainNav {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  .mtop(10);
  .nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #333;
    i {
      .w(44);
      .h(44);
    }
    p {
      .mtop(8);
      line-height: 0.24rem;
      font-size: 12px;
      color: #333;
      white-space: nowrap;
    }
  }
}
</style>