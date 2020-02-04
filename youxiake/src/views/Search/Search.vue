<template>
  <div class="mSearch">
    <div class="mSearch__head">
      <div class="mSearch__head__search">
        <i class="iconfont">&#xe64c;</i>
        <input type="search" class="mSearch__head__input" />
      </div>
      <div class="mSearch__head__cancel">取消</div>
    </div>
    <div class="mSearch__history">
      <div class="mSearch__history__title">
        <h3>历史搜索</h3>
        <i class="iconfont">&#xe63e;</i>
      </div>
      <div class="mSearch__history__list">
        <span>f</span>
        <span>哈尔滨</span>
        <span>北京</span>
      </div>
    </div>
    <div class="mSearch__Recommend">
      <div class="mSearch__Recommend__title">
        <h3>搜索推荐</h3>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchValue: ""
    };
  }
};
</script>

<style lang="less" scoped>
@import "~style/index.less";
.mSearch {
  overflow-x: hidden;
  background: #fff;
  .mSearch__head {
    .w(375);
    .h(45);
    .lh(45);
    background: #f4f4f4;
    padding: 0 15.5px;
    border-bottom: 0.01rem solid #ddd;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    .mSearch__head__search {
      .w(300);
      .h(30);
      background: #fff;
      border: 0.01rem solid #ddd;
      border-radius: 0.3rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      padding: 0 14.5px 0 17px;
      i {
        border: none;
        outline: none;
        -webkit-appearance: none;
        padding: 0 0 0 0.1rem;
        font-size: 0.28rem;
        .w(25);
        .h(28);
        display: flex;
        align-items: center;
      }
      .mSearch__head__input {
        border: none;
        outline: none;
        padding: 0 0 0 0.1rem;
        font-size: 14px;
        .w(255);
        .h(28);
        display: flex;
        align-items: center;
      }
    }
    .mSearch__head__cancel {
      font-size: 15px;
      color: #333;
    }
  }
  .mSearch__history {
    .pbottom(5);
    border-bottom: 0.5px solid #eee;
    margin: 12.5px 15px 0;
    .mSearch__history__title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      h3 {
        color: #999;
        font-size: 14px;
        font-weight: 400;
      }
    }
    .mSearch__history__list {
      .mtop(12.5);
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      max-height: 80px;
      overflow: hidden;
      span {
        display: inline-block;
        .h(30);
        .lh(30);
        background: #f2f4f7;
        font-size: 14px;
        color: #333;
        padding: 0 13px;
        margin: 0 10px 10px 0;
        border-radius: 15px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
  }
  .mSearch__Recommend {
    .pbottom(15);
    border-bottom: 1px solid #eee;
    margin: 12.5px 0 0 15px;
    .mSearch__Recommend__title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      h3 {
        color: #999;
        font-size: 14px;
        font-weight: 400;
      }
    }
    .scroll__H__view {
      .xs-container {
          .mSearch__Recommend__items{
              .mtop(12.5);
              display: inline-flex;
              .mSearch__Recommend__item{
                  .w(117.5);
                  .h(108);
                  .mright(10);
                  img{
                      .w(117.5);
                      .h(67);
                        border-radius: 4px;
                        background: #fffae5;
                        overflow: hidden;
                  }
                  h2{
                      font-size: 14px;
                    color: #333;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                    .mtop(1.5);
                    .h(18.5);
                    .lh(18.5);
                  }
                  span{
                      font-size: 12px;
                    color: #999;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                    display: block;
                    .h(15.5);
                    .lh(15.5);
                  }
              }
          }
      }
    }
  }
}
</style>