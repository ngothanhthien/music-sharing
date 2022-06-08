import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router";
import i18n from "./i18n.js";

const app = createApp(App);
app.directive('clickOutside', {
    mounted(el, binding) {
      el.clickOutsideEvent =(event)=> {
        if (!(el === event.target || el.contains(event.target))) {
            binding.value(event,el);
        }
      };
      document.body.addEventListener('click', el.clickOutsideEvent);
    },
    unmounted(el) {
      document.body.removeEventListener('click', el.clickOutsideEvent);
    }
});  
app.use(i18n);
app.use(router);
app.mount("#app");
