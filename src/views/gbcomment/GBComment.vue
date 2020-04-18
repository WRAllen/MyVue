<template>
  <b-container class="page-home text-center my-3">
    <b-row>
      <b-form inline @submit="onSubmit">
        <label>态度：</label>
        <b-form-select class="mb-2 mr-sm-2 mb-sm-0" :options="attitudes" v-model="attitude_type"></b-form-select>
        <b-input class="mb-2 mr-sm-2 mb-sm-0" placeholder="例如:鞋子" v-model.trim="good_type"></b-input>
        <b-button variant="primary" @click="produce_comment">生成</b-button>
      </b-form>
    </b-row>
    <b-row class="my-3">
      <b-button variant="light" @click="copy_comment">复制评价</b-button>
      <b-form-textarea
        id="comment"
        class="my-3"
        v-model.trim="text"
        placeholder="评价显示区域"
        rows="3"
        max-rows="6"
      ></b-form-textarea>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      attitudes: [
        { text: "好评", value: "好评" },
        { text: "差评", value: "差评" }
      ],
      attitude_type: "好评",
      good_type: "",
      text: ""
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.produce_comment();
    },
    produce_comment() {
      this.axios
        .get(this.$store.state.BASEURL + "/gb_comment", {
          params: { Type: this.attitude_type, Class: this.good_type }
        })
        .then(response => {
          this.text = response.data.message;
        });
    },
    copy_comment() {
      if (this.text == "") {
        this.$bvToast.toast(`复制失败, 内容为空！`, {
          title: "消息",
          variant: "danger",
          solid: true
        });
      } else {
        var e = document.getElementById("comment");
        e.select();
        document.execCommand("Copy");
        this.$bvToast.toast(`复制成功`, {
          title: "消息",
          variant: "primary",
          solid: true
        });
      }
    }
  }
};
</script>