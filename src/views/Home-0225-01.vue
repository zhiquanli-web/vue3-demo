<template>
  <div>this is Home</div>
  <div>{{ obj.a.a1 }}</div>
  <span>{{ obj1.b }}</span>
  <br>
  <span>{{ obj2.b }}</span>
</template>

<script lang="ts">
import { ref, defineComponent, watch, shallowReactive, shallowRef } from "vue";

export default defineComponent({
  name: "Home",
  setup() {
    // shallowReactive : 只处理了对象内最外层属性的响应式(也就是浅响应式) 浅响应式即便是加上deep也无法监听到内层元素的变化
    const obj = shallowReactive({
      a: {
        a1: 2,
      },
      b: 1,
    });
    // shallowRef: 只处理了 value 的响应式, 不进行对象的 reactive 处理
    const obj1 = ref({
      a: {
        a1: 2,
      },
      b: 1,
    });

    const obj2 = shallowRef({
      a: {
        a1: 2,
      },
      b: 3,
    });
    setTimeout(() => {
      obj2.value.b += 1;
    }, 2000);

    // 监听
    watch(
      obj2,
      (val) => {
        console.log("obj", val);
      },
      {
        deep: true,
      }
    );
    return {
      obj,
      obj1,
      obj2,
    };
  },
});
</script>
