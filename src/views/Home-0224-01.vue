<template>
  <div class="home">
    {{ count }}
    <button @click="add">点我加一</button>
    <br />
    {{ x }}: {{ y }}
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref, watch } from "vue";

import userMousePosition from "../hooks/userMousePosition";
export default defineComponent({
  name: "Home",
  setup() {
    // 变量
    console.log("------setup------");
    let count = ref(1);
    let obj = reactive({
      name: "张三",
      age: 18,
    });

    const { x, y } = userMousePosition();

    // 生命周期
    onMounted(() => {
      console.log("-----setup:mounted-----");
    });

    // 方法
    const add = () => {
      count.value += 1;
      obj.age += 1;
    };

    // 监听
    watch(count, (val, oldVal) => {
      console.log("-----watch:count-----", val, oldVal);
    });
    watch(
      obj,
      (val) => {
        console.log("-----watch:obj-----", val);
      },
      {
        deep: true,
      }
    );

    watch(
      [count, () => obj.age],
      (values) => {
        console.log("-----watch:[count, obj]-----", values);
      },
      {
        deep: true,
      }
    );

    return {
      count,
      add,
      x,
      y,
    };
  },
  mounted() {
    console.log("------mounted------");
  },
});
</script>
