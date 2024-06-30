import { createApp } from 'vue'
import App from './App.vue';
// Import Store
import store from "./store/store.js";
// ROUTER
import router from "./router/router";
// Styles Project  =>
// import Bootstrap @5v
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import Element Plus Lib #
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// Main scss
import "~@/components/scss/main.scss";

// # Create App # 
createApp(App).use(router).use(store).use(ElementPlus).mount('#app')
