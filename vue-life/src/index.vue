<template>
  <div id="app">
    <dl>
      <dt><img alt="Vue logo" src="./assets/logo.png" /></dt>
      <dt>
        <HelloWorld message="Save you from anything" /></dt>
    </dl>
  </div>
</template>

<script>
  import HelloWorld from './components/hello-world/hello-world.vue'

  export default {
    name: 'app',
    components: {
      HelloWorld
    }
  }
</script>

<style>
  @import './index.css';
</style>
