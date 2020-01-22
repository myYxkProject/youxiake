<template>
  <div class="mNewIndex">
    <MBottomNav></MBottomNav>
    <MDownLoadApp></MDownLoadApp>
    <MIndexBanner :slides='banners'></MIndexBanner>
    <MIndexMainNav></MIndexMainNav>
    <MIndexSecondNav></MIndexSecondNav>
    <MIndexWeekAndLocal></MIndexWeekAndLocal>
  </div>
</template>

<script>
import MBottomNav from "components/mBottomNav/mBottomNav";
import MDownLoadApp from "components/mDownLoadApp/mDownLoadApp"; 
import MIndexBanner from "components/mIndexBanner/mIndexBanner";
import {getBanner} from 'api/home.js';
import MIndexMainNav from 'components/mIndexMainNav/mIndexMainNav';
import MIndexSecondNav from 'components/mIndexSecondNav/mIndexSecondNav';
import MIndexWeekAndLocal from 'components/mIndexWeekAndLocal/mIndexWeekAndLocal';

export default {
  name: "mNewIndex",
  components: { MBottomNav, MDownLoadApp ,MIndexBanner,MIndexMainNav,MIndexSecondNav,MIndexWeekAndLocal},
  data(){
    return{
      banners:[]
    }
  },
  created(){
    getBanner().then((res)=>{
      this.banners = res.data.data.flashImageList
      console.log(this.banners)
    })
  }
};
</script>

<style lang="less" scoped>
@import '~style/index.less';
.mNewIndex{
  .w(375);
}
</style>
