<template>
  <b-container>
    <b-row>
      <b-col cols="12">
        <b-form @submit="onSubmit">
          <b-form-group label="文章标题" label-for="input_title" description="这里输入文章标题，不要超过50个字符">
            <b-form-input id="input_title" v-model="form.Title" required placeholder="请输入文章标题"></b-form-input>
          </b-form-group>

          <b-form-group label="文章内容" label-for="input_text" description="这里输入文章内容">
            <b-form-textarea
              id="input_text"
              v-model="form.Text"
              placeholder="这里输入文章内容"
              rows="6"
              max-rows="9"
            ></b-form-textarea>
          </b-form-group>

          <b-button to="/home" variant="warning">取消</b-button>
          <b-button type="submit" variant="primary">提交</b-button>
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
    if (this.form.ArticleID != "") {
      this.axios
        .get(this.$store.state.BASEURL + "/article/single", {
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
      if (this.form.ArticleID == "") {
        this.axios
          .post(this.$store.state.BASEURL + "/article", this.form)
          .then(response => {
            if (response.data.code == 204) {
              alert(response.data.message);
            } else {
              alert(response.data.message);
              this.$router.push("/home");
            }
          });
      } else {
        this.axios
          .put(this.$store.state.BASEURL + "/article", this.form)
          .then(response => {
            if (response.data.code == 204) {
              alert(response.data.message);
            } else {
              alert(response.data.message);
              this.$router.push("/home");
            }
          });
      }
    }
  }
};
</script>