<template>
  <div class="mSearch__new">
    <div class="mSearch__new__title">
      <h3>新品推荐</h3>
    </div>
    <div class="mSearch__new__lists">
      <div class="mSearch__new__list">
        <a href>
          <img
            src="http://gallery.youxiake.com/Public/Data/upload/productimg/201912/16/5df6e977b78b6.jpg?imageslim"
          />
          <div class="mSearch__new__tag">
            跟团游
            <span></span>
            杭州/扬州出发
          </div>
          <h3>[轻奢·扬州]2-6人VIP精品小团，寻迹江南四大名城之一的扬州，住进古式青砖墙行馆，穿越时空般在这座中式城堡里体验古淮扬度假风</h3>
          <div class="mSearch__new__price">
            <div class="price">
              <span>
                ￥
                <em>880</em>
              </span>起
            </div>
            <div class="day">2天1晚</div>
          </div>
        </a>
      </div>
      <div class="mSearch__new__list">
        <a href>
          <img
            src="http://gallery.youxiake.com/Public/Data/upload/productimg/201912/16/5df6e977b78b6.jpg?imageslim"
          />
          <div class="mSearch__new__tag">
            跟团游
            <span></span>
            杭州/扬州出发
          </div>
          <h3>[轻奢·扬州]2-6人VIP精品小团，寻迹江南四大名城之一的扬州，住进古式青砖墙行馆，穿越时空般在这座中式城堡里体验古淮扬度假风</h3>
          <div class="mSearch__new__price">
            <div class="price">
              <span>
                ￥
                <em>880</em>
              </span>起
            </div>
            <div class="day">2天1晚</div>
          </div>
        </a>
      </div>
      <div class="mSearch__new__list">
        <a href>
          <img
            src="http://gallery.youxiake.com/Public/Data/upload/productimg/201912/16/5df6e977b78b6.jpg?imageslim"
          />
          <div class="mSearch__new__tag">
            跟团游
            <span></span>
            杭州/扬州出发
          </div>
          <h3>[轻奢·扬州]2-6人VIP精品小团，寻迹江南四大名城之一的扬州，住进古式青砖墙行馆，穿越时空般在这座中式城堡里体验古淮扬度假风</h3>
          <div class="mSearch__new__price">
            <div class="price">
              <span>
                ￥
                <em>880</em>
              </span>起
            </div>
            <div class="day">2天1晚</div>
          </div>
        </a>
      </div>
      <div class="mSearch__new__list">
        <a href>
          <img
            src="http://gallery.youxiake.com/Public/Data/upload/productimg/201912/16/5df6e977b78b6.jpg?imageslim"
          />
          <div class="mSearch__new__tag">
            跟团游
            <span></span>
            杭州/扬州出发
          </div>
          <h3>[轻奢·扬州]2-6人VIP精品小团，寻迹江南四大名城之一的扬州，住进古式青砖墙行馆，穿越时空般在这座中式城堡里体验古淮扬度假风</h3>
          <div class="mSearch__new__price">
            <div class="price">
              <span>
                ￥
                <em>880</em>
              </span>起
            </div>
            <div class="day">2天1晚</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "~style/index.less";
.mSearch__new {
  margin: 12.5px 15px 0;
  .mSearch__new__title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      color: #999;
      font-size: 14px;
      font-weight: 400;
    }
  }
  .mSearch__new__lists {
    .mtop(12);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    .mSearch__new__list {
      .w(167.5);
      position: relative;
      .mbottom(22);
      a {
        img {
          width: 100%;
          .h(94);
          border-radius: 4px;
          background: #fffae5;
        }
        .mSearch__new__tag {
          position: absolute;
          left: 0;
          top: 6px;
          max-width: 100%;
          box-sizing: border-box;
          padding: 0 9.5px 0 3.5px;
          .h(16);
          background: rgba(0, 0, 0, 0.6);
          border-radius: 0 8px 8px 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          color: #fff;
          span {
            .w(1);
            .h(10);
            background: #fff;
            display: block;
            margin: 0 5px;
          }
        }
        h3 {
          font-size: 14px;
          .h(37);
          .lh(20);
          color: #333;
          overflow: hidden;
          text-overflow: ellipsis;
          font-weight: 400;
        }
        .mSearch__new__price {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
          color: #999;
          .mtop(8);
          .price {
            color: #999;
            span {
              color: #ff7100;
            }
            em {
              font-size: 15px;
              font-weight: 700;
              font-style: normal;
              color: #ff7100;
            }
          }
        }
      }
    }
  }
}
</style>