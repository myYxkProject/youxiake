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
    <MIndexWaterfall :fT="flowTabList" :fR="flowRecommend" @changePage="toshow" :type="type"></MIndexWaterfall>
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
      page: 1
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
      console.log(this.flowRecommend);
    });
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
