<template>
  <b-container>
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
          class="mb-2"
        >
          <b-card-text>{{data.Text}}</b-card-text>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <h3>{{page_info}}</h3>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      page_info: "下拉查看更多",
      datas: []
    };
  },
  methods: {
    jump(id) {
      this.$router.push({ name: "Article", params: { ArticleID: id } });
    },
    scroll() {
      let isLoading = false;
      // 每次滚动滚轴都会触发这个函数
      window.onscroll = () => {
        // 距离底部200px时加载一次
        let bottomOfWindow =
          document.documentElement.offsetHeight -
            document.documentElement.scrollTop -
            window.innerHeight <=
          50;
        console.log("bottomOfWindow", bottomOfWindow, "isLoading", isLoading);
        if (bottomOfWindow && isLoading == false) {
          isLoading = true;
          this.axios
            .get("http://112.124.104.214:5000/article", {
              params: { Page: this.page }
            })
            .then(response => {
              if (response.data.length == 0) {
                this.page_info = "没有内容了";
              } else {
                console.log("response.data", response.data);
                console.log(this.datas);
                this.datas = this.datas.concat(response.data);
                console.log("合并后", this.datas);
                isLoading = false;
                this.page += 1;
              }
            });
        }
      };
    }
  },
  mounted() {
    console.log("mounted");
    this.scroll();
  },
  created() {
    this.axios
      .get(this.$store.state.BASEURL + "/article", {
        params: { Page: this.page }
      })
      .then(response => {
        this.datas = this.datas.concat(response.data);
      });
    this.page += 1;
  }
};
</script>

<style scoped>
</style>