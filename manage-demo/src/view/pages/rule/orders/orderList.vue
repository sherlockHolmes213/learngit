<template>
  <div class="orderList">
      {{msg}}111    
  </div>
</template>

<script>
import url from '@/fetch/urls.js'
export default {
  name: 'orderList',
  data () {
    return {
      msg: 'Welcome to Your Vue.js orderList',
      inhibiUrl:url.inhibiUrl,
    }
  },
  methods:{
    getTableData(){
      debugger
      let resultData = {};
      resultData.pageNum = '1';
      resultData.pageSize = '10';
      resultData.context = "";
      this.$api.get(this.inhibiUrl + '/inhibitionRule/find',resultData,res=>{
        debugger
      })
    }
  },
  created(){
    this.getTableData()
  }
}
</script>

