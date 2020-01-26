<template>
  <div class="mNewIndex">
    <!-- <MBottomNav></MBottomNav> -->
    <MDownLoadApp></MDownLoadApp>
    <MIndexBanner :slides="banners"></MIndexBanner>
    <MIndexMainNav></MIndexMainNav>
    <MIndexSecondNav></MIndexSecondNav>
    <MIndexWeekAndLocal :wl="weekLocal"></MIndexWeekAndLocal>
    <MIndexMuster
    :aB='activityBanner'
    :sP='saleProductList'
    :nP='newProduct'
    :kP='kingProduct'></MIndexMuster>
    <MIndexMinority :m='minority'></MIndexMinority>
  </div>
</template>

<script>
import MBottomNav from "components/mBottomNav/mBottomNav";
import MDownLoadApp from "components/mDownLoadApp/mDownLoadApp";
import MIndexBanner from "components/mIndexBanner/mIndexBanner";
import { getHomeData } from "api/home.js";
import MIndexMainNav from "components/mIndexMainNav/mIndexMainNav";
import MIndexSecondNav from "components/mIndexSecondNav/mIndexSecondNav";
import MIndexWeekAndLocal from "components/mIndexWeekAndLocal/mIndexWeekAndLocal";
import MIndexMuster from "components/mIndexMuster/mIndexMuster";
import MIndexMinority from "components/mIndexMinority/mIndexMinority";

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
    MIndexMinority
  },
  data() {
    return {
      banners: [],
      weekLocal: {},
      activityBanner: [],
      saleProductList: [],
      newProduct: {},
      kingProduct: {},
      minority:{}
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
      // console.log(this.banners);
      // console.log(this.weekLocal);
      console.log(this.kingProduct);
      console.log(this.newProduct);
      console.log(this.saleProductList);
      console.log(this.activityBanner);
    });
  }
};
</script>

<style lang="less" scoped>
@import "~style/index.less";
.mNewIndex {
  .w(375);
}
</style>
