import "spinkit/spinkit.min.css";
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/css/reset.css";
import "./assets/scss/main.scss";
import router from "./router";
import store from "./store";

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
