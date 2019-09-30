<template>
    <div>
      <div class="Banner">
        <img class="js-banner" src="./images/banner.jpg">
        <!--动态显示标题与时间-->
        <div class="bannerContent">
          <p class="banner-title">201909291426号会议</p>
          <p class="banner-title">这里是活动补充说明~</p>
          <p class="banner-title">这里是活动日期活动日期</p>
        </div>
      </div>
      <div class="utilsLine"></div>
    </div>
</template>

<script>
    export default {
        props:{
            title:{
              type:String,
              default:'正在载入...'
            }
        },
        data () {
            return {}
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/stylus/variable.styl";
  .banner {
    position: relative;
  }
  .banner img {
    display: block;
    width: 100%;
    height: auto;
  }
  .bannerContent {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    top: 0;
    left: 0;
    color: #fff;
    padding: 20px;
    padding-top: 130px;
  }
  .banner-title {
    font-size: 32px;
    font-weight: bold;
    word-break: break-all;
    text-align: center;
  }
  .utilsLine {
    width: 100%;
    height: 16px;
    background: #fff;
  }
</style>
