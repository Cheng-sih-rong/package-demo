<script setup>
import { computed, ref, watch } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  width: {
    type: String,
    default: "100%",
  },
});

const emit = defineEmits(["update:modelValue"]);

const isShowPw = ref(false);

const updateValue = (value) => {
  emit("update:modelValue", value);
};

const toggleShowValue = () => {
  isShowPw.value = !isShowPw.value;
};
</script>

<template>
  <div class="password-container">
    <p>密碼</p>
    <div class="input-container" :style="{ width: width }">
      <input
        :value="modelValue"
        :type="isShowPw ? 'text' : 'password'"
        placeholder="請輸入密碼"
        @input="updateValue($event.target.value)"
      />
      <div
        class="eye-icon"
        :class="{ show: isShowPw }"
        @click="toggleShowValue()"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
* {
  box-sizing: border-box;
}

.password-container {
  width: 100%;
  p {
    margin-bottom: 5px;
  }
  .input-container {
    position: relative;
    input {
      width: 100%;
      height: 25px;
      padding-left: 5px;
      padding-right: 30px;
    }
    .eye-icon {
      position: absolute;
      cursor: pointer;
      top: 25%;
      right: 10px;
      bottom: 16px;
      width: 14px;
      height: 14px;
      border: 1px solid black;
      border-top-left-radius: 12px;
      border-bottom-right-radius: 12px;
      transform: rotate(45deg);
      &::after {
        content: "";
        top: 1px;
        right: 1px;
        position: absolute;
        width: 10px;
        height: 10px;
        background-color: black;
        border-radius: 10px;
      }

      &.show {
        border: 1px solid black;
        &::before {
          content: "";
          top: 5px;
          right: -3px;
          position: absolute;
          width: 20px;
          height: 2px;
          background-color: grey;
        }
        &::after {
          background-color: grey;
        }
      }
    }
  }
}
</style>
