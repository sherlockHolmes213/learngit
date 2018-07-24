<template>
  <div class="login">
      <el-row class="loginModal">
          <el-col :span="8" :offset="8">
              <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="登录名" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="登录密码" prop="password">
                    <el-input v-model="ruleForm.password" type="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
          </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  name: 'mySetOne',
  data () {
    return {
      msg: 'Welcome to Your Vue.js mySetOne',
      ruleForm:{
          name:'',
          password:''
      },
      rules:{
          name:[
              {required:true,message:'请输入用户名',trigger: 'blur'},
              {min:5,max:12,message:'用户名格式不正确',trigger: 'blur'}
          ]
      }
    }
  },
  methods:{
      submitForm:function(name){
          this.$refs[name].validate((valid) => {
            if(valid){
                console.log('登录成功')
                sessionStorage.setItem('loginState','1')
                this.$router.push('/')
            }else{
                console.log('登录失败')
            }
          })
          
      }
  }
}
</script>
<style>
    .login{
        /* background: url('/static/bg.jpg'); */
        background-size:100% 100%;  
        height:100vh;
    }
    .loginModal{
        position: absolute;
        top:50%;
        left:50%;
        width:100%;
        transform:translate(-50%,-50%);
        text-align: center;
    }
</style>


