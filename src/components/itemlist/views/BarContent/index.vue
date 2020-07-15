<template>
  <div class="bar-content">
    <p>
      Titles
    </p>
    <el-table :data="datas" border="">
      <el-table-column prop="title" label="标题"></el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { MODULE_TOTAL, NAME } from "../../define";
import { mapActions, mapState } from "vuex";
import Vue from "vue";
export default Vue.extend({
  name: "BarContent",
  props: ["datasource"],
  data() {
    return {
      chartHandle: {},
      // titles: ["标题", "标题", "标题", "标题", "标题", "标题", "标题"],
    };
  },
  computed: {
    ...mapState([NAME, MODULE_TOTAL].join("/"), ["titles"]),
    datas() {
      return (this.titles as string[]).map((d) => ({ title: d }));
    },
  },
  methods: {
    ...mapActions([NAME, MODULE_TOTAL].join("/"), ["Refresh"]),
  },
});
</script>

<style lang="scss" scoped>
.bar-content {
  text-align: left;
  padding: 40px;
}
</style>
