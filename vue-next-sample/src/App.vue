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
import { ref, reactive, defineComponent, onMounted, computed } from 'vue'

import Button from './components/Button.vue'

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

  setup() {
    let count = ref(0)
    console.log(count)

    const state = reactive({
      title: 'Hello,Vue.js 3.0!'
    })
    console.log(state)

    const increment = function () {
      count.value++
    }

    const reverseTitle = function () {
      state.title = state.title.split('').reverse().join('')
    }

    // Vue2.x 中的 mounted 生命周期函数
    onMounted(() => {
      console.log('mounted')
    })

    // 计算属性
    const zerosCount = computed(() => {
      return new Array(10000)
        .fill('')
        .map((value, index) => index + 1)
        .join('')
        .match(/0/g).length
    })

    const onOutClick = now => {
      console.log('子组件触发向父组件触发事件与传值:', now)
    }

    // setup 返回值中的成员可以直接在模版中使用
    return {
      state,
      count,
      increment,
      reverseTitle,
      zerosCount,
      onOutClick
    }
  }
})
</script>

<style>
div {
  color: blue;
}
</style>
