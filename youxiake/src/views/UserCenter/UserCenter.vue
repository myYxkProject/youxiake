<template>
  <div class="mUserCenter">
    <div class="mUserCenterHeader">
      <div class="header__box">
        <div class="header__avatar"></div>
        <div class="header__login">
          去登录/注册
          <span>新用户注册送388元大礼包</span>
        </div>
      </div>
    </div>
    <div class="mUserCenterOrders">
      <div class="mUserCenterOrders__head">
        <b>出行订单</b>
        <span>全部></span>
      </div>
      <div class="mUserCenterOrders__container">
        <div class="mUserCenterOrders__box">
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-daifukuan" />
            </svg>
          </div>
          <span>待付款</span>
        </div>
        <div class="mUserCenterOrders__box">
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-Order" />
            </svg>
          </div>
          <span>报名成功</span>
        </div>
        <div class="mUserCenterOrders__box">
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-zhuanhuan" />
            </svg>
          </div>
          <span>替补</span>
        </div>
        <div class="mUserCenterOrders__box">
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-daipingjia" />
            </svg>
          </div>
          <span>待评价</span>
        </div>
        <div class="mUserCenterOrders__box">
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-tuikuandan" />
            </svg>
          </div>
          <span>退款/取消</span>
        </div>
      </div>
    </div>
    <div class="mUserCenterWallet">
      <div class="mUserCenterWallet__head">
        我的钱包
        <span>></span>
      </div>
    </div>
    <div class="mUserCenterService">
      <div class="mUserCenterService__head">我的服务</div>
      <div class="mUserCenterService__container">
        <div class="mUserCenterService_row">
          <a href>
            <i class="iconfont">&#xe891;</i>
            <span>签证订单</span>
          </a>
          <a href>
            <i class="iconfont">&#xe626;</i>
            <span>集市订单</span>
          </a>
          <a href>
            <i class="iconfont">&#xe609;</i>
            <span>集市购物车</span>
          </a>
          <a href>
            <i class="iconfont">&#xe656;</i>
            <span>常用收货地址</span>
          </a>
        </div>
        <div class="mUserCenterService_row">
          <a href>
            <i class="iconfont">&#xe643;</i>
            <span>常用出行人</span>
          </a>
          <a href>
            <i class="iconfont">&#xe614;</i>
            <span>修改密码</span>
          </a>
          <a @click="cityShow">
            <i class="iconfont">&#xe601;</i>
            <span>在线客服</span>
          </a>
          <a href>
            <i class="iconfont">&#xe677;</i>
            <span>游侠客APP</span>
          </a>
        </div>
      </div>
      <div class="mCustomerService" v-show="show">
        <div class="mCustomerService__container">
          <div
            id="vux-scroller-w5trf"
            style="height: 8rem; touch-action: auto; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); position: relative; overflow: scroll;"
          >
            <div
              class="xs-container"
              style="transform-origin: 0px 0px; transform: translateX(0px) translateY(0px) translateZ(0px) scale(1, 1); transition: none 0s ease 0s;"
            >
              <div
                style="transform-origin: 0px 0px; transform: translate(0px, 0px) scale(1) translateZ(0px);"
              >
                <div class="container__header">
                  <span></span>
                  在线客服
                  <span></span>
                </div>
                <div class="container__body">
                  <div
                    class="body__list"
                    v-for="(item,index) in onLineKeFuCity"
                    :key="index"
                    :groupid="item.groupid"
                  >{{item.name}}</div>
                </div>
                <div class="container__title">
                  <span></span>
                  电话客服
                  <span></span>
                </div>
                <div class="container__footer">
                  <a href="tel:400-670-6300" class="footer__phone">
                    {{onLineKeFuData.tel}}
                    <i></i>
                  </a>
                  <div class="footer__text">免长途费</div>
                  <div class="footer__date">{{onLineKeFuData.time}}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="container__cancel" @click="cityHide">取消</div>
        </div>
      </div>
    </div>
    <div class="mUserCenterRecommend">
      <div class="mUserCenterRecommend__head">精选推荐</div>
      <div class="mUserCenterRecommend__body">
        <a href class="mUserCenterRecommend__line" v-for="(item,index) in userRecommends" :key="index" :pid='item.pid'>
          <div
            class="line__pic"
            :style="{backgroundImage:'url('+item.img+')'}"
          >
            <div class="line__type">{{item.theme_label}} | {{item.place_label}}</div>
          </div>
          <div class="line__title">{{item.name}}</div>
          <div class="line__msg">
            <div class="line__price">
              <span>￥</span>
              <b>{{item.minprice}}</b>
            </div>
            <div class="line__days">{{item.days}}</div>
          </div>
        </a>
      </div>
    </div>
    <MBottomNav></MBottomNav>
  </div>
