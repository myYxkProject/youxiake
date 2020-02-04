<template>
  <div class="mSearch">
    <div class="mSearch__head">
      <div class="mSearch__head__search">
        <i class="iconfont">&#xe64c;</i>
        <input type="search" class="mSearch__head__input" placeholder="探索全球小众目的地和创意玩法" />
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
    <MSearchRecommend></MSearchRecommend>
    <MSearchRank></MSearchRank>
    <div class="mSearch__more">
      <span>没有你想要的？</span>
      <a href class="mSearch__more__mdd">
        目的地大全
        <i class="iconfont">&#xe872;</i>
      </a>
    </div>
    <MSearch__new></MSearch__new>
  </div>
</template>

<script>
import MSearchRank from "components/mSearch__Rank/mSearch__Rank.vue";
import MSearch__new from "components/mSearch__new/mSearch__new.vue";
import MSearchRecommend from "components/mSearch__Recommend/mSearch__Recommend.vue";
export default {
  components: { MSearchRank, MSearch__new, MSearchRecommend },
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

  .mSearch__more {
    display: flex;
    align-items: center;
    margin: 15px 15px 0;
    .pbottom(15);
    border-bottom: 0.5px solid #eee;
    color: #999;
    font-size: 14px;
    .mSearch__more__mdd {
      .w(198.5);
      .h(30);
      background: #fffae5;
      border-radius: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #333;
      .mleft(16.5);
      i {
        .mleft(6.5);
        .mtop(2.5);
        font-size: 12px;
        font-weight: 800;
      }
    }
  }
}
</style>