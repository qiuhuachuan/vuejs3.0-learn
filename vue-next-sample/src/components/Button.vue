<template>
  <div>
    <button @click="onClick">{{ probs.text }}</button>
  </div>
</template>

<script>
export default {
  setup(probs, { emit }) {
    const onClick = () => {
      console.log("inner click");
      emit("outClick", Date.now());
    };
    return {
      probs,
      onClick
    };
  }
};
</script>

<style>
</style>