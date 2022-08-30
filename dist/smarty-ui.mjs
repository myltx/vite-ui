import { defineComponent, h, openBlock, createElementBlock, createVNode, createTextVNode } from "vue";
const SButton = defineComponent({
  name: "SButton",
  render() {
    return h("button", null, "MyButton");
  }
});
const _sfc_main = {
  name: "SFCButton"
};
const SFCButton_vue_vue_type_style_index_0_scoped_e0dd1915_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", null, "SFC Button");
}
const SFCButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e0dd1915"]]);
const JSXButton = defineComponent({
  name: "JSXButton",
  render() {
    return createVNode("button", null, [createTextVNode("JSX Button")]);
  }
});
const entry = {
  install(app) {
    app.component(SButton.name, SButton);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
  }
};
export {
  JSXButton,
  SButton,
  SFCButton,
  entry as default
};
