<template>
  <b-container>
    <h1>Welcome</h1>
    <ul>
      <li v-for="(data, index) in news" :key="index">
        <a :href="data.Url" target="_blank">{{data.Title}}</a>
      </li>
    </ul>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      news: []
    };
  },
  created() {
    this.axios
      .get(this.$store.state.BASEURL + "/new", {
        params: { Page: this.page }
      })
      .then(response => {
        this.news = this.news.concat(response.data);
      });
    this.page += 1;
  }
};
</script>