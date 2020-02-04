<template>
  <div class="mSearch__new">
    <div class="mSearch__new__title">
      <h3>新品推荐</h3>
    </div>
    <div class="mSearch__new__lists">
      <div class="mSearch__new__list" v-for="(item,index) in productNewRecommends" :key="index">
        <a href>
          <img :src="item.img"/>
          <div class="mSearch__new__tag">
            {{item.productType}}
            <span></span>
            {{item.place_label}}
          </div>
          <h3>{{item.name}}</h3>
          <div class="mSearch__new__price">
            <div class="price">
              <span>
                ￥
                <em>{{item.price}}</em>
              </span>起
            </div>
            <div class="day">{{item.days}}</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { getSearchData } from "api/search.js";
export default {
  data() {
    return {
      productNewRecommends: []
    };
  },
  mounted() {
    getSearchData().then(res => {
      this.productNewRecommends = res.data.productNewRecommends;
      console.log(this.productNewRecommends)
    });
  }
};
</script>

<style lang="less" scoped>
@import "~style/index.less";
.mSearch__new {
  margin: 12.5px 15px 0;
  .mSearch__new__title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      color: #999;
      font-size: 14px;
      font-weight: 400;
    }
  }
  .mSearch__new__lists {
    .mtop(12);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    .mSearch__new__list {
      .w(167.5);
      position: relative;
      .mbottom(22);
      a {
        img {
          width: 100%;
          .h(94);
          border-radius: 4px;
          background: #fffae5;
        }
        .mSearch__new__tag {
          position: absolute;
          left: 0;
          top: 6px;
          max-width: 100%;
          box-sizing: border-box;
          padding: 0 9.5px 0 3.5px;
          .h(16);
          background: rgba(0, 0, 0, 0.6);
          border-radius: 0 8px 8px 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          color: #fff;
          span {
            .w(1);
            .h(10);
            background: #fff;
            display: block;
            margin: 0 5px;
          }
        }
        h3 {
          font-size: 14px;
          .h(37);
          .lh(20);
          color: #333;
          overflow: hidden;
          text-overflow: ellipsis;
          font-weight: 400;
        }
        .mSearch__new__price {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
          color: #999;
          .mtop(8);
          .price {
            color: #999;
            span {
              color: #ff7100;
            }
            em {
              font-size: 15px;
              font-weight: 700;
              font-style: normal;
              color: #ff7100;
            }
          }
        }
      }
    }
  }
}
</style>