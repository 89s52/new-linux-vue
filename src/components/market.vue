<template>
  <div class="market">
  <el-form :inline="true" :model="result" class="demo-form-inline">
 
      <el-form-item label="股票代码">
      <el-input v-model="result.securityCode"  placeholder="股票代码"></el-input>
      </el-form-item>

    <el-form-item label="股票名称">
    <el-input v-model="result.name" placeholder="股票名称"></el-input>
    </el-form-item>
  
    <el-form-item label="当前价">
    <el-input v-model="result.now" placeholder="当前价"></el-input>
    </el-form-item>

    <el-form-item label="昨收">
    <el-input v-model="result.close" placeholder="昨收"></el-input>
    </el-form-item>

    <el-form-item label="今开">
    <el-input v-model="result.open" placeholder="今开"></el-input>
    </el-form-item>

    <el-form-item label="最高">
    <el-input v-model="result.high" placeholder="最高"></el-input>
    </el-form-item>

    <el-form-item label="最低">
    <el-input v-model="result.low" placeholder="最低"></el-input>
    </el-form-item>

    <el-form-item label="成交额">
    <el-input v-model="result.volume" placeholder="成交额"></el-input>
    </el-form-item>
       
    <el-form-item label="时间">
    <el-input v-model="result.transactions[1].time" placeholder="时间"></el-input>
    </el-form-item>
       
    <el-form-item label="价格">
    <el-input v-model="result.transactions[1].price" placeholder="价格"></el-input>
    </el-form-item>

    <el-form-item label="手数">
    <el-input v-model="result.transactions[1].volume" placeholder="手数"></el-input>
    </el-form-item>

    <el-form-item label="涨跌">
    <el-input v-model="result.transactions[1].action" placeholder="涨跌"></el-input>
    </el-form-item>

    <el-form-item label="成交量">  
    <el-input v-model="result.transactions[1].amount" placeholder="成交量"></el-input>
    </el-form-item>
 
    <el-form-item label="当前时间">
    <el-input v-model="result.datetime" placeholder="当前时间"></el-input>
    </el-form-item>
 
    <el-form-item>
    <el-button type="success" @click="onSubmit">保存</el-button>
    </el-form-item>

     <el-form-item>
    <el-button type="danger" @click="onSubmit">删除</el-button>
    </el-form-item>

     <el-form-item>
    <el-button type="primary" @click="onSubmit">修改</el-button>
    </el-form-item>

</el-form>
  </div>
</template>

<script>
export default {
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 8) {
          return 'success-row';
        }
        return '';
      }
    },
    data() {
        return {
        formInline: {
          user: '',
          region: ''
        }
    };
  },
  computed: {
    result: function() {
     let aaa = this.$store.state.getData.result.data.data;
     let bbb = JSON.parse(aaa);
     return bbb;
    }
  },
  mounted() {
    this.$store.dispatch("getActionData");
    }    
  }
</script>

<style scoped>
 .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }

.market{ width:800px;}
.market .el-form--inline .el-form-item{ display:block;}
.market .el-form--inline .el-form-item .el-form-item__label{ width:200px; text-align:right;}
.market .el-row{ text-align:center; }
</style>


