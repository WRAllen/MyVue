<template>
  <b-container>
    <b-row align-h="center" style="margin-top:10%">
      <b-form>
        <b-form-group label="用户名:" label-for="UserName">
          <b-form-input id="UserName" v-model="form.UserName" required placeholder="输入用户名"></b-form-input>
        </b-form-group>

        <b-form-group label="密码:" label-for="Password">
          <b-form-input
            type="password"
            id="Password"
            v-model="form.Password"
            required
            placeholder="输入密码"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="再次输入密码:" label-for="PasswordCopy">
          <b-form-input
            type="password"
            id="PasswordCopy"
            v-model="form.PasswordCopy"
            required
            placeholder="再次输入密码"
          ></b-form-input>
        </b-form-group>

        <b-button to="/" variant="info">返回</b-button>&nbsp;
        <b-button @click="Sign" variant="danger">注册</b-button>
      </b-form>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        UserName: "",
        Password: "",
        PasswordCopy: ""
      }
    };
  },
  methods: {
    Sign() {
      if (this.form.UserName != "" && this.form.Password != "") {
        if (this.form.Password != this.form.PasswordCopy) {
          alert("两次输入密码不一样!");
        } else {
          this.axios
            .post(this.$store.state.BASEURL + "/user", this.form)
            .then(response => {
              if (response.data.code == 204) {
                alert(response.data.message);
              } else {
                alert("注册成功！请进行登录");
                this.$router.push("/login");
              }
            });
        }
      } else {
        alert("用户名或者密码不能为空!");
      }
    }
  },
  created() {
    this.$parent.show_nav = false;
  },
  destroyed() {
    this.$parent.show_nav = true;
  }
};
</script>

<style scoped>
</style>