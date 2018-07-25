<template>
  <div class="homeOne">
     <!-- 复写穿梭框 -->
    <el-row class="transBox" type="flex" align="middle">
      <el-col :span="5" class="transSourceBox">
        <div class="transBoxTitle">
          <input type="checkbox" @click="sourceAllChecked">{{sourceTitle}}

          <span style="float:right">{{source.length}}</span>
        </div>
        <div>
          <div class="transBoxSearch">
            <input type="text" placeholder="请输入关键字进行搜索">
          </div>
          <div class="transBoxContent">
            <ul>
              <li v-for="(item,index) in source" :key="item.id"><input type="checkbox" @click="setSourceCheckedData(item)" :checked='item.checked'>{{item.label}}</li>
            </ul>
          </div>
        </div>
        <div class="transBoxBottom">
          刷新
        </div>
      </el-col>
      <el-col :span="2" class="transBoxAction">
        <el-button @click="setSource">&lt;to left</el-button>
        <el-button @click="setTarget">to right&gt;</el-button>
      </el-col>
      <el-col :span="5" class="transBoxTarget">
        <div class="transBoxTitle">
          <input type="checkbox">{{targetTitle}}
          <span style="float:right">{{target.length}}</span>
        </div>
        <div>
          <div class="transBoxSearch">
            <input type="text" placeholder="请输入关键字进行搜索">
          </div>
          <div class="transBoxContent">
            <ul>
              <li v-for="(item,index) in target" :key="item.id"><input type="checkbox">{{item.label}}</li>
            </ul>
          </div>
        </div>
        <div class="transBoxBottom">
          刷新
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'homeOne',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      sourceTitle:"源数据",
      targetTitle:"目标数据",
      source:[
        {
          'label':'数据一',
          'id':1,
          'checked':false
        },
        {
          'label':'数据二',
          'id':2,
          'checked':false
        },
        {
          'label':'数据三',
          'id':3,
          'checked':false
        },
        {
          'label':'数据四',
          'id':4,
          'checked':false
        }
      ],
      target:[
        {
          'label':'数据五',
          'id':5
        }
      ],
      sourceCheckedData:[]
    }
  },
  methods:{
    setSourceCheckedData(data){
      this.sourceCheckedData.push(data)
      console.log(this.sourceCheckedData)
    },
    //选中数据添加至源数据
    setSource(){
      console.log("添加至源数据")
    },
    //选中数据添加至目标数据
    setTarget(){
      debugger
      this.source = this.mergeArray(this.source,this.sourceCheckedData)
      this.target = this.target.concat(this.sourceCheckedData)
      this.sourceCheckedData = []
      console.log("添加至目标数据")
    },
    //数组去重
    mergeArray:function (arr1, arr2){ 
      //去重一
      for (var i = 0 ; i < arr1.length ; i ++ ){
        for(var j = 0 ; j < arr2.length ; j ++ ){
          if (arr1[i] === arr2[j]){
          arr1.splice(i,1); //利用splice函数删除元素，从第i个位置，截取长度为1的元素
          }
        }
      }
      return arr1;
    },
    //源数据全选
    sourceAllChecked(){
      console.log("全选")
      this.source.forEach((value)=>{
        value.checked = !value.checked
      })
      this.source = Object.assign({},this.source)
    }
  },
  watch:{
    'source':function(){
      console.log("该表")
    }
  }
}
</script>
<style lang="less">
  .transBox{
    vertical-align: middle
  }
  .transSourceBox,.transBoxTarget{
    /* border: 1px solid #dddee1; */
    height: 230px;
    /* width: 250px; */
    .transBoxTitle{
      padding: 8px 16px;
      background: #f9fafc;
      color: #495060;
      border: 1px solid #dddee1;
      border-bottom: 1px solid #e9eaec;
      border-radius: 6px 6px 0 0;
      overflow: hidden;
      top: 0;
      left: 0;
      input[type='checkbox']{
        vertical-align: middle
      }
    }
    .transBoxSearch{
      padding: 3px 5px;
      text-align: center;
      border-left: 1px solid #dddee1;
      border-right: 1px solid #dddee1;
      input{
        border: 1px solid #dddee1;
        border-radius: 3px;
        width: 90%;
        padding: 5px
      }
    }
    .transBoxContent{
      border: 1px solid #dddee1;
      height: 180px;
      ul{
        margin: 0;
        padding: 0;
        li{
          list-style: none;
          padding: 4px 16px;
          input[type='checkbox']{
            vertical-align: middle
          }
        }
      }
    }
    .transBoxBottom{
      border: 1px solid #dddee1;
      border-top:0;
      padding: 4px 16px;
      text-align: right
    }
    input[type='checkbox']{
      margin :0;
      width: 14px;
      height: 14px;
      z-index: 1;
      cursor: pointer;
      margin-right: 5px
    }
  }
  .transBoxAction{
    padding: 100px 0;
    text-align: center;
    .el-button{
      margin: 0;
      width: 80px;
      padding: 5px 10px;
      margin-bottom: 10px
    }
  }
  
</style>


