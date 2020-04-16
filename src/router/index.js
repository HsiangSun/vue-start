import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  
  {
    path:'',
    redirect:Home,
    meta:{
      title:'首页'
    }
  },
  {
    path: '/home',
    name: 'Home',
    meta:{
      title:'首页'
    },
    component: Home, //redirect
    children:[
      {
        path: 'news', //注意没有斜杠!!!
        //name: 'HomeNews',
        component: () => import('../views/HomeNews.vue')
      },
      {
        path: 'sport', //注意没有斜杠!!!
        //name: 'HomeNews',
        component: () => import('../views/HomeSport.vue')
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta:{
      title:'关于'
    }
  },
  {
    path: '/test',
    name: 'Test',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Test.vue')
  },
  {
    path: '/user/:name',
    name: 'User',
    component: () => import('../views/User.vue'),
    meta:{
      title:'用户'
    }
  }
]

const router = new VueRouter({
  mode: 'history', //两种模式history和hash 
  base: process.env.BASE_URL,
  routes,
  linkActiveClass:'actived'//当前路由选中后添加的class
})

//全局导航守卫设置网页标题
router.beforeEach((to,form,next)=>{
    document.title = to.matched[0].meta.title;
    next();
});

export default router
