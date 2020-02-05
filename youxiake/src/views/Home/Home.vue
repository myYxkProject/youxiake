<template>
  <div class="mNewIndex">
    <MBottomNav></MBottomNav>
    <MDownLoadApp></MDownLoadApp>
    <MIndexBanner :slides="banners"></MIndexBanner>
    <MIndexMainNav></MIndexMainNav>
    <MIndexSecondNav></MIndexSecondNav>
    <MIndexWeekAndLocal :wl="weekLocal"></MIndexWeekAndLocal>
    <MIndexMuster :aB="activityBanner" :sP="saleProductList" :nP="newProduct" :kP="kingProduct"></MIndexMuster>
    <MIndexMinority :m="minority"></MIndexMinority>
    <MIndexWaterfall
      :fT="flowTabList"
      :fR="flowRecommend"
      @changePage="toshow"
      :type="type"
      :ld="loading"
    ></MIndexWaterfall>
  </div>
</template>

<script>
import MBottomNav from "components/mBottomNav/mBottomNav";
import MDownLoadApp from "components/mDownLoadApp/mDownLoadApp";
import MIndexBanner from "components/mIndexBanner/mIndexBanner";
import { getHomeData, getFlowRecommend } from "api/home.js";
import MIndexMainNav from "components/mIndexMainNav/mIndexMainNav";
import MIndexSecondNav from "components/mIndexSecondNav/mIndexSecondNav";
import MIndexWeekAndLocal from "components/mIndexWeekAndLocal/mIndexWeekAndLocal";
import MIndexMuster from "components/mIndexMuster/mIndexMuster";
import MIndexMinority from "components/mIndexMinority/mIndexMinority";
import MIndexWaterfall from "components/mIndex__Waterfall/mIndex__Waterfall";

export default {
  name: "mNewIndex",
  components: {
    MBottomNav,
    MDownLoadApp,
    MIndexBanner,
    MIndexMainNav,
    MIndexSecondNav,
    MIndexWeekAndLocal,
    MIndexMuster,
    MIndexMinority,
    MIndexWaterfall
  },
  data() {
    return {
      banners: [],
      weekLocal: {},
      activityBanner: [],
      saleProductList: [],
      newProduct: {},
      kingProduct: {},
      minority: {},
      flowTabList: [],
      flowRecommend: [],
      type: 1,
      page: 1,
      cH: 0,
      totalPage: 0,
      loading: true
    };
  },
  created() {
    getHomeData().then(res => {
      this.banners = res.data.data.flashImageList;
      this.weekLocal = res.data.data.aroundLump;
      this.kingProduct = res.data.data.kingProduct;
      this.newProduct = res.data.data.newProduct;
      this.saleProductList = res.data.data.saleProductList;
      this.activityBanner = res.data.data.activityBanner;
      this.minority = res.data.data.minority;
      this.flowTabList = res.data.data.flowTabList;
      // console.log(this.flowTabList);
      // console.log(this.banners);
      // console.log(this.weekLocal);
      // console.log(this.kingProduct);
      // console.log(this.newProduct);
      // console.log(this.saleProductList);
      // console.log(this.activityBanner);
    });
    console.log(this.page);
    this.$nextTick(function() {
      window.addEventListener("scroll", this.onScroll);
    });
    // getFlowRecommend(this.type, this.page).then(res => {
    //   // console.log(res)
    //   console.log(this.page);
    //   this.flowRecommend = res.data.data.list;
    //   console.log(this.flowRecommend);
    // });
  },
  mounted() {
    getFlowRecommend(this.type, this.page).then(res => {
      // console.log(res)
      console.log(this.type);
      this.flowRecommend = res.data.data.list;
      this.totalPage = res.data.data.totalPage;
      console.log(this.totalPage);
      // console.log(this.flowRecommend);
    });
    this.cH = this.getClientHeight();
    // console.log(this.cH);
  },
  methods: {
    toshow(type) {
      console.log(type);
      this.type = type;
      getFlowRecommend(this.type, this.page).then(res => {
        // console.log(res)
        console.log(this.type);
        this.flowRecommend = res.data.data.list;
        console.log(this.flowRecommend);
      });
    },
    // 获取滚动条当前位置
    getScrollTop() {
      let scrollTop = 0;
      if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = Math.floor(document.documentElement.scrollTop);
      } else if (document.body) {
        scrollTop = Math.floor(document.body.scrollTop);
      }
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
      return clientHeight;
    },
    // 滚动事件触发下拉加载
    onScroll() {
      if (this.cH - this.getScrollTop() <= 10) {
        this.loading = false;
        if (this.page < this.totalPage) {
          this.page++;
          // this.loading = true;
          this.cH += this.getClientHeight();
          getFlowRecommend(this.type, this.page).then(res => {
            this.flowRecommend = this.flowRecommend.concat(res.data.data.list);
          });
        } else {
          this.loading = false;
        }
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "~style/index.less";
.mNewIndex {
  .w(375);
}
</style>
