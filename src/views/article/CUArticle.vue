<template>
  <b-container>
    <b-row>
      <b-col cols="12">
        <b-form @submit="onSubmit">
          <b-form-group label="文章标题" label-for="input_title" description="这里输入文章标题，不要超过50个字符">
            <b-form-input id="input_title" v-model="form.Title" required placeholder="请输入文章标题"></b-form-input>
          </b-form-group>

          <b-form-group label="文章内容" label-for="input_text" description="这里输入文章内容">
            <mavon-editor class="md" v-model="form.Text"></mavon-editor>
          </b-form-group>
          <b-form-group>
            <b-button to="/home" variant="light">取消</b-button>&nbsp;
            <b-button type="submit" variant="dark">提交</b-button>
          </b-form-group>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        Title: "",
        Text: "",
        UserID: this.$store.state.UserID,
        ArticleID: this.$route.params.ArticleID
      }
    };
  },
  mounted() {
    if (this.form.ArticleID != undefined) {
      this.axios
        .get(this.$store.state.BASEURL + "/article", {
          params: { ArticleID: this.form.ArticleID }
        })
        .then(response => {
          this.form.Title = response.data.Title;
          this.form.Text = response.data.Text;
        });
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      if (this.form.ArticleID == undefined) {
        this.axios
          .post(this.$store.state.BASEURL + "/article", this.form)
          .then(response => {
            if (response.data.code == 204) {
              this.$bvToast.toast(response.data.message, {
                title: "消息",
                variant: "danger",
                solid: true
              });
            } else {
              this.$router.push("/home");
            }
          });
      } else {
        this.axios
          .put(this.$store.state.BASEURL + "/article", this.form)
          .then(response => {
            if (response.data.code == 204) {
              this.$bvToast.toast(response.data.message, {
                title: "消息",
                variant: "danger",
                solid: true
              });
            } else {
              this.$router.push("/home");
            }
          });
      }
    }
  }
};
</script>