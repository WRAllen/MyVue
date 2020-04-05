<template>
  <b-container>
    <b-row>
      <b-col cols="12">
        <div>
          <b-button to="/home" variant="warning">返回</b-button>
          <b-button variant="success" v-if="own" @click="ChangeArticle">修改</b-button>
          <b-button variant="danger" v-if="own" @click="DeleteArticle">删除</b-button>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <b-card :title="Title">
          <mavon-editor
            class="md"
            :value="Text"
            :subfield="subfield"
            :defaultOpen="defaultOpen"
            :toolbarsFlag="toolbarsFlag "
          ></mavon-editor>
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
      Text: "",
      subfield: false, // false单栏模式 true 双栏模式
      toolbarsFlag: false, // false不展示工具
      defaultOpen: "preview"
    };
  },
  mounted() {
    this.axios
      .get(this.$store.state.BASEURL + "/article", {
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
    },
    DeleteArticle() {
      this.axios
        .delete(this.$store.state.BASEURL + "/article", {
          params: { ArticleID: this.ArticleID }
        })
        .then(response => {
          if (response.data.code == 204) {
            alert(response.data.message);
          } else {
            alert("文章删除成功");
          }
          this.$router.push("/home");
        });
    }
  }
};
</script>

<style scoped>
</style>