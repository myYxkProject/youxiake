<template>
  <div class="mLoginNew">
    <div class="mLoginNewContent">
      <div class="mLoginNewContent__bottom__beforebox">
        <div class="mLoginNewContent__bottom__beforebox--top">
          <div class="mLoginNewContent__item">
            <div class="mLoginNewContent__item__title">
              <i class="mLoginNewContent__title__icon"></i>
              <span>手机号注册/登录</span>
            </div>
          </div>
          <div class="mLoginNewContent__item">
            <el-input v-model="phone" placeholder="请输入用户名"></el-input>
          </div>
          <div class="mLoginNewContent__item">
            <el-input type="passWord" v-model="verCode" placeholder="请输入密码"></el-input>
            <div class="mLoginNewContent__item__verifycode">
              <!-- <div class="mLoginNewVerifyCode">
                <button @click="getCode">获取验证码</button>
              </div>-->
            </div>
          </div>
          <div class="mLoginNewContent__item">
            <div class="mLoginNewContent__item__loginbtn">
              <el-button type="warning" class="wraning-btn" @click="login" :plain="true">
                <span>一键注册/登录</span>
              </el-button>
            </div>
          </div>
          <div class="mLoginNewContent__item">
            <div class="mLoginNew__changeLoginWay">
              <span class="mLoginNew__changeLoginWay__changeTelPlace">非大陆手机号登录</span>
              <span class="mLoginNew__changeLoginWay__changeWay">账号密码登录</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { UserLogin } from "api/user.js";
import { setItem } from "utils/webStorage.js";
export default {
  data() {
    return {
      phone: "",
      verCode: ""
    };
  },
  methods: {
    getCode() {
      // console.log(111);
    },
    login() {
      // console.log(222)
      let userName = this.phone;
      let passWord = this.verCode;
      console.log(userName, passWord);
      UserLogin(userName, passWord)
        .then(res => {
          console.log("res", res);
          this.$message({
            message: "恭喜你，登录成功",
            type: "success"
          });
          setItem('token',res.data.token)
          setItem('uid',res.data.uid)
          this.$router.push('/userCenter')
        })
        .catch(err => {
          console.log("err", err);
          this.$message.error('错了哦，请重新登录');
        });
    }
  }
};
</script>

<style lang="less" scoped>
@import "~style/index.less";
.mLoginNew {
  .mLoginNewContent {
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    position: fixed;
    background: #fff;
    background-size: auto;
    overflow: auto;
    height: 100%;
    .mLoginNewContent__bottom__beforebox {
      width: 100%;
      position: absolute;
      height: 100%;
      display: flex;
      flex-flow: column;
      align-items: center;
      .mLoginNewContent__bottom__beforebox--top {
        flex: 1;
        width: 100%;
        .mLoginNewContent__item {
          position: relative;
          margin-left: 0.5rem;
          margin-right: 0.5rem;
          .mbottom(10);
          .mLoginNewContent__item__title {
            margin-top: 0.16rem;
            text-align: center;
            .mLoginNewContent__title__icon {
              .w(77.5);
              .h(77.5);
              background-image: url("https://m.youxiake.com/static/img/titleicon.fdcacde.png");
              background-repeat: no-repeat;
              background-position: 50%;
              background-size: cover;
              display: block;
              margin: 0 auto;
            }
            span {
              font-family: PingFang SC;
              font-weight: 800;
              color: #333;
              opacity: 1;
              font-size: 16px;
              .h(23);
              display: block;
              margin: 0 auto;
            }
          }
          .mLoginNewContent__item__verifycode {
            .h(40);
            .w(100);
            position: absolute;
            .t(5);
            .r(10);
            .mLoginNewVerifyCode {
              width: 100%;
              height: 100%;
              border-radius: 0.3rem;
              overflow: hidden;
              button {
                width: 100%;
                height: 100%;
                background: none;
                color: #ecc927;
                font-size: 14px;
                text-align: right;
                font-family: PingFang SC;
                font-weight: 400;
                .lh(20);
                opacity: 1;
                border: none;
              }
            }
          }
          .mLoginNewContent__item__loginbtn {
            width: 100%;
            .h(44);
            border-radius: 0.1rem;
            margin-top: 0.36rem;
            .lh(44);
            opacity: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            background: rgba(254, 209, 1, 0.2);
            color: hsla(0, 0%, 9%, 0.2);
            .wraning-btn {
              width: 100%;
              span {
                font-size: 16px;
                font-family: PingFang SC;
                font-weight: 400;
              }
            }
          }
          .mLoginNew__changeLoginWay {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .h(19);
            margin-top: 0.24rem;
            .mLoginNew__changeLoginWay__changeTelPlace {
              font-size: 13px;
              font-family: PingFang SC;
              font-weight: 400;
              .lh(17);
              color: #aeaeae;
              opacity: 1;
            }
            .mLoginNew__changeLoginWay__changeWay {
              font-size: 13px;
              font-family: PingFang SC;
              font-weight: 400;
              .lh(17);
              color: #aeaeae;
              opacity: 1;
            }
          }
        }
      }
    }
  }
}
</style>