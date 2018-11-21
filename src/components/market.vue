<template>
  <div class="market">
  <el-form :inline="true" :model="result" class="demo-form-inline">
    <el-form-item label="股票代码">
    <el-input v-model="result.data.securityCode"  placeholder="股票代码"></el-input>
    </el-form-item>
    <el-form-item label="股票名称">
    <el-input v-model="result.data.name" placeholder="股票名称"></el-input>
    </el-form-item>
    <el-form-item label="当前价">
    <el-input v-model="result.data.now" placeholder="当前价"></el-input>
    </el-form-item>
    <el-form-item label="昨收">
    <el-input v-model="result.data.close" placeholder="昨收"></el-input>
    </el-form-item>
    <el-form-item label="今开">
    <el-input v-model="result.data.open" placeholder="今开"></el-input>
    </el-form-item>
    <el-form-item label="最高">
    <el-input v-model="result.data.high" placeholder="最高"></el-input>
    </el-form-item>
    <el-form-item label="最低">
    <el-input v-model="result.data.low" placeholder="最低"></el-input>
    </el-form-item>
    <el-form-item label="成交额">
    <el-input v-model="result.data.volume" placeholder="成交额"></el-input>
    </el-form-item>
    <el-form-item label="时间">
    <el-input v-model="result.data.transactions[1].time" placeholder="时间"></el-input>
    </el-form-item>
    <el-form-item label="价格">
    <el-input v-model="result.data.transactions[1].price" placeholder="价格"></el-input>
    </el-form-item>
    <el-form-item label="手数">
    <el-input v-model="result.data.transactions[1].volume" placeholder="手数"></el-input>
    </el-form-item>
    <el-form-item label="涨跌">
    <el-input v-model="result.data.transactions[1].action" placeholder="涨跌"></el-input>
    </el-form-item>
    <el-form-item label="成交量">  
    <el-input v-model="result.data.transactions[1].amount" placeholder="成交量"></el-input>
    </el-form-item>
    <el-form-item label="当前时间">
    <el-input v-model="result.data.datetime" placeholder="当前时间"></el-input>
    </el-form-item>
    <el-form-item>
    <el-button type="success" @click="onSave">保存</el-button>
    </el-form-item>
     <el-form-item>
    <el-button type="danger" @click="onDel">删除</el-button>
    </el-form-item>
     <el-form-item>
    <el-button type="primary" @click="onUpdate">修改</el-button>
    </el-form-item>
    <el-form-item>
    <el-button type="primary" @click="onFind">查找</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    onDel() {
      this.$store.dispatch("new_onDel");
    },
    onSave() {
      this.$store.dispatch("new_onSave");
    },
    onUpdate() {
      this.$store.dispatch("new_onUpdate");
    },
    onFind(){
      this.$store.dispatch('new_onFind')
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 8) {
        return "success-row";
      }
      return "";
    }
  },
  data() {
    return {
      formInline: {
        user: "",
        region: ""
      }
    };
  },
  computed: {
    result: function() {
      let aaa = this.$store.state.new_get.result;
      console.log(aaa);
      return aaa;
    }
  },
  mounted() {
    this.$store.dispatch("new_getActionData");
  }
};
</script>

<style scoped>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}

.market {
  width: 800px;
}
.market .el-form--inline .el-form-item {
  display: block;
}
.market .el-form--inline .el-form-item .el-form-item__label {
  width: 200px;
  text-align: right;
}
.market .el-row {
  text-align: center;
}
</style>


