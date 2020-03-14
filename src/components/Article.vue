<template>
  <b-container>
    <b-row>
      <b-col cols="12">
        <div>
          <b-button to="/home" variant="warning">返回</b-button>
          <b-button variant="success" v-if="own" @click="ChangeArticle">修改</b-button>
          <b-button variant="danger" v-if="own">删除</b-button>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <b-card>
          <b-media>
            <template v-slot:aside>
              <b-img :src="`https://picsum.photos/600/300/?image=`+ArticleID"></b-img>
            </template>

            <h5 class="mt-0">{{Title}}</h5>
            <p>{{Text}}</p>
          </b-media>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      ArticleID: this.$route.params.ArticleID,
      UserID: "",
      Title: "",
      Text: ""
    };
  },
  mounted() {
    this.axios
      .get(this.$store.state.BASEURL + "/article/single", {
        params: { ArticleID: this.ArticleID }
      })
      .then(response => {
        if (response.data.code == 204) {
          alert(response.data.message);
          this.$router.push("/home");
        } else {
          this.Text = response.data.Text;
          this.Title = response.data.Title;
          this.UserID = response.data.UserID;
        }
      });
  },
  computed: {
    own: function() {
      if (this.$store.state.UserID == this.UserID) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    ChangeArticle() {
      this.$router.push({
        name: "CUArticle",
        params: { ArticleID: this.ArticleID }
      });
    }
  }
};
</script>

<style scoped>
</style>