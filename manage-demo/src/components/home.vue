<template>
  <div class="home">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
            <!-- <router-view name="topNav" /> -->
            <topNav></topNav>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="3">
        <div class="grid-content bg-purple leftNav">
          <!-- <router-view name="leftNav"/> -->
          <leftNav></leftNav>
        </div>
     </el-col>
      <el-col :span="21" style="padding:15px">
        <div class="grid-content bg-purple-light">
          <router-view/>
        </div>
     </el-col>
    </el-row>
    
    
  </div>
</template>

<script>
import topNav from '@/components/topNav.vue'
import leftNav from '@/components/leftNav.vue'
export default {
  name: 'home',
  components:{
    topNav,
    leftNav
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style>
</style>


