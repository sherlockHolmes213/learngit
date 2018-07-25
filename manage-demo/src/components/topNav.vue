<template>
  <div class="topNav">
    <el-row>
      <el-col :span="3" class="logoImg">
        <img src="/static/logo.png" alt="">
      </el-col>
      <el-col :span="16">
          <el-menu class="el-menu-demo topNavBar" mode="horizontal" @select="handleSelect" background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"> 
            <el-menu-item v-for="(item,index) in routers" :index="item.path" :key="index">{{item.name}}</el-menu-item>
          </el-menu>
      </el-col>
      <el-col :span="5">
        <el-dropdown style="float:right" placement='bottom-start' @command="handleCommand">
          <span class="el-dropdown-link">
            <img src="/static/user.jpg" alt="" class="userImg"><i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="suerInfo">个人信息</el-dropdown-item>
            <el-dropdown-item command="loginOut">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'topNav',
  data () {
    return {
      routers:[],
    }
  },
  methods:{
    handleSelect(key, keyPath) {
      console.log("111",key)
      this.$store.state.topNavState = key
    },
    //初始化顶部导航
    initTopNav(){
      let cur_path = this.$route.path; //获取当前路由
      let routers = this.$router.options.topRoutes; // 获取路由对象
      this.routers = routers
    },
    loginOut(){
      sessionStorage.removeItem('loginState')
      this.$router.push('/login')
    },
    handleCommand(command){
      if(command=='loginOut'){
        this.loginOut()
      }
    }
  },
  created(){
    this.initTopNav()
  }
}
</script>
<style>
  .topNav{
    background-color:#545c64;
    color:#fff;
  }
  .topNav .logo{
    width: 200px;
    height: 60px;
    line-height: 60px;
    float: left;
  }
  .topNav .topNavBar{
    /* margin-left: 200px */
  }
  .userImg{
    height: 40px;
    border-radius: 50%;
    margin-top: 10px
  }
  .logoImg{
    text-align: center;
  }
  .logoImg img{
    height: 50px;
    margin-top: 5px
  }
  .el-menu--horizontal{
    border-bottom: 0
  }
</style>

