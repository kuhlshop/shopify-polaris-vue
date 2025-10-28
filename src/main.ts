import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

// Configure Vue to recognize Polaris web components (s-* elements)
app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith("s-");

app.mount("#app");
