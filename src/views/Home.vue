<template>
  <ParentComp></ParentComp>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

import ParentComp from "@/views/组件/parentComp.vue";

export default defineComponent({
  setup() {},
  components: {
    ParentComp,
  },
});
</script>
