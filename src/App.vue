<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <job></job>
  </div>
</template>

<script>
import Job from './components/Job'

export default {
  components: {
    Job
  }
}
</script>

<style>
html {
  height: 100%;
  width: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
#app {
}
#app a {
  color: #42b983;
  text-decoration: none;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