</template>

<script>
import MBottomNav from "components/mBottomNav/mBottomNav";
import { getOnLineKeFu, getUserRecommends } from "api/userCenter.js";
export default {
  components: { MBottomNav },
  data() {
    return {
      onLineKeFuData: {},
      onLineKeFuCity: [],
      userRecommends:[],
      show: false
    };
  },
  mounted() {
    getOnLineKeFu().then(res => {
      this.onLineKeFuData = res.data;
      this.onLineKeFuCity = res.data.qiyu;
    //   console.log(this.onLineKeFuData);
    //   console.log(this.onLineKeFuCity);
    });
    getUserRecommends().then(res=>{
        this.userRecommends = res.data
        console.log(this.userRecommends)
    })
  },
  methods: {
    cityShow() {
      this.show = true;
    },
    cityHide() {
      this.show = false;
    }
  }
};
</script>


<style lang="less" scoped>
@import "~style/index.less";
.mUserCenter {
  background-color: #eee;
  .mUserCenterHeader {
    position: relative;
    padding-left: 0.3rem;
    padding-top: 0.63rem;
    .h(110);
    background: #fff url("https://m.youxiake.com/static/img/img1.a81f2d5.png")
      50% no-repeat;
    background-size: cover;
    .header__box {
      display: flex;
      align-items: center;
      .header__avatar {
        margin-right: 0.25rem;
        .w(60);
        .h(60);
        border-radius: 50%;
        background: #aaa
          url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB3CAMAAAD/7HQ1AAABTVBMV…xUXV83T4oZUPCiRaJbsEwGtwwojR8WuYwv73evV3kQtt+dX+3CAIy0qNlKAAAAAElFTkSuQmCC")
          50% no-repeat;
        background-size: cover;
      }
      .header__login {
        position: relative;
        font-size: 22px;
        font-weight: 700;
        color: #000;
        span {
          position: absolute;
          left: 0;
          .b(-35);
          .w(165);
          .h(25);
          .lh(25);
          text-align: center;
          font-size: 12px;
          color: #fff;
          border-radius: 0.25rem;
          background: linear-gradient(90deg, #ff6000, #ffa32c);
        }
      }
    }
  }
  .mUserCenterOrders {
    padding: 0.4rem 0.2rem 0.4rem 0.3rem;
    background: #fff;
    .mUserCenterOrders__head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      b {
        font-size: 16px;
        color: #000;
      }
      span {
        font-size: 14px;
        color: #333;
      }
    }
    .mUserCenterOrders__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .mUserCenterOrders__box {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        .mtop(20);
        div {
          position: relative;
          .w(32);
          .h(32);
          border-radius: 50%;
          svg {
            font-size: 30px;
          }
        }
        span {
          .mtop(15);
          font-size: 13px;
          color: #333;
        }
      }
    }
  }
  .mUserCenterWallet {
    .mtop(10);
    padding: 0 0.2rem 0 0.3rem;
    background: #fff;
    .mUserCenterWallet__head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .h(44);
      font-size: 16px;
      font-weight: 700;
      color: #000;
    }
  }
  .mUserCenterService {
    .mtop(10);
    padding: 0.4rem 0.2rem 0 0.3rem;
    background: #fff;
    .mUserCenterService__head {
      font-size: 16px;
      font-weight: 700;
      color: #000;
    }
    .mUserCenterService__container {
      .mtop(20);
      .mUserCenterService_row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .pbottom(20);
        a {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 21%;
          color: #333;
          i {
            font-size: 26px;
            font-weight: 700;
          }
          span {
            .mtop(10);
            font-size: 12px;
            color: #333;
          }
        }
      }
    }
    .mCustomerService {
      //   display: none;
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      z-index: 9999;
      .mCustomerService__container {
        position: absolute;
        left: 0;
        bottom: 0;
        flex-direction: column;
        width: 100%;
        background: #fff;
        .container__header {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0.3rem 0;
          font-size: 13px;
          color: #fcbc00;
          span {
            margin: 0.2rem;
            .w(25);
            .h(1);
            background: #fcbc00;
          }
        }
        .container__body {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          .w(345);
          .p(10);
          .body__list {
            margin-bottom: 0.2rem;
            .w(165);
            .h(31);
            .lh(31);
            text-align: center;
            font-size: 14px;
            color: #666;
            box-sizing: border-box;
            border: 1px solid #bbb;
            border-radius: 0.05rem;
          }
        }
        .container__title {
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: 700;
          .mtop(10);
          .mbottom(12);
          font-size: 13px;
          color: #fcbc00;
          span {
            margin: 0.2rem;
            .w(25);
            .h(1);
            background: #fcbc00;
          }
        }
        .container__footer {
          position: relative;
          width: 100%;
          .h(115);
          background: url("https://m.youxiake.com/static/img/img3.fb1498c.png")
            0.3rem top no-repeat;
          background-size: 1.49rem 1.48rem;
          .footer__phone {
            margin-left: 2rem;
            display: flex;
            align-items: center;
            font-size: 18px;
            color: #333;
            i {
              display: inline-block;
              margin-left: 0.25rem;
              .w(25);
              .h(25);
              background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAIAAABKGoy8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplODlmNmFmNC03NzY4LWZlNDEtOTBkMi0yZDQ5N2NhMjc0ZTciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzYxM0MxMDYwQTUwMTFFOUEyRjlGRDU0RTBGNkE2NTMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzYxM0MxMDUwQTUwMTFFOUEyRjlGRDU0RTBGNkE2NTMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YzA2ZWNiOTItZWY0Yi0yMTRlLWEyYTYtYzcyNDkxNzc4NGZmIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmU4OWY2YWY0LTc3NjgtZmU0MS05MGQyLTJkNDk3Y2EyNzRlNyIv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")
                50% no-repeat;
              background-size: 0.5rem 0.5rem;
            }
          }
          .footer__text {
            margin-left: 2rem;
            margin-top: 0.1rem;
            font-size: 12px;
            color: #999;
          }
          .footer__date {
            margin-left: 2rem;
            margin-top: 0.05rem;
            font-size: 12px;
            color: #333;
          }
        }
        .container__cancel {
          width: 100%;
          .h(46);
          .lh(46);
          text-align: center;
          font-size: 16px;
          color: #666;
          border-top: 1px solid #eee;
        }
      }
    }
  }
  .mUserCenterRecommend {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    .mbottom(50);
    .mUserCenterRecommend__head {
      justify-content: center;
      .h(26);
      font-size: 16px;
      font-weight: 700;
      color: #000;
      .mtop(20);
    }
    .mUserCenterRecommend__head:before {
      content: "";
      display: inline-block;
      margin-right: 0.1rem;
      .w(23);
      .h(14);
      background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAcCAYAAAAeC42RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplODlmNmFmNC03NzY4LWZlNDEtOTBkMi0yZDQ5N2NhMjc0ZTciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NEZFODgxM0M5N0JCMTFFOTlGNUZCQ0EyRDdDREU4ODgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NEZFODgxM0I5N0JCMTFFOTlGNUZCQ0EyRDdDREU4ODgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDU1RENCNDlCQTk3RTkxMUI0NjZFNEVENzE2NzY1QzUiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo1MWEzMTZmNi04ZWQ4LWM4NGMtYTY3Mi00ODdiNWMxNThkYjYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz60XzrGAAADXUlEQVR42syYy2oUQRSGT9X0wp1PoEhWgkshIy4EF+oDZCMaRBFEBUFExMuEkYyCvoYiQTcuhOAEQXCjMgtFgqgEiQsfYBZm5XT5V1dV16270z3TwhScrgudyld/nzpVZ5hYWiLiPLZOJ267Y64xpkwWU4flwksi8Rc2IUp1bfq5pU6d7sFf3UZjGfUC7BdsDfYQ9ieh+Sx7IcA66qMkZDd7HIDdgZ2EHUvmFHoI1q76goY7X8BhWC+ZO2jiQwB2iQFSaGLmcmePs8l8QUNpppUWLrCW3S5gXzJXSjMonaksIY3ipm1elYFAbPMW/qnc9V9hCAe0CTs9HTSH0jJC6ShFzIlWTI9z/RnY01kVvwdVHuQ9xg6hv4Ya8YxeNFKatLokQyFXKpNW3ff3j3g+5jNDCz2pcCYXol84HkWPjlI6U9IozR11g5rxEdqnMLCTtKJ0WBg76PUvvnJ81EBDaSGjB1lV813pKp2aTTnC8AkMjGUnaR1ala3qOK1DHoWwZN0ih5aKC0ALQE/GZpLkP0CTPpZVuTR01dY+TV0L58K66ueLiqCbgvcwwaDGe324ypOsdflNttdipZnahHmwLmirhRRCNwFX0GmqLlXV0KtZ68pbX+nMpxl8Oo3VDVVXroONCJ8WMXRdcF/pcngLffVdCL2BORb9DVimeragEd4FdDoug0qmUjqGt9DX3sfQRIvFG7BIdQbotFTpOuDVStu+hb4+CjfiBmAWfdhK/5YTVCq9G3gPYIPIJWL4PpILBX3jc3giKugw5JWrruP0ZFxn0yWVShf5c5HSN7+UQ5tY7B7dzF2IDnk1lS4Dj0NeMbxV+tZmeDUFtPRp4wE8iM35Bmzk01Xg5XHah7dK+wU5In9tlRb+KZiPeZeoxkqH4LsfLgreh777zbnty8SWjihBWTk0cRunSw6XuuDLtU9EokBpL6M/Z7N8EWQwps2djTg9tAIXYqXmMe5Dr2yF4PvzFCtPcllRNjMztJJAiIXo7uxbgdKGzLPfXsZCPMhgMoNPM0DTTND629GPxtD3t4vmemZzQncBzCQDMgloBdoovpqHp1pKlxZ53f3kfQ0L/wHt1qCN4s8BeSZLeAWIhfgOO98QWpYd+QsT7JH+uUwC/wTwAHa8TWhZ/gkwAA5lJ4yt5mk7AAAAAElFTkSuQmCC")
        50% no-repeat;
      background-size: cover;
    }
    .mUserCenterRecommend__head:after {
      content: "";
      display: inline-block;
      margin-left: 0.1rem;
      .w(23);
      .h(14);
      background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAcCAYAAADxyeavAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplODlmNmFmNC03NzY4LWZlNDEtOTBkMi0yZDQ5N2NhMjc0ZTciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjRENTlGMTU5N0JCMTFFOUI3QjNCMkVGRjE3QTJEMjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjRENTlGMTQ5N0JCMTFFOUI3QjNCMkVGRjE3QTJEMjEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDU1RENCNDlCQTk3RTkxMUI0NjZFNEVENzE2NzY1QzUiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo1MWEzMTZmNi04ZWQ4LWM4NGMtYTY3Mi00ODdiNWMxNThkYjYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7VRpuiAAADeklEQVR42syYwW7TQBCGZ4wP3HgCEOoJCSQOlZK0VKBKUHrijKBCPAaIoEgNleA1QAjBlbZQngDUAxeEBEIIDjxADvREvfy73vXu2LtO0uSQlSa7dmL7m98zY0/41v4xkSJjys5iXahqHf1eG9ntMeNd5xJ++A+GaxZ2dtuVFcFcnMZhD7DYwrwE+w17BduB/c1pcccZYt7HvFoKZD7Owx7CNmBX8wUGPwBv12yxv8N2sQzr5wsJTtkBILvEyscjh+zm426+eOBQnK3iKoS28nsnzuYLpzhDcVcNOKgMZu1+ynr7VzaHi+pK8BWGEkFfYLdPDp5BcSCxNraQHKztd0Z+fjGr8o9gT4wWbES6aEsZ6hy9mVrxqvbqMpmVaru6LOP/Ez6fZTODs9/Bfj1o1Pju5URVOVUqbhR1imeByrWZs0Osb2LHUT4zuJKlzN6BC5OVQyiudFUhr26VqaHihUvUQ+y+gR0jvZGfFNxCUsKBH+EB+93lINkCcHKhEgKTD5EKXCuvAK4AfjxyJ8lnUbzFgZ3xMU5dDxgCh3ehcqwBPi18H7BDRRI04sAA8/NK9ZVOmb4NxdnmtTs4si6diYJPA9/HSYYVbNoBDb5dga+uhOFiY5wR40VT5br6ZRghORHjqgk+KXwFLmCbDgxUCH5lrQ7+AWAdmZQp9Y1Th/gtwItRCiwfD85DBpXiiNokQsWDr11rghN14kkZU58BXiQVnwS+DxuWt5CpxYEa+LoEJ4AzFBfArfGOUGlXfBy8B69ejqIO6IdRECrX61WlBK+Xw7T6to4fjyZJxDwV4+58LQ4I8L3VFnBXq8PHPJNsxUxyTqZ4Cl4kZ4sDAxWCr9TBGeA6xt1xWa12B73jFDHeBl/W8RpsxAER43s9AY6eM3vvFVfyaVntEy9eUyteh5d1PO2AAK+/jZXNMvVKYTkNTpmv44kH0KTwW9E63nRA1HE9dnsbQatjxj3vkKp1Qm6dBcl5cnAH/1g0uXEHRHImVNfjnC9H7liOdUUzgxsZcP0lCrqrcLZsUfDd3qbraEL7Izof934uuyLEOAOcZgK395C+CwGlA3HF0+Ol7zFDJ9g1FLqRmAu4g99uRMAY8LfdzdT5dEv42Z9EOPAR67mBO/jXsDu6icZ1dFB+g92fUnE3jvQ/WbCn9q85Df1Tvx/B1ucJrsd/AQYAIkYadQdDUtwAAAAASUVORK5CYII=")
        50% no-repeat;
      background-size: cover;
    }
    .mUserCenterRecommend__body {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      .w(345);
      .mUserCenterRecommend__line {
        display: flex;
        flex-direction: column;
        .w(167.5);
        .h(184.5);
        overflow: hidden;
        .line__pic {
          position: relative;
          .w(167.5);
          .h(94);
          border-radius: 0.07rem;
          background: #fff9db 50% no-repeat;
          background-size: cover;
          .line__type {
            position: absolute;
            left: 0;
            top: 0.12rem;
            padding-left: 0.1rem;
            padding-right: 0.2rem;
            .h(16);
            .lh(16);
            font-size: 11px;
            color: #fff;
            border-radius: 0 0.16rem 0.16rem 0;
            background: rgba(0, 0, 0, 0.6);
          }
        }
        .line__title {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          margin-top: 0.1rem;
          padding: 0 0.1rem;
          .h(34);
          .lh(17);
          font-size: 14px;
          color: #333;
          overflow: hidden;
        }
        .line__msg {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-top: 0.2rem;
          padding: 0 0.1rem;
          .w(167.5);
          .line__price {
            display: flex;
            align-items: baseline;
            font-size: 12px;
            color: #999;
            span {
              font-size: 12px;
              color: #ff7100;
            }
            b {
              font-size: 12px;
              color: #ff7100;
            }
          }
          .line__days {
            padding: 0.03rem 0.1rem;
            font-size: 12px;
            color: #999;
            background: #eee;
          }
        }
      }
    }
  }
}
</style>