<template>
  <b-container fluid>
    <b-row>
      <b-col></b-col>
      <b-col md="auto">
        <h1 class="animated shake" style="font-size:150px">WRAllen</h1>
      </b-col>
      <b-col></b-col>
    </b-row>
    <b-row>
      <b-col></b-col>
      <b-col md="auto">
        <b-button
          variant="outline-primary"
          class="btn-default animated bounce delay-1s"
          to="/home"
        >进入-></b-button>
      </b-col>
      <b-col></b-col>
    </b-row>
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