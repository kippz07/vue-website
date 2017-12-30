<template lang="html">
  <div class="home">
    <h1>Home</h1>
    <h2>Me</h2>
    <div class="index">
      <router-link
       :to="{ name: 'home', params: {} }">
       <div class="box">
         <p>Home</p>
       </div>
      </router-link>
      <router-link
       :to="{ name: 'android', params: {} }">
       <div class="box">
         <p>Android</p>
       </div>
      </router-link>
      <div class="box">
        <p>Sparta</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="css">
  .box {
    width: 100px;
    height: 100px;
    border-color: black;
    border-width: 1px;
    border-style: solid;
    display: inline-block;
  }
  p {
    margin-top: 37px;
  }
</style>
