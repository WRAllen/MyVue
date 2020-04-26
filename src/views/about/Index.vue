<template>
  <b-container>
    <b-row>
      <b-col cols="12" class="animated bounceInLeft">
        <h4>{{Title}}</h4>
        <mavon-editor
          class="md"
          :value="Text"
          :subfield="subfield"
          :defaultOpen="defaultOpen"
          :toolbarsFlag="toolbarsFlag "
        ></mavon-editor>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      Title: "Info:这是一个还在测试中的博客",
      Text:
        "该网页的后端由符合Restful规范的Flask容器+Mysql容器\n前端由Vue+BootstrapVue构成\n" +
        "后期加上分布式的celery容器",
      subfield: false, // false单栏模式 true 双栏模式
      toolbarsFlag: false, // false不展示工具
      defaultOpen: "preview"
    };
  }
};
</script>
