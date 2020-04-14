import Vue from 'vue'
import App from './App.vue'
// bootstrapVue
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// markdown
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// animated动画库
import animated from 'animate.css'
// 加载自定义内容
import router from './router'
import store from './store'

import './permission.js'

// 配置vue
Vue.config.productionTip = false

// bootstrapVue
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
// markdown
Vue.use(mavonEditor)
// animated
Vue.use(animated)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
