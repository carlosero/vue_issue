<template>
  <div id="app">
    <p @click="counter += 1">{{ message }} | {{counter}}</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      message: "Hello Vue!",
      counter: 0
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
