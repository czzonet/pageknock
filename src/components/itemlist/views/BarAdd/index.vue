<template>
  <div class="bar-add">
    <el-form inline="">
      <el-form-item>
        <el-input v-model="title" placeholder="内容"></el-input>
      </el-form-item>

      <el-form-item> <el-button @click="add">添加</el-button> </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { MODULE_TOTAL, NAME } from "../../define";

import Vue from "vue";
import { mapActions } from "vuex";
export default Vue.extend({
  name: "BarAdd",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    ...mapActions([NAME, MODULE_TOTAL].join("/"), ["Add"]),
    add() {
      this.Add(this.title).then();
      /** 清空文本框 */
      this.title = "";
      console.log("add title.");
    },
  },
});
</script>

<style lang="scss" scoped>
.bar-add {
  padding: 40px;
}
</style>
