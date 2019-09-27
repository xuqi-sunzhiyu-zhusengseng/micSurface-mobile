<template>
  <div id="app">
    <div class="logo" v-if="logo">
      <div class="content">
        <img :src="logo" id="logo_imageUrl" />
      </div>
    </div>

    <router-view/>

  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
      return {
        logo:'',
      }
  },
  components:{
  },
  watch:{
    logo(){
        this.logo = this.activityAllMessage.activityInfo.Banner?this.activityAllMessage.activityInfo.Banner:''
    }
  },
  mounted(){
  },
  computed:{
  }
}
</script>

<style>

</style>
