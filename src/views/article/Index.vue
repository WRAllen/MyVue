<template>
  <b-container class="page-home text-center my-5">
    <b-row>
      <b-col col lg="3" md="6" sm="12" v-for="(data, index) in datas" :key="index">
        <b-card
          :title="data.Title"
          :img-src="`https://picsum.photos/600/300/?image=`+data.ID"
          @click="jump(data.ID)"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2 animated bounceInUp"
        ></b-card>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-button variant="light" @click="get_article()">{{page_info}}</b-button>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      page_info: "下拉查看更多",
      datas: [],
      requesting: false
    };
  },
  methods: {
    jump(id) {
      this.$router.push({ name: "article", query: { ArticleID: id } });
    },
    get_article() {
      console.log("开始请求");
      this.requesting = true;
      this.axios
        .get(this.$store.state.BASEURL + "/article_list", {
          params: { Page: this.page }
        })
        .then(response => {
          if (response.data.length == 0) {
            this.page_info = "没有内容了";
          } else {
            this.datas = this.datas.concat(response.data);
            this.requesting = false;
            this.page += 1;
          }
        });
    },
    scroll() {
      console.log("开始滚动");
      // 距离底部200px时加载一次
      let bottomOfWindow =
        document.documentElement.offsetHeight -
          document.documentElement.scrollTop -
          window.innerHeight <=
        50;
      if (bottomOfWindow && this.requesting == false) {
        this.get_article();
      }
    }
  },
  mounted() {
    // 因为这个是加在window上的，如果不remove其他页面也有效果
    window.addEventListener("scroll", this.scroll);
  },
  destroyed() {
    // remove滚动监听，避免其他页面也触发这个
    window.removeEventListener("scroll", this.scroll);
  },
  created() {
    this.axios
      .get(this.$store.state.BASEURL + "/article_list", {
        params: { Page: this.page }
      })
      .then(response => {
        this.datas = this.datas.concat(response.data);
      });
    this.page += 1;
    this.get_article();
  }
};
</script>