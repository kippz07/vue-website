<template lang="html">
  <div class="home">
    <h1>Home</h1>
    <div class="me">
      <div class="temp-box">
      </div>
    </div>

    <div class="index container">
      <div class="row">
        <router-link
         :to="{ name: 'home', params: {} }">
         <div class="box col-md-3" @mouseover="hovered = true" @mouseleave="hovered = false" :class="colorHover">
           <img src="../assets/White_square.png" class="img-responsive">
           <p>Home</p>
         </div>
        </router-link>
        <router-link
         :to="{ name: 'android', params: {} }">
         <div class="box col-md-3">
           <img src="../assets/White_square.png" class="img-responsive">
           <p>Android</p>
         </div>
        </router-link>
        <div class="box col-md-3">
          <img src="../assets/White_square.png" class="img-responsive">
          <p>Sparta</p>
        </div>
        <div class="box col-md-3">
          <img src="../assets/White_square.png" class="img-responsive">
          <p>Sparta</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        hovered: false
      }
    },
    computed: {
      colorHover: function () {
        return {
          orange: this.hovered
        }
      }
    }
  }
</script>

<style lang="css">
  .orange {
    background-color: orange;
  }
  .container {
    height: 100%;
  }
  .me {
    height: 300px;
    background-color: orange;
  }
  .temp-box {
    background-color: white;
    width: 100px;
    height: 200px;
  }
  .box {
    position: relative;
    border-color: black;
    border-width: 1px;
    border-style: solid;
    display: inline-block;
  }
  .box img {
    position: relative;
  }
  .box p {
    position: absolute;
    top: 31%;
    right: 45%;
  }
  p {
    margin-top: 37px;
  }
</style>
