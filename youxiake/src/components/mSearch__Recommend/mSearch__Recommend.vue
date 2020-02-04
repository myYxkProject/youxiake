<template>
  <div class="mSearch__Recommend">
    <div class="mSearch__Recommend__title">
      <h3>搜索推荐</h3>
    </div>
    <div class="xs-container">
      <div class="mSearch__Recommend__items">
        <div class="mSearch__Recommend__item" v-for="(item,index) in recommendSearch" :key="index">
          <a href>
            <img
            :src=item.cover
            />
            <h2>{{item.title}}</h2>
            <span>{{item.subTitle}}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getSearchData } from "api/search.js";
export default {
    data(){
        return{
            recommendSearch:[]
        }
    },
    mounted(){
        getSearchData().then((res)=>{
            console.log(res)
            this.recommendSearch = res.data.recommendSearch
            console.log(this.recommendSearch)
        })
    }
};
</script>

<style lang="less" scoped>
@import "~style/index.less";
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
  .xs-container {
    .mSearch__Recommend__items::-webkit-scrollbar {
      display: none;
    }
    .mSearch__Recommend__items {
      .mtop(12.5);
      overflow: scroll;
      white-space: nowrap;
      .mSearch__Recommend__item {
        .w(117.5);
        .h(108);
        .mright(10);
        display: inline-block;
        img {
          .w(117.5);
          .h(67);
          border-radius: 4px;
          background: #fffae5;
          overflow: hidden;
        }
        h2 {
          font-size: 14px;
          color: #333;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          .mtop(1.5);
          .h(18.5);
          .lh(18.5);
        }
        span {
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
</style>