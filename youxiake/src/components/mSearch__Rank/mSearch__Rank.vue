<template>
  <div class="mSearch__Rank">
    <div class="mSearch__Rank__title">
      <h3>搜索排行</h3>
    </div>
    <div class="mSearch__Rank__lists">
      <div class="mSearch__Rank__list" v-for="(item,index) in hotSerach" :key="index">
        <a href>
          <span class="index">{{index+1}}</span>
          <span class="tit">{{item.title}}</span>
          <span class="hot" v-if="index<3"></span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { getSearchData } from "api/search.js";
export default {
  data() {
    return {
        hotSerach:[]
    };
  },
  mounted() {
      getSearchData().then(res=>{
          this.hotSerach = res.data.hotSerach
          console.log(this.hotSerach)
      })
  }
};
</script>


<style lang="less" scoped>
@import "~style/index.less";
.mSearch__Rank {
  .pbottom(4);
  border-bottom: 0.5px solid #eee;
  margin: 12.5px 15px 0;
  .mSearch__Rank__title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      color: #999;
      font-size: 14px;
      font-weight: 400;
    }
  }
  .mSearch__Rank__lists {
    .mtop(12.5);
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    .h(120);
    .mSearch__Rank__list {
      .w(162);
      font-size: 14px;
      color: #333;
      .mbottom(11);
      a {
        display: flex;
        align-items: center;
        color: #333;
        .index {
          .w(12);
          text-align: right;
        }
        .tit {
          .mleft(8.5);
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
        .hot {
          background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAbCAMAAABP9I/XAAABuVBMVEVHcEz/Ly//MDD/AAD/AAD/MDD/JCT/Ly//AAD/AAD/MDD/MDD/KSn/Ly//AAD/ICD/MDD/Li7/Kyv/MDD/Kyv/MDD/Kyv/Li7/LCz/Jyf/Ly//Li7/CQn/Ly//Li7/LS3/JSX/Ly//Li7/Li7/Li7/MzP/Ly//KSn/Ly//MDD/Ly//LS3/MzP/Li7/Kyv/Li7/LCz/MTH/MDD/KSn/Li7/Kir/MTH/Ly//Ly//MDD/Kir/DAz/Ly//Ly//Kyv/Ly//Ly//Kyv/Ly//LS3/MTH/Ly//Ly//MDD/Li7/Ly//MDD/LS3/Ly//LS3/Kir/Ly//MDD/LS3/MDD/Ly//Ly//Ly//Ly//Ly//Ly//LS3/LCz/MDD/Ly//Jib/Jyf/Li7/Jyf/Li7/Li7/Ly//AAD/JSX/MDD/Ly//Ly//Kir/Kir/KSn/Li7/KSn/Ly//Li7/LS3/Ly//IiL/Jyf/LS3/LS3/MDD/Ly//LS3/Kir/Ly//MDD/LCz/MDD/MDD/Ly//KSn/MTH/MTH/Kyv/MDD/AAD/AAD/Li7/Li7/Ly//MDD/Li7/Ly//Ly//MDD/Ly//Ly//MDD/MDBO/Y69AAAAknRSTlMAw/YFAv4H/QEE+/os/gMI+ZES9Uf8QdZMGvLAG+maUCl+4cxTBboyUWD5rwrdNck0+9U+bzb8+F3JPBbUzI3t2quZT/GMV77L4vGS2zMY5ZZb9PfdRzzjtJmthuAUYbgNp6boCjDsqNAMKyVwH+fcjsgPJ0qTy4dmHt7zQHaa5l7nFVqmCQiozYLQWHJS49943NExqp8AAAEvSURBVCjPZdLVlsJADAbgoC1QlsVd191dWHd3d3d3d5c88Ra6pdD5b+ac7yIzSQaAj6xCBmTk5dU2JcmGuobKehXBTBVqJbli1RUGEaV6Q6zS2RIKEWsG5dEal5IRzyr2jc9EaZIlOT2kSE1vAs2rMjFBjVy2LbJ1O1dIlWql/hXd3tUNz1r4tqIcLa+4dbDncVzdsTw5WhJRxQqzv4u390+gsk1EFDVzizvnqH5m4PRQKrBxZHaJPd7e4cJJCUwZw8///oETKxL5egV/gOSAH46vSf79gMszQhUvn+A9UohZ8+AD37JGzPM3j7Aw5RZp8ZiLbd5VmxdbOd8UGiFdUGaOUiorTccN1uQU+u9vKc3kV9bZ3toWWoTZMdwzJHwWuqupsbmje0Ci77VzO/sDTKq1rPl6x44AAAAASUVORK5CYII=")
            no-repeat;
          background-size: 11px 13.5px;
          display: block;
          .w(11);
          .h(13.5);
          .mleft(7);
        }
      }
    }
    .mSearch__Rank__list:nth-child(-n + 3) {
      .index {
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAMAAADzapwJAAAC2VBMVEVHcEz/1x//1R7/1h//1h7/1h//1x//1h//1x7/1x//1R3/1h7/1x//1h7/1x//1h//1h7/1h//1h//1x7/1x7/1h7/1x7/1h7/1h//1x7/1h//1x7/1x7/1x//1x7/1x7/1h//1h7/1h7/1h7/1h//1h7/1h7/1h//1x7/1h//1R//1x//1x7/1h7/1R7/zAD/1x7/1x//1h//2yT/1x7/1x//1h3/1h7/1h//1R3/1h7/1h7/1x7/1h//1x//1x//1h7/1x//1x//1h//1x//1R7/1x//1h//1x//1h7/1h//1h//1x//2B7/1h3/1x7/1h7/1x//0h7/3yD/1R3/1h7/1x//1h7/1x//1h7/1h//1x//1x//1h7/1x//1x//1x//1x//1h7/1R3/1x7/1R7/1x7/1x7/1h7/1h3/1h//1R//1h//1h7/1h7/1R3/1R//2B7/1R//1x7/1hz/2Rz/1x//1yD/1x7/1h7/3SL/1Rz/1R7/1x//1h3/1h7/1R7/1h7/2B3/1x3/1x7/1R//1x7/2B//1x//1h//1h//1R//0xz/1h//1x//1h//1h//1x//1x7/1h//1B3/1x7/1x//1h//3RH/2B7/1QD/1x//1h//1h//2B3/1x7/1h7//wD/1x//1x//1Bv/1x//1h//1h7/1h//1x//1x3/0xb/1x7/2B//1x7/1x7/2B//1h//1hn/1x//1h7/1x//1h//1x7/2B//1R7/1x7/1x//2B//1x7//wD/zyD/1x7/1R7/6Bf/2B//1R7/1x//1x//2B3//wD/1h3/1x3/1B7/2B7/2B7/1h3/2B7/1Rr/1x3/1B//2B3/vwD/1x7/1R//1iD/1h//zBr/1h7/1x7/2R3/2hv/1Rz/2B7/1R7/2B7/1B7/qgD/1xv/1R3/1R//1h//2B7/2Rr/1SD/2h7/1xj/1Rz/1h//1x7/1x//1yD/1R6yjAHgAAAA83RSTlMA1IFkl6e3x6uLesnQuoWus5SmxLHCuI/ATLTKkth5n69dibycopt9f2p0bGVwZwWZvZ0HfsVYoYNhu8PkjlPeduqsxr6Hcq2loNbO5eJx0qnZEQhPb9GjpHeW282av57H34hoeG6YkYpQhI2VRURgSVRbX1E24SCq2w82XMyCwYCQNHLak4bPjM+1c0B8582218x7R9PtdQ+iBubc4WjL0wJa4C/dGeLn6EYX7Huy45vgH9Ww6dRm1zy6pkHbAxDBVQshbcanTgFXR01ciWk7HllBGgQzYlhrCl5tVzA3dlZVOwMTTlpjVihIRCBIUU05P0OB0nSTAAABzUlEQVQY02NgAIOb965r3tYpPH/hCgMC6GdmJGncT9U5Uyi55/BCmOhqTtXYdCWmFF294pMhq5qMIaLLZvILxedkZ6lraTMX2UnmVYPFZ8nzruNQVZM5yySnq5dvFjKlZ8kJoPA8Zxc2BVb5KFs+9enazDV2krk7LzMwzGCXFrWS4ghXk8mo4/JLtjTLLLh09zHDom3e7HFiW1g9WcRdTRxSdRQPns4tfcKwQTZMWlhZyilCRZDTgqtZ0/JiScGjlwwJ0Zs72SXERALMDRqTNCJDt9968PTjB4aNiYH+k4QNu9w9jAQ7siZ3a157VvLpNYPv8jle7dz1vCIV5gbpSg0poXrFL169ZeCZvThwQa2p4QR+IaOobL5erRvPi97nMbBuXb/Ui4dblFeAQzVWRgnop+T8d6UMzGtWzG2Z2g/0EzAIWIB+AgbBwzcMQTaONvYTebitrQSAfmrlZJLzO3dHn4Fh7bS+skrGGHYJUBCwiLeZOBy5CgyTYFNHH3ugn6yVBaB+UtwHCsJyxpW+exm9wX7yTBN3dauCBPgmUZ9EWf/5wCBw91DJcQuCRU9w5I5oxpijcWwKu1mO6yPF5n7FtF0JB45pnDoE4QMAwm+Sb+btLQQAAAAASUVORK5CYII=")
          0 bottom no-repeat;
        background-size: 0.22rem 0.22rem;
        display: block;
      }
      .tit {
        max-width: 120px;
      }
    }
    .mSearch__Rank__list:nth-child(-n + 4) {
      .mright(21);
    }
  }
}
</style>