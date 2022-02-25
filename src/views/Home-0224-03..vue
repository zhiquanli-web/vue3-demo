<template>
  <div class="home">
    <h2>App</h2>
    <h3>foo: {{ foo }}</h3>
    <h3>bar: {{ bar }}</h3>
    <!-- <h3>foo2: {{ foo2 }}</h3>
    <h3>bar2: {{ bar2 }}</h3> -->
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  setup() {
    const state = reactive({
      foo: "a",
      bar: "b",
    });
    // const stateAsRefs = toRefs(state);
    // console.log('satae', state.foo);

    setTimeout(() => {
      state.foo += "--";
      state.bar += "--";
    }, 2000);

    // function useReatureX() {
    //   const state = reactive({
    //     foo2: "a",
    //     bar2: "b",
    //   });

    //   setTimeout(() => {
    //     state.foo2 += "++";
    //     state.bar2 += "++";
    //   }, 2000);

    //   return toRefs(state);
    // }

    // const { foo2, bar2 } = useReatureX();

    return {
      ...state,
      // ...stateAsRefs,
    };
  },
});
</script>
