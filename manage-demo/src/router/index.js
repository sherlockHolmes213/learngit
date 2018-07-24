import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home' 
import HomeTwo from '@/components/homeTwo' 
import TopNav from '@/components/topNav'  //顶部导航
import LeftNav from '@/components/leftNav'  //左侧导航
import Login from '@/components/login'  //登录页
import HomeOne from '@/view/pages/home/homeOne'  //主页分级
import MySet from '@/view/pages/mySet/mySet'  //我的设置
import MySetOne from '@/view/pages/mySet/mySetOne'  //我的设置
import MySetSecond from '@/view/pages/mySet/mySetSecond'  //我的设置
import MyRule from '@/view/pages/MyRule/MyRule'  //我的规则


Vue.use(Router)

export default new Router({
  //顶部导航
  topRoutes:[
    {
      path:'/',
      name:'首页',
    },
    {
      path:'/mySet',
      name:'我的设置',
    },
    {
      path:'/myRule',
      name:'我的规则'
    }
  ],
  // routes: [
  //   {
  //     path:'/',
  //     name:'首页',
  //     component:Home,
  //     children:[
  //       {
  //         path:'/',
  //         name:'首页',
  //         components:{
  //           default:HomeOne,
  //         },
  //         children:[]
  //       }
  //     ]
  //   },
  //   {
  //     path:'/mySet',
  //     name:'我的配置',
  //     component:Home,
  //     children:[
  //       {
  //         path:'/mySet',
  //         name:'我的配置',
  //         components:{
  //           default:MySetOne,
  //         },
  //       },
  //       {
  //         path:'/mySetTwo',
  //         name:'我的配置2',
  //         components:{
  //           default:MySetSecond,
  //         },
  //         children:[]
  //       }
  //     ]
  //   },
  //   {
  //     path:'/myRule',
  //     name:'我的规则',
  //     component:Home,
  //     children:[
        
  //     ],
  //   }
  // ]
  routes: [
    {
      path:'/login',
      name:'登录',
      component:Login
    },
    {
      path:'/',
      name:'首页',
      component:Home,
      meta:{
        arequiresAuth:true,
      },
      children:[
        {
          path:'/',
          name:'首页',
          meta:{
            arequiresAuth:true,
          },
          components:{
            default:HomeOne,
          },
          children:[]
        },
        {
          path:'/mySet',
          name:'我的配置',
          component:HomeTwo,
          children:[
            {
              path:'/mySet',
              name:'我的配置',
              components:{
                default:MySetOne,
              },
            },
            {
              path:'/mySetTwo',
              name:'我的配置2',
              components:{
                default:MySetSecond,
              },
              children:[]
            }
          ]
        },
        {
          path:'/myRule',
          name:'我的规则',
          components:{
            default:MyRule,
          },
          children:[]
        }
      ]
    },
  ]
})
