import { reactive, ref } from "vue";

/*
使用axios发送异步ajax请求
*/
export default function useUrlLoader() {
  const result = reactive([
    {
      id: 1,
      title: "标题1",
      price: 4,
    },
    {
      id: 2,
      title: "标题2",
      price: 4,
    },
  ]);
  const loading = ref(true);
  const errorMsg = ref("未知错误");
  // axios
  //   .get(url)
  //   .then((response) => {
  //     loading.value = false;
  //     result.value = response.data;
  //   })
  //   .catch((e) => {
  //     loading.value = false;
  //     errorMsg.value = e.message || "未知错误";
  //   });

  return {
    loading,
    result,
    errorMsg,
  };
}
