<template>
  <div>
    <p>
      template
    </p>
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
    };
  },

  methods: {},
});
</script>
