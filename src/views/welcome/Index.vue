<template>
  <b-container>
    <b-row>
      <b-col cols="12" class="text-center" style="margin-top:15%">
        <h1 class="animated flipInX" style="font-size:75px">WRAllen</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" class="text-center">
        <b-button
          variant="outline-primary"
          class="btn-default animated bounce delay-1s"
          to="/home"
        >知其然知其所以然</b-button>
      </b-col>
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