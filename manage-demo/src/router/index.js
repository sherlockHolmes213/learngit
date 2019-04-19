import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home' 
import HomeTwo from '@/components/homeTwo' 
import TopNav from '@/components/topNav'  //顶部导航
import LeftNav from '@/components/leftNav'  //左侧导航
import Login from '@/components/login'  //登录页
import SignUp from '@/components/signUp'  //注册页
import HomeOne from '@/view/pages/home/homeOne'  //主页分级
import MySet from '@/view/pages/mySet/mySet'  //我的设置
import MySetOne from '@/view/pages/mySet/mySetOne'  //我的设置
import MySetSecond from '@/view/pages/mySet/mySetSecond'  //我的设置
import MyRule from '@/view/pages/rule/MyRule'  //我的规则
import WebSocket from '@/view/pages/home/WebSocket'  // websocket

//视图
//告警视图
import AlarmTreeSpacity from '@/view/pages/show/alarmShow/alarmTreeSpacity' //专业告警树
import AlarmTreeArea from '@/view/pages/show/alarmShow/alarmTreeArea' //区域告警树
import AlarmList from '@/view/pages/show/alarmShow/alarmList' //告警列表
import AlarmShowManager from '@/view/pages/show/alarmShow/alarmShowManager' //告警管理


//规则
//抑制派单
import OrderAdd from '@/view/pages/rule/orders/orderAdd' //派单添加
import OrderHistory from '@/view/pages/rule/orders/orderHistory' //规则历史
import OrderApprove from '@/view/pages/rule/orders/orderApprove' //规则审批
import OrderList from '@/view/pages/rule/orders/orderList' //规则列表


Vue.use(Router)

export default new Router({
  //顶部导航
  topRoutes:[
    {
      path:'/',
      name:'首页',
    },
    {
      path:'/show',
      name:'视图',
    },
    {
      path:'/rule',
      name:'规则'
    },
    {
      path:'/orders',
      name:'派单'
    },
    {
      path:'/resource',
      name:'资源'
    },
    {
      path:'/system',
      name:'系统'
    },
    {
      path:'/quality',
      name:'质量'
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
      path:'/signUp',
      name:'注册',
      component:SignUp
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
            default:WebSocket,
          },
          children:[]
        },
        {
          path:'/show',
          name:'告警视图',
          component:HomeTwo,
          children:[
            {
              path:'/alarmList',
              name:'告警列表',
              components:{
                default:AlarmList,
              },
            },
            {
              path:'/alarmTreeSpacity',
              name:'专业告警树',
              components:{
                default:AlarmTreeSpacity,
              },
              children:[]
            },
            {
              path:'/alarmTreeArea',
              name:'区域告警树',
              components:{
                default:AlarmTreeArea,
              },
              children:[]
            },
            {
              path:'/alarmShowManager',
              name:'告警视图管理',
              components:{
                default:AlarmShowManager,
              },
              children:[]
            }
          ]
        },
        {
          path:'/rule',
          name:'抑制派单',
          component:HomeTwo,
          children:[
            {
              path:'/orderAdd',
              name:'抑制派单添加',
              components:{
                default:OrderAdd,
              },
              children:[]
            },
            {
              path:'/orderList',
              name:'规则列表',
              components:{
                default:OrderList,
              },
              children:[]
            },
            {
              path:'/orderApprove',
              name:'规则审批',
              components:{
                default:OrderApprove,
              },
              children:[]
            },
            {
              path:'/orderHistory',
              name:'规则历史',
              components:{
                default:OrderHistory,
              },
              children:[]
            }
          ]
        },
        {
          path:'/rule',
          name:'工程预约',
          component:HomeTwo,
          children:[
            {
              path:'/orderAdd',
              name:'抑制派单添加',
              components:{
                default:MySetSecond,
              },
              children:[]
            }
          ]
        }
      ]
    },
  ]
})
