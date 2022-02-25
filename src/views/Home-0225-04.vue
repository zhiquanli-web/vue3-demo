<template>
  <Suspense>
    <template v-slot:default>
      <AsyncComp />

      <!-- <AsyncAddress/> -->
    </template>

    <template v-slot:fallback>
      <h1>LOADING...</h1>
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineAsyncComponent } from "@vue/runtime-core";
/*
异步组件 + Suspense组件
*/
// import AsyncComp from '../components/AsyncComp.vue'
const AsyncComp = defineAsyncComponent(
  () => import("../components/AsyncComp.vue")
);
export default {
  setup() {
    return {};
  },

  components: {
    AsyncComp,
  },
};
</script>
