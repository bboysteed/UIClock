import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from "@/components/HelloWorld";
import personPage from "@/components/personPage";
// import HelloWorld from "@/components/HelloWorld";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    // redirect:'/HelloWorld',
    component: HelloWorld
  },
  {
    path: '/personPage',
    name: 'personPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: personPage,
    children: [
      {
        path: 'clockSetting',
        component: () => import('@/components/clockSetting')
      },
      {
        path: 'personInfo',
        component: () => import('@/components/personInfo')
      },
      {
        path: 'mainPage',
        component: () => import('@/components/mainPage')
      }

    ]
  }
]
const router = new VueRouter({
  routes
})

export default router
