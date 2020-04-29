<template>
  <b-container>
    <b-row>
      <b-col cols="12" class="animated bounceInLeft">
        <h4>
          {{Title}}
          <b-button v-b-toggle.collapse_buttons class="m-1" variant="light">+</b-button>
          <b-collapse id="collapse_buttons">
            <b-button to="/home" variant="light">返回</b-button>&nbsp;
            <b-button variant="light" v-if="own" @click="ChangeArticle">修改</b-button>&nbsp;
            <b-button variant="light" v-if="own" @click="DeleteArticle">删除</b-button>
          </b-collapse>
        </h4>
      </b-col>
    </b-row>
    <b-row class="animated bounceInLeft">
      <b-col>发布时间：{{CreateTime}}</b-col>
      <b-col>更新时间：{{UpdateTime}}</b-col>
      <b-col>作者：{{UserName}}</b-col>
    </b-row>
    <b-row>
      <b-col cols="12" class="animated bounceInLeft">
        <mavon-editor
          class="my-3"
          :value="Text"
          :subfield="subfield"
          :defaultOpen="defaultOpen"
          :toolbarsFlag="toolbarsFlag"
          :toolbars="toolbars"
        ></mavon-editor>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      ArticleID: this.$route.query.ArticleID,
      UserID: "",
      Title: "",
      Text: "",
      CreateTime: "",
      UpdateTime: "",
      UserName: "",
      subfield: false, // false单栏模式 true 双栏模式
      toolbarsFlag: true, // false不展示工具
      defaultOpen: "preview",
      toolbars: {
        readmodel: true, // 沉浸式阅读
        navigation: true // 导航目录
      }
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
          this.UserName = response.data.UserName;
          this.CreateTime = response.data.CreateTime;
          this.UpdateTime = response.data.UpdateTime;
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
        name: "cu_article",
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