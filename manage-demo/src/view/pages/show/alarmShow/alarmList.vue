<template>
  <div class="alarmList">
      {{msg}}111    
  </div>
</template>

<script>
export default {
  name: 'alarmList',
  data () {
    return {
      msg: 'Welcome to Your Vue.js alarmList'
    }
  },
  methods:{
      getTableData(){
          debugger
          this.$api.get('')
      }
  },
  created(){
      this.getTableData()
  }
}
</script>

