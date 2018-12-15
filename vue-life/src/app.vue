vue<style>
  @import './app.css';
</style>

<template>
  <div id="app">
    <dl>
      <dt>
        <hello-world :message="helloWorld.message" />
      </dt>
      <dt>
        <title-date :tip="titleDate.tip" :content="titleDate.content" />
      </dt>
      <dt>
        <normal-button :content="normalButton.content" :click="onNormalButtonClick" />
      </dt>
    </dl>
  </div>
</template>

<script>
  import HelloWorld from './components/hello-world/hello-world.vue'
  import TitleDate from './components/title-date/title-date.vue'
  import NormalButton from './components/normal-button/normal-button.vue'

  export default {
    name: 'app',
    components: {
      HelloWorld,
      TitleDate,
      NormalButton
    },
    data() {
      return {
        helloWorld: {
          message: 'Save you from anything'
        },
        titleDate: {
          tip: '一个提示',
          content: '一个内容',
        },
        normalButton: {
          content: '一个按钮'
        }
      }
    },
    methods: {
      onNormalButtonClick() {
        this.normalButton.content = this.normalButton.content.split('').reverse().join('')
      }
    }
  }
</script>