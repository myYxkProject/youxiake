<template>
  <div class="mNewIndex">
    <MBottomNav></MBottomNav>
    <MDownLoadApp></MDownLoadApp>
    <MIndexBanner :slides='banners'></MIndexBanner>
    <MIndexMainNav></MIndexMainNav>
    <MIndexSecondNav></MIndexSecondNav>
    <MIndexWeekAndLocal :wl='weekLocal'></MIndexWeekAndLocal>
  </div>
</template>

<script>
import MBottomNav from "components/mBottomNav/mBottomNav";
import MDownLoadApp from "components/mDownLoadApp/mDownLoadApp"; 
import MIndexBanner from "components/mIndexBanner/mIndexBanner";
import {getHomeData} from 'api/home.js';
import MIndexMainNav from 'components/mIndexMainNav/mIndexMainNav';
import MIndexSecondNav from 'components/mIndexSecondNav/mIndexSecondNav';
import MIndexWeekAndLocal from 'components/mIndexWeekAndLocal/mIndexWeekAndLocal';

export default {
  name: "mNewIndex",
  components: { MBottomNav, MDownLoadApp ,MIndexBanner,MIndexMainNav,MIndexSecondNav,MIndexWeekAndLocal},
  data(){
    return{
      banners:[],
      weekLocal:{}
    }
  },
  created(){
    getHomeData().then((res)=>{
      this.banners = res.data.data.flashImageList
      this.weekLocal = res.data.data.aroundLump
      console.log(this.banners)
      console.log(this.weekLocal)
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
