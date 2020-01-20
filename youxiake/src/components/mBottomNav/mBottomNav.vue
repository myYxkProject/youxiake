<template>
    <div class="mBottomNav">
        <a href="#/">
        <i class="iconfont">&#xe9ce;</i>
        首页
        </a>
        <a href="#/order">
        <i class="iconfont">&#xe643;</i>
        订单
        </a>
        <a href="#/userCenter">
        <i class="iconfont">&#xe677;</i>
        个人中心
        </a>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
@import "~style/index.less";
.mBottomNav{
    .w(375);
    .h(55);
    position: fixed;
    bottom: 0;
    background-color: @bgColor;
    display: flex;
    flex-direction: row;
    a{
        color: #999;
        font-size: 14px;
        text-align: center;
        .w(200);
        .h(30);
        .lh(30);
        i{
            display:block;
            font-size: 24px;
  
        }
    }
}
</style>