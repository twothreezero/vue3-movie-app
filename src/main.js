// import Vue from "vue";
import { createApp } from "vue";
import App from "./App.vue";
import router from './routes/index.js'

// Vue.createApp(App).mount("#app");
createApp(App).use(router).mount("#app");
