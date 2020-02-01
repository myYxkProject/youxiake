<template>
  <div class="mBottomNav">
    <router-link v-for="(item,index) in tab" :key="index" :to="item.path" active-class>
      <i class="iconfont" @click="change(index)">{{item.pic}}</i>
      {{item.name}}
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: [
        { name: "首页", path: "/", pic: "\ue9ce" },
        { name: "订单", path: "/order", pic: "\ue643" },
        { name: "个人中心", path: "/userCenter", pic: "\ue677" }
      ]
    };
  },
  methods: {
    change(index) {
      switch (index) {
        case 0:
          this.tab[index].pic = "\ue7eb";
          break;
        case 1:
          this.tab[index].pic = "\ue860";
          break;
        case 2:
          this.tab[index].pic = "\ue71f";
          break;
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "~style/index.less";
.mBottomNav {
  .w(375);
  .h(55);
  position: fixed;
  .b(-2);
  background-color: @bgColor;
  display: flex;
  flex-direction: row;
  z-index: 2;
  background-color: #fff;
  a {
    font-size: 14px;
    text-align: center;
    color: #666;
    .w(200);
    .h(30);
    .lh(30);
    i {
      display: block;
      font-size: 24px;
    }
  }
  .router-link-exact-active {
    color: red;
  }
}
</style>