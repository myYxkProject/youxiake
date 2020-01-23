<template>
  <div class="mIndexWeekAndLocal">
    <!-- 选项卡 -->
    <div class="mIndexWeekAndLocal__nav">
      <!-- <li class="active" @click="toggle(index)" v-for="(item,index) in tabList" :key="index"> -->
      <li :class="tabFlag?'active':''" @click="toggle1">
        <p class="name">周边短途</p>
      </li>
      <li :class="tabFlag?'':'active'" @click="toggle2">
        <p class="name">当地玩乐</p>
      </li>
    </div>
    <!-- 选项卡下周末短途的内容 -->
    <div class="mIndexWeekAndLocal__week" v-show="tabFlag">
      <ul class="week__nav">
        <li
          :class="{'active':currentSort==index}"
          v-for="(item,index) in weekList"
          :key="index"
          @click="toggle(index)"
        >{{item.title}}</li>
      </ul>
      <div class="vux-slider week__swiper">
        <div class="swiper-container">
          <div class="swiper-wrapper vux-swiper">
            <div class="swiper-slide items">
              <a href class="item" v-for="(item,index) in productList13" :key="index">
                <div class="top" :style="{backgroundImage:'url('+item.image+')'}">
                  <div class="tag">
                    <p>
                      {{item.placeLabel}}
                      <span>|</span>
                    </p>
                    <p>{{item.days}}</p>
                  </div>
                  <div class="price">
                    ￥
                    <span>{{item.priceLabel}}</span>起
                  </div>
                </div>
                <p class="title">{{item.simpleName}}</p>
              </a>
            </div>
            <div class="swiper-slide items">
              <a href class="item" v-for="(item,index) in productList14" :key="index">
                <div class="top" :style="{backgroundImage:'url('+item.image+')'}">
                  <div class="tag">
                    <p>
                      {{item.placeLabel}}
                      <span>|</span>
                    </p>
                    <p>{{item.days}}</p>
                  </div>
                  <div class="price">
                    ￥
                    <span>{{item.priceLabel}}</span>起
                  </div>
                </div>
                <p class="title">{{item.simpleName}}</p>
              </a>
            </div>
            <div class="swiper-slide items">
              <a href class="item" v-for="(item,index) in productList15" :key="index">
                <div class="top" :style="{backgroundImage:'url('+item.image+')'}">
                  <div class="tag">
                    <p>
                      {{item.placeLabel}}
                      <span>|</span>
                    </p>
                    <p>{{item.days}}</p>
                  </div>
                  <div class="price">
                    ￥
                    <span>{{item.priceLabel}}</span>起
                  </div>
                </div>
                <p class="title">{{item.simpleName}}</p>
              </a>
            </div>
          </div>
          <div class="swiper-pagination pagination"></div>
        </div>
      </div>
    </div>
    <!-- 选项卡下短途玩乐的内容 -->
    <div class="mIndexWeekAndLocal__local" v-show="!tabFlag">
      <div class="local__box">
        <div class="local__top">
          <a
            href
            v-for="(item,index) in local.upList"
            :key="index"
            :style="{backgroundImage:'url('+item.image+')'}"
          >
            <div class="tag">{{item.subTitle}}</div>
            <p class="title">{{item.title}}</p>
          </a>
        </div>
        <div class="local__bottom">
          <a href v-for="(item,index) in local.downList" :key="index">
            <i class="img" :style="{backgroundImage:'url('+item.image+')'}"></i>
            <p class="title">{{item.title}}</p>
            <span class="desc">{{item.subTitle}}</span>
          </a>
        </div>
      </div>
      <a href="https://m.youxiake.com/ddwl" class="local__more">查看更多></a>
    </div>
  </div>
</template>

<script>
import { getHomeData } from "api/home.js";

