<template>
  <h1>这是父组件</h1>

  <ChildComp>
    <template #header="{ obj, index }">
      这是header插槽内容{{ text }} {{ obj.msg }} -- {{ index }}
    </template>
  </ChildComp>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import ChildComp from "@/views/组件/chidComp.vue";
export default defineComponent({
  setup() {
    // 变量
    const text = ref("这是一个变量");
    return {
      text,
    };
  },
  components: {
    ChildComp,
  },
});
</script>
