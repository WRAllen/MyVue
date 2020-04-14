<template>
  <b-container>
    <div class="main">
      <h1 class="animated shake" style="font-size:150px">WRAllen</h1>
      <b-button
        variant="outline-primary"
        class="btn-default animated bounce delay-1s"
        to="/home"
      >进入-></b-button>
    </div>
  </b-container>
</template>

<script>
export default {
  mounted() {
    this.$parent.show_nav = false;
  },
  destroyed() {
    this.$parent.show_nav = true;
  }
};
</script>

<style scoped>
.main {
  text-align: center;
}
</style>