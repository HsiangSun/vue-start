<template>
  <div id="app">
    <div id="nav">
      <!-- router-link默认渲染成a标签 可以使用tag进行调整 -->
      <router-link to="/" tag="button" replace>Home</router-link> 
      <router-link to="/about" replace>About</router-link>
      <!-- 动态路由 -->
      <router-link :to="'/user/'+name" replace>User</router-link>
    </div>
    
    <!-- keep-alive 将会使组件创建后被缓存而不是每次离开后回来重新创建
      可以使用exclude 排除组件
     -->
    <keep-alive exclude="User,About">
      <router-view/>
    </keep-alive>

  </div>
</template>

<script>
export default {
  name:'App',
  
  data(){
        return{
            name:'jimmy'
        }
    }
}
</script>


<style lang="less">


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      //color: #42b983;
      color: red
    }
  }
}
</style>
