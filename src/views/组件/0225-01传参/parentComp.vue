<template>
  <h1>这是父组件</h1>
  <button @click="add">点我啊 --- {{ count }} --- {{ name }}</button>
  <ChildComp v-model:count="count"></ChildComp>
</template>
<script lang="ts">
import { defineComponent, provide, ref } from "vue";
import ChildComp from "@/views/组件/chidComp.vue";
export default defineComponent({
  setup() {
    // 变量
    const count = ref(1);
    const name = ref("张三");
    provide("name", name);
    // 方法
    const add = () => {
      count.value += 1;
      name.value = name.value === "张三" ? "李四" : "张三";
    };
    return {
      count,
      add,
      name,
    };
  },
  components: {
    ChildComp,
  },
});
</script>
