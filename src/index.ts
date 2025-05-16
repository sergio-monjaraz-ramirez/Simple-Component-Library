import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import myComponents from "./main";

const app = createApp(App);
app.use(myComponents);
app.mount('#app');