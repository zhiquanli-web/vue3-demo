<template>
  <h2>AsyncComp22</h2>
  <p>{{ msg }}</p>
  <template v-for="item in 6" :key="item">
    <span>{{ item }}</span>
  </template>
</template>

<script lang="ts">
export default {
  name: "AsyncComp",
  setup() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          msg: "abc",
        });
      }, 2000);
    });
  },
};
</script>
