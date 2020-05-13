<template>
  <div>
    <button @click="onClick">{{ props.text }}</button>
  </div>
</template>

<script>
export default {
  props: {
    text: String
  },
  setup(props, { emit }) {
    const onClick = () => {
      console.log('inner click')
      console.log(props)
      emit('outClick', Date.now())
    }
    return {
      props,
      onClick
    }
  }
}
</script>

<style></style>
