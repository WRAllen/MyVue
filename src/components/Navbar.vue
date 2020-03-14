<template>
  <b-navbar toggleable="lg" type="dark" variant="info" sticky>
    <b-navbar-brand to="/" exact exact-active-class="active">WRAllen</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/home" exact exact-active-class="active">主页</b-nav-item>
        <b-nav-item to="/test" exact exact-active-class="active">测试</b-nav-item>
        <b-nav-item to="/test" exact exact-active-class="active">测试</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown v-if="login" right>
          <template v-slot:button-content>
            <em>{{ user_name }}</em>
          </template>
          <b-dropdown-item to="/CUArticle">写文章</b-dropdown-item>
          <b-dropdown-item @click="LoginOut">注销</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-navbar-nav v-else right>
          <b-nav-item to="/login">登录</b-nav-item>
          <b-nav-item to="/sign">注册</b-nav-item>
        </b-navbar-nav>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  computed: {
    login: function() {
      return this.$store.state.IsLogin;
    },
    user_name: function() {
      return this.$store.state.UserName;
    }
  },
  methods: {
    LoginOut() {
      this.$store.commit("ChangeLoginState", {
        IsLogin: false,
        UserName: "",
        Token: ""
      });
      this.$router.push("/");
    }
  }
};
</script>