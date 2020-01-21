<template>
  <div class="mNewIndex">
    <MBottomNav></MBottomNav>
    <MDownLoadApp></MDownLoadApp>
    <MIndexBanner :slides='banners'></MIndexBanner>
  </div>
</template>

<script>
import MBottomNav from "components/mBottomNav/mBottomNav";
import MDownLoadApp from "components/mDownLoadApp/mDownLoadApp"; 
import MIndexBanner from "components/mIndexBanner/mIndexBanner";
import {getBanner} from 'api/home.js';

export default {
  name: "mNewIndex",
  components: { MBottomNav, MDownLoadApp ,MIndexBanner},
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
