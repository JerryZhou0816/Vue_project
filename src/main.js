import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 引入element-ui
import "./plugins/elements";

// 轮播图插件
import "swiper/dist/css/swiper.min.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
