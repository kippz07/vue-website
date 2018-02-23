<template lang="html">
  <div class="android">
    <input type="text" v-model="word">
    <h1>{{ word }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      word: ''
    }
  }
}
</script>

<style lang="css">
</style>
