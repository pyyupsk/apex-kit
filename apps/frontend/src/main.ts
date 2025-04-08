import App from "@/app.vue";
import { VueQueryPlugin } from "@tanstack/vue-query";
import { createApp } from "vue";

const app = createApp(App);

app.use(VueQueryPlugin);
app.mount("#app");
