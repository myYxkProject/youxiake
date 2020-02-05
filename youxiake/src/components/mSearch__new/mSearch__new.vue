<template>
  <div class="mSearch__new">
    <div class="mSearch__new__title">
      <h3>新品推荐</h3>
    </div>
    <div class="mSearch__new__lists">
      <div class="mSearch__new__list" v-for="(item,index) in productNewRecommends" :key="index">
        <a href>
          <img :src="item.img" />
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
    <el-table v-loading="loading" style="width:100%"></el-table>
  </div>
</template>

<script>
import { getSearchData } from "api/search.js";
export default {
  data() {
    return {
      productNewRecommends: [],
      page: 1,
      cH: 667,
      loading: true
    };
  },
  methods: {
    // 获取滚动条当前的位置
    getScrollTop() {
      let scrollTop = 0;
      if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = Math.floor(document.documentElement.scrollTop);
      } else if (document.body) {
        scrollTop = Math.floor(document.body.scrollTop);
      }
      // console.log("scrollTop", scrollTop);
      return scrollTop;
    },
    // 获取当前可视范围的高度
    getClientHeight() {
      let clientHeight = 0;
      if (document.body.clientHeight && document.documentElement.clientHeight) {
        clientHeight = Math.min(
          document.body.clientHeight,
          document.documentElement.clientHeight
        );
      } else {
        clientHeight = Math.max(
          document.body.clientHeight,
          document.documentElement.clientHeight
        );
      }
      // console.log("clientHeight", clientHeight);
      return clientHeight;
    },
    // // 获取文档完整的高度
    // getScrollHeight() {
    //   return Math.max(
    //     document.body.scrollHeight,
    //     document.documentElement.scrollHeight
    //   );
    // },
    // 滚动事件触发下拉加载
    onScroll() {
      // this.cH = this.getClientHeight();
      console.log(this.cH - this.getScrollTop());
      console.log(this.cH);
      if (this.cH - this.getScrollTop() <= 10) {
        if (this.page < 5) {
          this.page++;
          console.log(this.page);
          this.cH += 667;
          console.log(this.cH);
          getSearchData(this.page).then(res => {
            this.productNewRecommends = this.productNewRecommends.concat(
              res.data.productNewRecommends
            );
          });
        } else {
          this.loading = false;
        }
      }
    }
  },
  created() {
    getSearchData().then(res => {
      this.productNewRecommends = res.data.productNewRecommends;
      // console.log(this.productNewRecommends)
    });
    this.$nextTick(function() {
      window.addEventListener("scroll", this.onScroll);
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
    .dataend {
      width: 100%;
      .h(30);
      .lh(30);
      font-size: 20px;
      color: #999;
      text-align: center;
      background-color: #eee;
    }
  }
}
</style>