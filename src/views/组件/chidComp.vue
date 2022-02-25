<template>
  <h4>这是子组件</h4>
  <header>
    <slot name="header" :obj="obj" index="1"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  setup() {
    const obj = reactive({
      msg: "子组件数据",
    });
    return {
      obj,
    };
  },
});
</script>
