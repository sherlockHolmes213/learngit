<template>
  <div class="leftNav">
    <el-row class="tac">
      <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group> -->
      <el-col :span="24">
        <el-menu
          ref="leftNav"
          class="el-menu-vertical"
          @open="handleOpen"
          @close="handleClose"
          @select="handleClick"
          :collapse="isCollapse"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu v-for="(item,index) in LeftNavList" :key="index" :index="item.name" v-if='item.children.length>0'>
            <template slot="title"  >
                <i class="el-icon-setting"></i>
                <span>{{item.name}}</span>
            </template>
            <el-menu-item-group v-if="item.children.length>0">
                <el-menu-item  v-for="(child,childIndex) in item.children" :key="childIndex" :index="child.path">{{child.name}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item v-else :index="item.path">
            <i class="el-icon-menu"></i>
            <span slot="title">{{item.name}}</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'leftNav',
  data () {
    return {
      LeftNavList: [],
      isCollapse:false
    }
  },
  methods:{
      initLeftNav:function(){
          let routers = this.$router.options.routes[1]; // 获取路由对象
          let _this = this 
           _this.LeftNavList =[]
          routers.children.forEach(function(value,index){
              if(value.path == _this.$store.state.topNavState){
                _this.LeftNavList.push(value)
              }
          })
      },
      handleClick(key,keyPath){
        console.log("key:" + key) 
        console.log("keyPath:" + keyPath)
        this.$router.push({ path: key })
      },
      //二级菜单展开
      handleOpen(){
          console.log("二级菜单展开")
      },
      //二级菜单关闭
      handleClose(){
          console.log("二级菜单关闭")
      }
  },
  created(){
      this.initLeftNav()
      console.log("left")
  },
  watch:{
      '$store.state.topNavState':function(){
          console.log("改变")
          this.initLeftNav()
      }
  },
  mounted(){
    this.$refs.leftNav.$el.style.height = window.innerHeight-60 + 'px'
  }
}
</script>
<style>
  .leftNav{
    height: 100%
  }
  .el-submenu .el-menu-item{
    min-width: auto;
  }
</style>