export default {
  props: {
    wl: { default: () => {}, type: Object }
  },
  data() {
    return {
      flag: true,
      tabFlag: true,
      currentSort: 0,
      tabList: "",
      weekList: "",
      local: "",
      productList: [],
      productList2: [],
      productList3: [],
      productList4: [],
      productList5: [],
      productList6: [],
      productList7: [],
      productList8: [],
      productList9: [],
      productList10: [],
      productList11: [],
      productList12: [],
      productList13: [],
      productList14: [],
      productList15: []
    };
  },
  methods: {
    toggle1() {
      this.tabFlag = true;
    },
    toggle2() {
      this.tabFlag = false;
    },
    toggle(index) {
      console.log(index);
      this.currentSort = index;
      switch (index) {
        case 0:
          this.productList13 = this.productList;
          this.productList14 = this.productList2;
          this.productList15 = this.productList3;
          break;
        case 1:
          this.productList13 = this.productList4;
          this.productList14 = this.productList5;
          this.productList15 = this.productList6;
          break;
        case 2:
          this.productList13 = this.productList7;
          this.productList14 = this.productList8;
          this.productList15 = this.productList9;
          break;
        case 3:
          this.productList13 = this.productList10;
          this.productList14 = this.productList11;
          this.productList15 = this.productList12;
          break;
      }
    }
  },
  created() {
    getHomeData().then(res => {
      this.weekList = res.data.data.aroundLump.weekList;
      console.log(this.weekList);
      this.tabList = res.data.data.aroundLump.tabList;
      this.local = res.data.data.aroundLump.local;
      console.log(this.local);
      // this.productList = res.data.data.aroundLump.weekList[0].productList
      // console.log(this.productList)
      res.data.data.aroundLump.weekList[0].productList.forEach(
        (item, index) => {
          // console.log(item, index);
          if (index < 6) {
            this.productList.push(item);
          } else if (index < 12) {
            this.productList2.push(item);
          } else {
            this.productList3.push(item);
          }
        }
      );
      console.log(this.productList);
      res.data.data.aroundLump.weekList[1].productList.forEach(
        (item, index) => {
          // console.log(item, index);
          if (index < 6) {
            this.productList4.push(item);
          } else if (index < 12) {
            this.productList5.push(item);
          } else {
            this.productList6.push(item);
          }
        }
      );
      res.data.data.aroundLump.weekList[2].productList.forEach(
        (item, index) => {
          // console.log(item, index);
          if (index < 6) {
            this.productList7.push(item);
          } else if (index < 12) {
            this.productList8.push(item);
          } else {
            this.productList9.push(item);
          }
        }
      );
      res.data.data.aroundLump.weekList[3].productList.forEach(
        (item, index) => {
          // console.log(item, index);
          if (index < 6) {
            this.productList10.push(item);
          } else if (index < 12) {
            this.productList11.push(item);
          } else {
            this.productList12.push(item);
          }
        }
      );
    });
    this.productList13 = this.productList;
    this.productList14 = this.productList2;
    this.productList15 = this.productList3;
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      pagination: ".swiper-pagination"
    });
  }
};
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
  .mIndexWeekAndLocal__week {
    padding: 0 0.2rem;
    background-color: #fff;
    border-top-right-radius: 0.16rem;
    // background-color: red;
    height: 650px;
    width: 100%;
    .week__nav {
      .h(47.5);
      overflow: hidden;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      li {
        float: left;
        margin: 0.2rem 0.2rem 0 0;
        padding: 0 0.08rem;
        .w(79);
        .h(27);
        .lh(27);
        text-align: center;
        font-size: 13px;
        color: #333;
        border: 1px solid #eee;
        border-radius: 10px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        box-sizing: border-box;
      }
      .active {
        font-weight: 700;
        color: #e6ac00;
      }
    }
    .vux-slider {
      overflow: hidden;
      position: relative;
      .swiper-container {
        .vux-swiper {
          .h(250);
          .items {
            .item {
              .w(116);
              .h(127);
              float: left;
              .mright(6);
              overflow: hidden;
              .top {
                position: relative;
                .h(87);
                background: #fff9db no-repeat 50% / cover;
                border-radius: 5px;
                overflow: hidden;
                z-index: 1;
                .tag {
                  position: absolute;
                  right: 0;
                  top: 0;
                  padding: 0 0.08rem;
                  height: 0.3rem;
                  display: flex;
                  -webkit-box-align: center;
                  align-items: center;
                  font-size: 0.24rem;
                  color: #fff;
                  background-color: rgba(47, 41, 32, 0.8);
                  border-radius: 0 0.08rem 0 0.08rem;
                  p {
                    flex-shrink: 0;
                    font-size: 12px;
                    color: #fff;
                  }
                  span {
                    margin: 5px;
                    color: #fff;
                  }
                }
                .price {
                  position: absolute;
                  .l(5);
                  bottom: 5px;
                  font-size: 12px;
                  color: #fff;
                  span {
                    font-size: 12px;
                    font-weight: 700;
                    color: #fff;
                  }
                }
              }
              .title {
                margin: 2px 0 0 2px;
                font-size: 14px;
                font-weight: 700;
                color: #333;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
              }
            }
          }
        }
        .pagination {
          position: absolute;
          bottom: 0;
        }
      }
    }
    .week__swiper {
      width: 100%;
    }
  }
  .mIndexWeekAndLocal__local {
    padding: 8px 8px 0;
    background-color: #fff;
    border-top-left-radius: 15px;
    box-sizing: border-box;
    .local__box {
      .pbottom(8);
      .local__top {
        display: flex;
        justify-content: space-around;
        a:first-of-type {
          .w(236);
          .h(116);
          border-top-left-radius: 18px;
        }
        .tag {
          position: absolute;
          left: 0;
          top: 0;
          padding: 0 5px 0 5px;
          .h(20);
          display: flex;
          align-items: center;
          background-color: #5bd07e;
          font-size: 12px;
          color: #fff;
          border-radius: 8px 0 8px 0;
        }
        .title {
          position: absolute;
          left: 0.2rem;
          bottom: 0.12rem;
          width: 88%;
          font-size: 14px;
          font-weight: 700;
          color: #fff;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
        a:last-of-type {
          border-top-right-radius: 18px;
        }
        a {
          position: relative;
          .w(116);
          .h(116);
          background: #fff9db no-repeat 50% / cover;
          overflow: hidden;
          z-index: 1;
        }
      }
      .local__bottom {
        display: flex;
        justify-content: space-between;
        .mtop(5);
        .img {
          display: block;
          .w(116);
          .h(116);
          background: #fff9db no-repeat 50% / cover;
        }
        .title {
          .mtop(5);
          .w(116);
          text-align: center;
          font-size: 14px;
          font-weight: 700;
          color: #333;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
        .desc {
          display: block;
          .mtop(5);
          .w(116);
          text-align: center;
          font-size: 12px;
          color: #999;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
        a {
          .w(166);
          overflow: hidden;
        }
        a:first-of-type {
          .img {
            border-bottom-left-radius: 18px;
          }
        }
        a:last-of-type {
          .img {
            border-bottom-right-radius: 18px;
          }
        }
      }
    }
    .local__more {
      display: flex;
      justify-content: center;
      align-items: center;
      .w(375);
      .h(44);
      font-size: 14px;
      color: #333;
      border-top: 1px solid #eee;
    }
  }
}
</style>