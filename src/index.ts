// import { createApp } from "vue";
import { createApp } from "vue/dist/vue.esm-browser";
import SmartyUI from "./entry";

createApp({
  template: `
            <div>
		<MyButton color="blue" round plain icon="search">蓝色按钮</MyButton>
		<MyButton color="green">绿色按钮</MyButton>
		<MyButton color="gray">灰色按钮</MyButton>
		<MyButton color="yellow">黄色按钮</MyButton>
		<MyButton color="red">红色按钮</MyButton>
            </div>
        `,
})
  .use(SmartyUI)
  .mount("#app");
