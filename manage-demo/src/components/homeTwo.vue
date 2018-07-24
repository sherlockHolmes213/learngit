<template>
  <div class="homeTwo">
    <el-row>
      <el-col :span="3">
        <div class="grid-content bg-purple">
        </div>
     </el-col>
      <el-col :span="18">
        <div class="grid-content bg-purple-light">
          <router-view/>
        </div>
     </el-col>
    </el-row>
    
    
  </div>
</template>

<script>
export default {
  name: 'homeTwo',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

