<template>
  <div class="home">
    <h2 v-if="loading">Loading...</h2>
    <h2 v-else-if="errorMsg">{{ errorMsg }}</h2>
    <ul v-for="p in result" :key="p.id">
      <li>id: {{ p.id }}</li>
      <li>title: {{ p.title }}</li>
      <li>price: {{ p.price }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref, watch } from "vue";
import useUrlLoader from "../hooks/useRequest";
interface AddressResult {
  id: number;
  name: string;
  distance: string;
}

interface ProductResult {
  id: number;
  title: string;
  price: number;
}

export default defineComponent({
  name: "Home",
  setup() {
    const { loading, result, errorMsg } = useUrlLoader();
    console.log("result", result);

    watch(result, () => {
      console.log("result", result);
    });
    return {
      loading,
      result,
      errorMsg,
    };
  },
});
</script>
