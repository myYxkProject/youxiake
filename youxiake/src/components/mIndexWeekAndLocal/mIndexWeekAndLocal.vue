<template>
  <div class="mIndexWeekAndLocal">
    <!-- 选项卡 -->
    <div class="mIndexWeekAndLocal__nav">
      <li class="active">
        <p class="name">周边短途</p>
      </li>
      <li>
        <p class="name">当地玩乐</p>
      </li>
    </div>
    <!-- 选项卡下周末短途的内容 -->
    <div class="mIndexWeekAndLocal__week"></div>
    <!-- 选项卡下短途玩乐的内容 -->
    <div class="mIndexWeekAndLocal__local"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "~style/index.less";
.mIndexWeekAndLocal {
  .mtop(8);
  margin-top: 0.2rem;
  width: 100%;
  background-color: #eee;
  border-radius: 1%;
  overflow: hidden;
  .mIndexWeekAndLocal__nav {
    .w(375);
    display: flex;
    li {
      position: relative;
      width: 50%;
      .h(44);
      .lh(44);
      text-align: center;
      z-index: 1;
      .name {
        position: relative;
        font-size: 16px;
        font-weight: 700;
        color: #333;
        background-color: #eee;
        border-radius: 1%;
        z-index: 1;
      }
    }
    .active {
      .name {
        background-color: #fff;
      }
    }
  }
}
</style>