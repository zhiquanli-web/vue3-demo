<template>
  <h4>这是子组件</h4>
  <div>这是父组件传过来的数据{{ count }}---{{ name }}</div>
  <button @click="changeCount">改变父组件传递的参数</button>
</template>
<script lang="ts">
import { defineComponent, inject, watch } from "vue";

export default defineComponent({
  props: {
    count: {
      type: [String, Number],
      default: "",
    },
  },
  inject: ['name'],
  emits: ["update:count"],
  setup(props, { emit }) {
    // const name = inject("name");
    const changeCount = () => {
      emit("update:count", 3);
    };
    return {
      changeCount,
      // name,
    };
  },
});
</script>
