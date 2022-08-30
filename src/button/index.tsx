import { defineComponent, h, PropType, toRefs } from "vue";
import "uno.css";

export type ISize = "small" | "medium" | "large";
// 样式属性
export type IColor =
  | "black"
  | "gray"
  | "red"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "purple"
  | "pink";

const size = {
  small: {
    x: "2",
    y: "1",
    text: "sm",
  },
  medium: {
    x: "3",
    y: "1.5",
    text: "base",
  },
  large: {
    x: "4",
    y: "2",
    text: "lg",
  },
};
export const props = {
  color: {
    type: String as PropType<IColor>,
    default: "blue", // 默认颜色
  },
  // 新增
  size: {
    type: String as PropType<ISize>,
    default: "large",
  },
  icon: {
    type: String,
    default: "",
  },
};

export default defineComponent({
  name: "MyButton",
  props, // 注册属性
  setup(props, { slots }) {
    return () => (
      <button
        class={`
        py-${size[props.size].y}
        px-${size[props.size].x}
        font-semibold 
        rounded-lg
        shadow-md 
        text-white 
        bg-${props.color}-500 
        hover:bg-${props.color}-700 
        border-none
        cursor-pointer
        mx-1
    `}
      >
        {props.icon !== "" ? (
          <i class={`i-ic-baseline-${props.icon} p-3`}></i>
        ) : (
          ""
        )}
        {slots.default ? slots.default() : ""}
      </button>
    );
  },
});
