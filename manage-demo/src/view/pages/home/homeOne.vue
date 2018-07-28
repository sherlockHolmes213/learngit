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
              <li v-for="(item,index) in source" :key="item.id"><input type="checkbox" @click="setSourceCheckedData(item,$event)" ref="sourceList">{{item.label}}</li>
            </ul>
          </div>
        </div>
        <div class="transBoxBottom">
          刷新11
        </div>
      </el-col>
      <el-col :span="2" class="transBoxAction">
        <el-button @click="setSource">&lt;to left</el-button>
        <el-button @click="setTarget">to right&gt;</el-button>
      </el-col>
      <el-col :span="5" class="transBoxTarget">
        <div class="transBoxTitle">
          <input type="checkbox" @click="targetAllChecked">{{targetTitle}}
          <span style="float:right">{{target.length}}</span>
        </div>
        <div>
          <div class="transBoxSearch">
            <input type="text" placeholder="请输入关键字进行搜索">
          </div>
          <div class="transBoxContent">
            <ul >
              <li v-for="(item,index) in target" :key="item.id"><input type="checkbox" @click="setTargetCheckedData(item,$event)"  ref="targetList">{{item.label}}</li>
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
      isChecked:false,
      source:[
        {
          'label':'数据一',
          'id':1,
        },
        {
          'label':'数据二',
          'id':2,
        },
        {
          'label':'数据三',
          'id':3,
        },
        {
          'label':'数据四',
          'id':4,
        }
      ],
      target:[
        {
          'label':'数据五',
          'id':5
        }
      ],
      sourceCheckedData:[],  //选中的源数据
      targetCheckedData:[],  //选中的目标数据
    }
  },
  methods:{
    setSourceCheckedData(data,event){
      debugger
      let el = event.currentTarget
      if(el.checked){
        this.sourceCheckedData.push(data)
      }else{
        this.sourceCheckedData.forEach((value,index)=>{
          if(value.id == data.id){
            this.sourceCheckedData.splice(index,1)
          }
        })
      }
      // debugger
      // data.checked = !data.checked
      //this.source = this.source.slice(0)
      //this.sourceCheckedData.push(data)
      // console.log(this.sourceCheckedData)
    },
    setTargetCheckedData(data,event){
      
      this.targetCheckedData.push(data)
    },
    //选中数据添加至目标数据
    setTarget(){
      this.source = this.mergeArray(this.source,this.sourceCheckedData)
      this.target = this.target.concat(this.sourceCheckedData)
      this.sourceCheckedData = []
      console.log("添加至目标数据")
    },
    //选中数据添加至源数据
    setSource(){
      this.target = this.mergeArray(this.target,this.targetCheckedData)
      this.source = this.source.concat(this.targetCheckedData)
      this.targetCheckedData = []
    },
    //数组去重
    mergeArray:function (arr1, arr2){ 
      //去重一
      debugger
      let temp = []
      // temp.splice(1,1)
      // console.log("temp:",temp)
      // console.log("arr1:",arr1)
      for (var i = 0 ; i < arr1.length ; i ++ ){
        for(var j = 0 ; j < arr2.length ; j ++ ){
          if (arr1[i] === arr2[j]){
            // debugger
            // arr1.splice(i,1); //利用splice函数删除元素，从第i个位置，截取长度为1的元素
            temp.push(i)
          }
        }
      }

      let sortNumber = function(a,b){
        return b-a
      }
      temp.sort(sortNumber)
      temp.forEach((value)=>{
        arr1.splice(value,1)
      })
      return arr1;
    },
    //源数据全选
    sourceAllChecked(){
      console.log("全选源数据")
      this.$refs.sourceList.forEach((el)=>{
        el.checked = !el.checked
      })
      // this.source.forEach((value)=>{
      //   value.checked = !value.checked
      // })
      this.sourceCheckedData = this.source
      // debugger
      // this.source = Object.assign({},this.source)
      this.source = this.source.slice(0)
    },
    //目标数据全选
    targetAllChecked(){
      console.log("全选目标数据")
      this.$refs.targetList.forEach((el)=>{
        el.checked = !el.checked
      })
      this.targetCheckedData = this.target
      this.target = this.target.slice(0)
    }
  },
  watch:{
    'source':function(){
      // this.source.forEach((value)=>{
      //   if(value.checked)
      // })
      console.log("改变")
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


