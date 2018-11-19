<template>
 <div>
      {{result}}
 <h2>Essential *************************************  Links</h2>
  </div>

</template>

<script>
// import axios from "axios";
export default {
  name: "getData",
  data() {
    return {};
  },
  computed: {
    result: function() {
      return this.$store.state.getData.result;
    }
  },
  mounted() {
    this.$store.dispatch("getActionData");
  }
};
</script>
