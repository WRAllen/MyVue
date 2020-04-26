import Vue from 'vue'
import VueRouter from 'vue-router'


import Welcome from '../views/welcome/Index'
import Home from '../views/article/Index'
import Article from '../views/article/Article'
import CUArticle from '../views/article/CUArticle'
import Login from '../views/auth/Login'
import Sign from '../views/auth/Sign'
import About from '../views/about/Index'
import Test from '../views/test/Test'
import GBComment from '../views/gbcomment/GBComment'


Vue.use(VueRouter)


const router = new VueRouter({
    mode: "history",
    routes: [
        { path: "/", component: Welcome, meta: { auth: false } },
        { path: "/home", component: Home, meta: { auth: false } },
        { path: "/article", component: Article, name: "article", meta: { auth: false } },
        { path: "/cu_article", component: CUArticle, name: "cu_article", meta: { auth: true } },
        { path: "/login", component: Login, name: "login" },
        { path: "/sign", component: Sign, name: "sign" },
        { path: "/about", component: About, name: "about" },
        { path: "/test", component: Test, name: "test" },
        { path: "/gb_comment", component: GBComment, name: "gb_comment" }
    ]
})
export default router

