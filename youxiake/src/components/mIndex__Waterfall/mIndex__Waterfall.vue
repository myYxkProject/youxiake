<template>
  <div class="mIndex__Waterfall">
    <div class="mIndex__Waterfall__nav" :class="wTop ? 'wTop':''">
      <div class="mNewScrollX">
        <ul class="nav__list">
          <li
            v-for="(item,index) in flowTabList"
            :key="index"
            :class="{'active':currentSort==index}"
            @click="toggle(index)"
          >{{item.typeName}}</li>
        </ul>
      </div>
    </div>
    <div class="Waterfall">
      <div class="column">
        <a href class="zt">
          <div class="top" :style="{backgroundImage:'url('+ flowRecommendtopl.image +')'}"></div>
          <div class="bottom">
            <p class="title">{{flowRecommendtopl.title}}</p>
            <p class="desc">{{flowRecommendtopl.subTitle}}</p>
          </div>
        </a>
        <a href class="line" v-for="(item,index) in flowRecommendleft" :key="index">
          <div
            class="top"
            :style="{backgroundImage:'url('+item.dataDetail.image+')'}"
            style="background-image: url(&quot;http://gallery.youxiake.com/Public/Data/upload/productimg/201907/08/5d23111d6bc06.jpg?imageslim&quot;);"
          >
            <!---->
            <span class="city">{{item.dataDetail.placeLabel}}</span>
            <div class="tags">
              <!-- <span class="trump">爆款</span> -->
              <!---->
            </div>
          </div>
          <div class="bottom">
            <p class="name">{{item.dataDetail.title}}</p>
            <div class="types">
              <span>{{item.dataDetail.productType}}</span>
              <span>{{item.dataDetail.productCat}}</span>
              <div class="days">{{item.dataDetail.days}}</div>
            </div>
            <div class="tags">
              <!-- <span class="discount">{{item.dataDetail.saleOtherList[0].detailRemark}}</span> -->
              <!-- <span class="tag">{{item.dataDetail.saleOtherList[1].detailRemark}}</span>  -->
              <span class="tag" style="display: none;">粉红沙滩浮潜</span>
              <!---->
              <!---->
              <!---->
              <!---->
            </div>
            <div class="price">
              ￥
              <span>{{item.dataDetail.priceLabel}}</span>起
            </div>
            <div class="enroll__num">{{item.dataDetail.numLabel}}</div>
          </div>
        </a>
      </div>
      <div class="column">
        <a href class="zt">
          <div class="top" :style="{backgroundImage:'url('+ flowRecommendtopr.image +')'}"></div>
          <div class="bottom">
            <p class="title">{{flowRecommendtopr.title}}</p>
            <p class="desc">{{flowRecommendtopr.subTitle}}</p>
          </div>
        </a>
        <a href class="line" v-for="(item,index) in flowRecommendright" :key="index">
          <div
            class="top"
            :style="{backgroundImage:'url('+item.dataDetail.image+')'}"
            style="background-image: url(&quot;http://gallery.youxiake.com/Public/Data/upload/productimg/201907/08/5d23111d6bc06.jpg?imageslim&quot;);"
          >
            <!---->
            <span class="city">{{item.dataDetail.placeLabel}}</span>
            <div class="tags">
              <!-- <span class="trump">爆款</span> -->
              <!---->
            </div>
          </div>
          <div class="bottom">
            <p class="name">{{item.dataDetail.title}}</p>
            <div class="types">
              <span>{{item.dataDetail.productType}}</span>
              <span>{{item.dataDetail.productCat}}</span>
              <div class="days">{{item.dataDetail.days}}</div>
            </div>
            <div class="tags">
              <!-- <span class="discount">{{item.dataDetail.saleOtherList[0].detailRemark}}</span> -->
              <!-- <span class="tag">{{item.dataDetail.saleOtherList[1].detailRemark}}</span>  -->
              <span class="tag" style="display: none;">粉红沙滩浮潜</span>
              <!---->
              <!---->
              <!---->
              <!---->
            </div>
            <div class="price">
              ￥
              <span>{{item.dataDetail.priceLabel}}</span>起
            </div>
            <div class="enroll__num">{{item.dataDetail.numLabel}}</div>
          </div>
        </a>
      </div>
    </div>
    <el-table v-loading="loading" style="width: 100%"></el-table>
  </div>
</template>

