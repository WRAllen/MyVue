<template>
  <b-container>
    <div>
      <b-card>
        <b-media>
          <template v-slot:aside>
            <b-img blank blank-color="#ccc" width="64" alt="placeholder"></b-img>
          </template>

          <h5 class="mt-0">{{title}}</h5>
          <p>{{text}}</p>
        </b-media>
      </b-card>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      article_id: this.$route.params.ArticleID,
      title: "",
      text: ""
    };
  },
  mounted() {
    this.axios
      .get(this.$store.state.BASEURL + "/article/single", {
        params: { ArticleID: this.article_id }
      })
      .then(response => {
        if (response.data.code == 204) {
          alert(response.data.message);
          this.$router.push("/home");
        } else {
          this.text = response.data.Text;
          this.title = response.data.Title;
        }
      });
  }
};
</script>

<style scoped>
</style>