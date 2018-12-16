<style>
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
      <dt>
        <!-- // TODO test -->
        <todo-item v-for="item in todoItems" :todo="item" :key="item.id" />
      </dt>
    </dl>

  </div>
</template>

<script>
  import HelloWorld from './components/hello-world/hello-world.vue';
  import TitleDate from './components/title-date/title-date.vue';
  import NormalButton from './components/normal-button/normal-button.vue';
  import Vue from 'vue';

  const todoItem = Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
  });

  export default {
    name: 'app',
    components: {
      HelloWorld,
      TitleDate,
      NormalButton,
      'todo-item': 'todoItem',
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
        },
        todoItems: [{
            id: 0,
            text: '蔬菜'
          },
          {
            id: 1,
            text: '奶酪'
          },
          {
            id: 2,
            text: '随便其它什么人吃的东西'
          }
        ]
      }
    },
    methods: {
      onNormalButtonClick() {
        this.normalButton.content = this.normalButton.content.split('').reverse().join('')
      }
    }
  }
</script>