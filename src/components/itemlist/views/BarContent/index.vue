<template>
  <div class="bar-content">
    <p>
      Titles
    </p>
    <ul>
      <li v-for="(title, index) in titles" :key="index">
        {{ title }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "BarContent",
  props: ["datasource"],
  data() {
    return {
      chartHandle: {},
      titles: ["标题", "标题", "标题", "标题", "标题", "标题", "标题"],
    };
  },

  methods: {},
});
</script>

<style lang="scss" scoped>
.bar-content {
  text-align: left;
  padding: 40px;
}
</style>
