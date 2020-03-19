import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// axios
import vueAxios from 'vue-axios'
import axios from 'axios'
// bootstrapVue
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Welcome from './components/Welcome'
import Article from './components/Article'
import CUArticle from './components/CUArticle'
import Home from './components/Home'
import Login from './components/Login'
import Sign from './components/Sign'
import Test from './components/Test'
import TestTwo from './components/TestTwo'
// vuex
import store from './store'


Vue.config.productionTip = false
// 路由
Vue.use(VueRouter)
// axios
Vue.use(vueAxios, axios)
// bootstrapVue
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Welcome, meta: { auth: false } },
    { path: "/home", component: Home, meta: { auth: false } },
    { path: "/Article", component: Article, name: "Article", meta: { auth: true } },
    { path: "/CUArticle", component: CUArticle, name: "CUArticle", meta: { auth: true } },
    { path: "/login", component: Login, name: "login" },
    { path: "/sign", component: Sign, name: "sign" },
    { path: "/test", component: Test },
    { path: "/test_two", component: TestTwo }
  ]
})

router.beforeEach((to, from, next) => {
  axios.defaults.headers.common['Token'] = store.state.Token;
  if (!to.meta.auth) {
    next();
  } else {
    if (localStorage.getItem("Token")) {
      axios.get(store.state.BASEURL + "/token").then(response => {
        console.log("response", response)
        if (response.data.code == 200) {
          next()
        }
        else {
          alert('登录过期请重新登录！');
          next({ path: '/login', query: { alert_message: "登录过期请重新登录！" } });
        }
      })
    } else {
      alert('您还没有登录，请先登录');
      next('/login');
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
