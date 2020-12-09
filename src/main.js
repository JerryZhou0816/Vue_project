import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 引入element-ui
import "./plugins/elements";
import "element-ui/lib/theme-chalk/index.css";

// 轮播图插件
import "swiper/dist/css/swiper.min.css";

// 路由懒加载
import VueLazyload from "vue-lazyload";
Vue.use(VueLazyload);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
