// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//引入vuex
import Vuex from 'vuex'
Vue.use(Vuex)
import store from './store/store'


//引入axios
import api from './fetch/api.js'
Vue.prototype.$api = api;
Vue.use(api)


Vue.config.productionTip = false


//登录验证
router.beforeEach((to, from, next) => {
  if(to.path == '/login'){
    next()
  }else{
    if(to.meta.arequiresAuth && sessionStorage.getItem('loginState')!=1){
      next({path:'/login'})
    }else{
      next()
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
