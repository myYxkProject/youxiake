<template>
  <div class="mNewIndex">
    <MBottomNav></MBottomNav>
    <MDownLoadApp></MDownLoadApp>
    <MIndexBanner></MIndexBanner>
  </div>
</template>

<script>
import MBottomNav from "components/mBottomNav/mBottomNav";
import MDownLoadApp from "components/mDownLoadApp/mDownLoadApp"; 
import MIndexBanner from "components/mIndexBanner/mIndexBanner";

export default {
  name: "mNewIndex",
  components: { MBottomNav, MDownLoadApp ,MIndexBanner}
};
</script>
