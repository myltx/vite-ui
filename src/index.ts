// import { createApp } from "vue";
import { createApp } from "vue/dist/vue.esm-browser";
import SmartyUI from "./entry";

createApp({
  template: `
            <div>
                <MyButton>普通按钮</MyButton>
            </div>
        `,
})
  .use(SmartyUI)
  .mount("#app");
