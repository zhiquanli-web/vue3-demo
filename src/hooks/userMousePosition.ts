// 实时获取点击屏幕的坐标

import { onMounted, onUnmounted, ref } from "vue";

export default function useMousePosition() {
  const x = ref(-1);
  const y = ref(-1);

  // 点击事件坐标函数
  const updatePosition = (e: MouseEvent) => {
    x.value = e.pageX;
    y.value = e.pageY;
  };

  onMounted(() => {
    document.addEventListener("click", updatePosition);
  });

  onUnmounted(() => {
    document.removeEventListener("click", updatePosition);
  });

  return {
    x,
    y,
  };
}
