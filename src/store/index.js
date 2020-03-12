import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        IsLogin: localStorage.getItem("IsLogin"),
        UserName: localStorage.getItem("UserName"),
        UserID: localStorage.getItem("UserID"),
        Token: localStorage.getItem("Token"),
        BASEURL: "http://112.124.104.214:5000"
    },
    mutations: {
        ChangeLoginState(state, data) {
            state.IsLogin = data.IsLogin;
            state.UserName = data.UserName;
            state.UserID = data.UserID;
            state.Token = data.Token;
            if (state.IsLogin == true) {
                // 把token和用户名保存起来
                localStorage.setItem("Token", data.Token);
                localStorage.setItem("UserName", data.UserName);
                localStorage.setItem("UserID", data.UserID);
                localStorage.setItem("IsLogin", true);
            } else {
                // 移除
                localStorage.removeItem("Token");
                localStorage.removeItem("UserName");
                localStorage.removeItem("UserID");
                localStorage.removeItem("IsLogin");
            }
        }
    }
})

export default store