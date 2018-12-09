vue<style>
  @import './app.css';
</style>

<template>
  <div id="app">
    <dl>
      <dt>
        <img alt="Vue logo" src="./assets/logo.png" />
      </dt>
      <dt>
        <hello-world message="Save you from anything" />
      </dt>
      <dt>
        <title-date title="camnter-title" content="camnter-content" />
      </dt>
    </dl>
  </div>
</template>

<script>
  import HelloWorld from './components/hello-world/hello-world.vue'
  import TitleDate from './components/title-date/title-date.vue'

  export default {
    name: 'app',
    components: {
      HelloWorld,
      TitleDate
    },
  }
</script>