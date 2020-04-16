<template>
  <div class="home">
     <router-view/>
     <button @click="newsClick">新闻</button>
     <router-link :to="{path:'/home/sport',query:{category:'娱乐新闻',id:'54as122s'}}" >体育</router-link>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  created(){
    console.log("首页加载的时候默认打开新闻组件");
    
  },
  mounted(){
    //this.$router.push('/home/news');
  },
  destroyed(){
    console.log("destroyed......")
  },
  beforeRouteLeave (to, from, next) {
   console.log("路由离开"+this.$route.path);
   this.newsPath = this.$route.path;
   next();
  },
  activated(){
    console.log("首页被激活了");
    this.$router.push(this.newsPath).catch(err=>err);
  },
  components: {
    HelloWorld
  },
  data(){
    return{
      newsPath:'/home/news'
    }
  },
  methods:{
    newsClick(){
      console.log(new Date());
      
      this.$router.push({
        path:'/home/news',
        query:{
          date: new Date(),
          content: '新冠病毒结束了!'
        }
      })
    }
  }
}
</script>
