<template>
  <div id="app">
    <Navbar v-show="show_nav" />
    <b-container fluid>
      <b-alert v-model="show_message" variant="warning" dismissible>{{alert_message}}</b-alert>
      <router-view></router-view>
    </b-container>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  data() {
    return {
      show_nav: true,
      user_name: localStorage.getItem("UserName")
    };
  },
  components: {
    Navbar
  },
  computed: {
    show_message: function() {
      if (this.alert_message != undefined) {
        return true;
      } else {
        return false;
      }
    },
    alert_message: function() {
      return this.$route.query.alert_message;
    }
  }
};
</script>

<style>
</style>
