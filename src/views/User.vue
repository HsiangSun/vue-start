<template>
  <div>
      <h2>用户界面</h2>
      <h2>当前用户名{{username}}</h2>
      <h2>当前用户名{{$route.params.name}}</h2>
  </div>
</template>

<script>
export default {
    name:'User',
    computed:{
        username(){
            //计算当前被选中路由的参数
            return this.$route.params.name;
        }
    },
    created(){
        console.log("组件被创建了")
    },
    destroyed(){
        console.log("组件被销毁了")
    }
}
</script>

<style>

</style>