<script>
export default {
  props: {
    fT: { default: () => [], type: Array },
    fR: { default: () => [], type: Array },
    ld: { default: false, type: Boolean }
  },
  data() {
    return {
      flowTabList: [],
      flowRecommend: [],
      flowRecommendtopl: [],
      flowRecommendtopr: [],
      flowRecommendleft: [],
      flowRecommendright: [],
      currentSort: 0,
      wTop: false,
      type: 1,
      loading: this.ld
    };
  },
  watch: {
    fT(newVal, oldVal) {
      this.$nextTick(() => {
        console.log(this.fT);
        this.flowTabList = this.fT;
        console.log(this.flowTabList);
      });
    },
    fR(newVal, oldVal) {
      this.$nextTick(() => {
        // console.log(this.fR);
        this.flowRecommend = this.fR;
        // console.log(this.flowRecommend);
        this.flowRecommendtopl = this.flowRecommend[0].dataDetail;
        // console.log(this.flowRecommendtopl);
        this.flowRecommendtopr = this.flowRecommend[1].dataDetail;
        // console.log(this.flowRecommendtopr);
        this.flowRecommendleft = this.flowRecommend.filter(function(
          item,
          index
        ) {
          let arr = [];
          if (index % 2 === 0 && index != 0) {
            arr.push(item);
            return arr;
          }
        });
        // console.log(this.flowRecommendleft);
        this.flowRecommendright = this.flowRecommend.filter(function(
          item,
          index
        ) {
          let arr = [];
          if (index % 2 !== 0 && index !== 1) {
            arr.push(item);
            return arr;
          }
        });
      });
    }
  },
  created() {
    console.log(this.load);
    this.flowRecommend = this.fR;
    this.flowRecommendtopl = this.flowRecommend[0].dataDetail;
    this.flowRecommendtopr = this.flowRecommend[1].dataDetail;
    this.flowRecommendleft = this.flowRecommend.filter(function(item, index) {
      let arr = [];
      if (index % 2 === 0 && index !== 0) {
        arr.push(item);
        return arr;
      }
    });
    this.flowRecommendright = this.flowRecommend.filter(function(item, index) {
      let arr = [];
      if (index % 2 !== 0 && index !== 1) {
        arr.push(item);
        return arr;
      }
    });
  },
  mounted() {
    // console.log(this);
    this.flowTabList = this.fT;
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    toggle(index) {
      this.currentSort = index;
      console.log(index);
      console.log(this.flowTabList[index].type);
      this.type = this.flowTabList[index].type;
      this.$emit("changePage", this.type);
    },
    handleScroll() {
      var top = Math.floor(
        document.body.scrollTop ||
          document.documentElement.scrollTop ||
          window.pageXOffset
      );
      if (top > 1400) {
        this.wTop = true;
      } else {
        this.wTop = false;
      }
      // console.log(top);
    }
  }
};
</script>

<style lang="less" scoped>
@import "~style/index.less";
.mIndex__Waterfall {
  .mtop(5);
  .mbottom(55);
  .mIndex__Waterfall__nav {
    .h(39);
    .mbottom(5);
    .w(375);
    .mNewScrollX {
      .h(39); // 也可以不设置高度，让高度自适应内容的变化
      overflow: hidden;
      .lh(39);
      .nav__list::-webkit-scrollbar {
        display: none;
      }
      .nav__list {
        .h(39); // 高度实际为 300 * 110% = 330px
        .lh(39);
        overflow-x: scroll;
        white-space: nowrap;
        li {
          display: inline-block;
          .h(39);
          .lh(39);
          .mleft(5);
          .mright(10);
          text-align: center;
          max-width: 68px;
          font-size: 16px;
          color: #000;
        }
        .active {
          position: relative;
          font-size: 18px;
          font-weight: 700;
          color: #333;
          z-index: 1;
          background-size: cover;
          background-image: url("data:image/png;base64,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");
        }
      }
    }
  }
  .Waterfall {
    width: 100%;
    padding: 0 5px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    .column {
      .w(173);
      //   background-color: red;
      * {
        .mbottom(2);
        // background-color: #fff;
      }
      .zt {
        position: relative;
        display: block;
        .pbottom(8);
        .w(173);
        border-radius: 10px;
        box-sizing: border-box;
        .top {
          background: #fff9db no-repeat 50% / cover;
          .h(172.5);
          border-radius: 15px 15px 0 0;
        }
        .bottom {
          .pbottom(10);
          background-image: url("data:image/png;base64,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");
          background-size: cover;
          .title {
            padding: 2px 2px 0;
            width: 100%;
            text-align: center;
            .lh(24);
            font-size: 14px;
            font-weight: 700;
            color: #fff;
            box-sizing: border-box;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }
          .desc {
            .mtop(6);
            padding: 0 2px;
            width: 100%;
            text-align: center;
            .lh(12);
            font-size: 12px;
            color: #fff;
            box-sizing: border-box;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }
        }
      }
      .line {
        position: relative;
        display: block;
        .pbottom(8);
        .w(173);
        .top {
          .h(130);
          position: relative;
          background: #fff9db no-repeat 50% / cover;
          border-radius: 15px 15px 0 0;
          .city {
            position: absolute;
            display: flex;
            left: 0;
            top: 0;
            padding: 0 10px;
            .h(18);
            -webkit-box-align: center;
            align-items: center;
            font-size: 11px;
            color: #fff;
            background-color: rgba(0, 0, 0, 0.5);
            border-radius: 15px 0 15px 0;
          }
          .tags {
            .l(10);
            .b(11);
            position: absolute;
            display: flex;
            .trump {
              background: linear-gradient(90deg, #ffed5c, #ffce06);
              color: #333;
            }
          }
        }
        .bottom {
          width: 100%;
          overflow: hidden;
          .name {
            max-height: 47px;
            .lh(18);
            font-size: 14px;
            font-weight: 700;
            color: #333;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
          }
          .types {
            .mleft(10);
            display: flex;
            span {
              position: relative;
              .pright(15);
              .lh(10);
              font-size: 12px;
              color: #999;
            }
            .days {
              .lh(10);
              font-size: 12px;
              color: #999;
            }
          }
          .tags {
            margin: 8px 0 0 7px;
            display: flex;
            .discount {
              color: #ff6857;
              border-color: #ff6857;
              font-size: 10px;
              .mright(10);
            }
            .tag {
              font-size: 10px;
              color: #e39e30;
              border-color: #e39e30;
            }
          }
          .price {
            float: left;
            margin: 12px 0 0 7px;
            display: flex;
            align-items: flex-end;
            font-size: 11px;
            color: #ff7100;
            span {
              .mright(5);
              .lh(10);
              font-size: 17px;
              font-weight: 700;
              color: #ff7100;
            }
          }
          .enroll__num {
            float: right;
            margin: 17px 10px 0 0;
            .lh(10);
            font-size: 10px;
            color: #999;
          }
        }
      }
    }
  }
  .wTop {
    position: fixed;
    top: 0;
    z-index: 10;
    background: #eee;
  }
}
</style>