<template>
  <div>
    <div>{{ state.title }}</div>
    <button @click="increment">Add {{ count }}</button>
    <br />
    <button @click="reverseTitle">反转title</button>
    <div>
      计算1到10000之间包含了多少个0：
      <span>{{ zerosCount }}</span>
    </div>
    <br />
    <Button @outClick="onOutClick" text="Foo"></Button>
  </div>
</template>

<script>
// export default {
//   setup() {

//   }
// };

// 需要用到哪个函数，就导入哪个函数，体现了Vue更加合理的 “渐进式”
// tree shaking 代码打包后体积更加小
// 在 webpack 中设置 optimization对象 的 属性usedExports: true，模块只导出被使用的成员
// 并且开启压缩 minimize: true，仅针对逐个导出的函数有效
import { defineComponent } from "vue";
import { ref, reactive } from "vue";
import { onMounted } from "vue";
import { computed } from "vue";

import Button from "./components/Button.vue";

// Data
// Method
// Hooks
// Computed
// Probs
// Emit
// Components

export default defineComponent({
  components: {
    Button
  },

  // 组件初始化的时候执行
  setup() {
    // 为一个基本值创建了一个引用，将0包装为一个对象
    // 内部操作时需要采用 [变量.value] 形式，外部使用时则为 [变量]
    // 基本值 string number boolean 数据响应，需要使用 ref 函数
    let count = ref(0);
    console.log(count);

    // 对象需要数据响应 使用 reactive 函数
    const state = reactive({
      title: "Hello,Vue.js 3.0!"
    });
    console.log(state);

    const increment = function() {
      count.value++;
    };

    const reverseTitle = function() {
      state.title = state.title
        .split("")
        .reverse()
        .join("");
    };

    // Vue2.x 中的 mounted 生命周期函数
    onMounted(() => {
      console.log("mounted");
    });

    // 计算属性
    const zerosCount = computed(() => {
      return new Array(10000)
        .fill("")
        .map((value, index) => index + 1)
        .join("")
        .match(/0/g).length;
    });

    const onOutClick = now => {
      console.log("子组件触发向父组件触发事件与传值:", now);
    };

    // setup 返回值中的成员可以直接在模版中使用
    return {
      state,
      count,
      increment,
      reverseTitle,
      zerosCount,
      onOutClick
    };
  }
});
</script>

<style>
div {
  color: blue;
}
</style>
