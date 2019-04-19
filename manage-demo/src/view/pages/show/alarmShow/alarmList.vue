<template>
  <div class="alarmList">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          label="城市"
          width="180"
          prop="Name">
        </el-table-column>
        <el-table-column
          label="城市编码"
          width="180"
          prop="CountryCode">
        </el-table-column>
        <el-table-column
          label="地区"
          width="180"
          prop="District">
        </el-table-column>
         <el-table-column
          label="人口"
          width="180"
          prop="Population">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.row.ID)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>  
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="100">
      </el-pagination>
  </div>
</template>

<script>
import URLS from '@/fetch/urls.js'
export default {
  name: 'alarmList',
  data () {
    return {
      urls:URLS.inhibiUrl,
      tableData:[],
      currentPage:1,
      pageSize:10,
      pageCong:{
        'pageNum':1,
        'pageSize':10
      }
    }
  },
  methods:{
      getTableData(){
        this.$api.get( this.urls + 'getCity',this.pageCong,res=>{
            if(res.code == 0){
              this.tableData = res.data
              this.$message({
                message: res.message,
                type: 'success'
              });
            }else{
              this.$message({
                message: res.message,
                type: 'error'
              });
            }
        })
      },
      handleDelete(id){
        this.$api.delete( this.urls + 'deleteCityById',{'id':id},res=>{
            if(res.code == 0){
              this.$message({
                message: res.message,
                type: 'success'
              });
              this.getTableData()
            }else{
              this.$message({
                message: res.message,
                type: 'error'
              });
            }
        })
      },
      handleSizeChange(val) {
        this.pageCong.pageSize = val
        this.getTableData()
      },
      handleCurrentChange(val) {
        this.pageCong.pageNum = val
        this.getTableData()
      }
  },
  created(){
      this.getTableData()
  }
}
</script>

