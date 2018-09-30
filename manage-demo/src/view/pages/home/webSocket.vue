<template>
  <div class="homeOne">
    <h2>测试websocket</h2>
     <el-button type="primary" @click="sendMessage">发送</el-button>
     <el-button type="primary" @click="connection">连接</el-button>
     {{msgRec}}
  </div>
</template>

<script>
import store from '@/store/store.js'
export default {
  name: 'homeOne',
  data () {
    return {
      wkConnection:'',
      msgRec:[],
    }
  },
  methods:{
    sendMessage() {
      this.websocketsend("测试");
    },
    connection(){
      this.wkConnection = new WebSocket("ws://localhost:8181");
      // this.wkConnection.onopen = function (e) {
      //   console.log('Connection to server opened');
      // }
      this.wkConnection.onmessage = function (e) {
          console.log(e.data);
      };
    },
    initWebSocket(){ //初始化weosocket 
      const wsuri ="ws://localhost:8181";//ws地址
      this.wkConnection = new WebSocket(wsuri); 
      this.wkConnection.onopen = this.websocketonopen;
      this.wkConnection.onerror = this.websocketonerror;
      this.wkConnection.onmessage = this.websocketonmessage; 
      this.wkConnection.onclose = this.websocketclose;
        }, 
    websocketonopen() {
      console.log("WebSocket连接成功");
    },
    websocketonerror(e) { //错误
      console.log("WebSocket连接发生错误");
    },
    websocketonmessage(e){ //数据接收 
    debugger
      const redata = e.data;
      this.msgRec.push(redata)
    　//注意：长连接我们是后台直接1秒推送一条数据， 
      //但是点击某个列表时，会发送给后台一个标识，后台根据此标识返回相对应的数据，
      //这个时候数据就只能从一个出口出，所以让后台加了一个键，例如键为1时，是每隔1秒推送的数据，为2时是发送标识后再推送的数据，以作区分 
    }, 
    websocketsend(agentData){//数据发送 
      this.wkConnection.send(agentData); 
    }, 
    websocketclose(e){ //关闭 
      console.log("connection closed (" + e + ")"); 
    },
  },
  watch:{
  },
  created(){
    this.initWebSocket()
  },
  destroyed(){
    this.websocketclose();
  }
}
</script>
<style lang="less">

</style>


