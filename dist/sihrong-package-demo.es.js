import { ref as p, openBlock as c, createElementBlock as r, createElementVNode as s, normalizeStyle as i, normalizeClass as _, pushScopeId as v, popScopeId as m } from "vue";
const w = (e, l) => {
  const t = e.__vccOpts || e;
  for (const [n, a] of l)
    t[n] = a;
  return t;
}, y = (e) => (v("data-v-74785642"), e = e(), m(), e), h = { class: "password-container" }, f = /* @__PURE__ */ y(() => /* @__PURE__ */ s("p", null, "密碼", -1)), I = ["value", "type"], S = {
  __name: "PasswordInput",
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    width: {
      type: String,
      default: "100%"
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const t = p(!1), n = (u) => {
      l("update:modelValue", u);
    }, a = () => {
      t.value = !t.value;
    };
    return (u, o) => (c(), r("div", h, [
      f,
      s("div", {
        class: "input-container",
        style: i({ width: e.width })
      }, [
        s("input", {
          value: e.modelValue,
          type: t.value ? "text" : "password",
          placeholder: "請輸入密碼",
          onInput: o[0] || (o[0] = (d) => n(d.target.value))
        }, null, 40, I),
        s("div", {
          class: _(["eye-icon", { show: t.value }]),
          onClick: o[1] || (o[1] = (d) => a())
        }, null, 2)
      ], 4)
    ]));
  }
}, V = /* @__PURE__ */ w(S, [["__scopeId", "data-v-74785642"]]);
export {
  V as PasswordInput
};
