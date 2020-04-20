import router from './router'
import store from './store'
import Vue from 'vue'
// axios
import vueAxios from 'vue-axios'
import axios from 'axios'
// 页面进度条
import NProgress from 'nprogress'
import "nprogress/nprogress.css";


// axios
Vue.use(vueAxios, axios)
// 页面加载进度条配置
NProgress.configure({ showSpinner: true })

router.beforeEach((to, from, next) => {
    NProgress.start()
    axios.defaults.headers.common['Token'] = store.state.Token;
    axios.defaults.headers.common['UserID'] = store.state.UserID;
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
router.afterEach(() => {
    // finish progress bar
    NProgress.done()
})