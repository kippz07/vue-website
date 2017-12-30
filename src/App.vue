<template>
  <div id="app">
    <header>
      <h1>My site</h1>
    </header>
    <main>
      <aside class="sidebar">
        <ul>
          <li>Home</li>
          <li>Android</li>
          <li>Sparta</li>
        </ul>
      </aside>
      <div class="content">
        <img src="./assets/logo.png">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  main {
    display: flex;
    height: calc(100vh - 90px);
    max-width: 1200px;
    margin-top: 90px;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
  }
  header {
    position: fixed;
    top: 0;
    width: 100%;
    min-height: 90px;
    border-bottom: 1px solid #42b983;
    text-align: center;
    background: #ffffff;
  }
  aside {
    height: 100%;
    overflow-y: auto;
    width: 25%;
    padding: 50px 30px;
    box-sizing: border-box;
    border-right: 1px solid #42b983;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  .content {
    flex: 1 1 70%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
