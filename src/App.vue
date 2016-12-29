<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Job></Job>
  </div>
</template>
<script>
import Job from './components/Job'
export default {
  name: 'app',
  components: {
    Job
  }
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
</style>
