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
        <normal-button :content="normalButton.freezeObject.content" :click="onUpdateFreeze" />
        <normal-button :content="normalButton.normalObject.content" :click="onUpdateNormal" />
      </dt>
      <dt>
        <div id="text" v-once>「v-once」: {{ vOnce }}</div>
      </dt>
      <dt>
        <div v-html="vHtml" />
      </dt>
      <dt>
        <a id="href" :href="homePage">「CaMnter」homePage</a>
      </dt>
      <dt>
        <div id="text">「computedValue」: {{ computedValue }}</div>
      </dt>
      <dt>
        <div id="text">「watchedValue」: {{ watchedValue }}</div>
      </dt>
    </dl>

  </div>
</template>

<script>
  import HelloWorld from './components/hello-world/hello-world.vue';
  import TitleDate from './components/title-date/title-date.vue';
  import NormalButton from './components/normal-button/normal-button.vue';

  const freezeObject = {
    content: 'updateFreeze'
  }

  Object.freeze(freezeObject);

  const data = {
    helloWorld: {
      message: 'Save you from anything'
    },
    titleDate: {
      tip: '一个提示',
      content: '一个内容',
    },
    normalButton: {
      content: '一个按钮',
      freezeObject: freezeObject,
      normalObject: {
        content: 'updateNormal'
      }
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
    ],
    vOnce: 'CaMnter',
    vHtml: '<div id="text" style="color: red">「v-html」: CaMnter</div>',
    homePage: 'https://www.camnter.com',
    value: 2333,
    watchedValue: 0,
  };

  export default {
    name: 'app',
    components: {
      HelloWorld,
      TitleDate,
      NormalButton,
    },
    created: function () {
      setTimeout(() => {
        this.value = 2333333
      }, 2333);
    },
    data() {
      return data;
    },
    computed: {
      computedValue: function () {
        console.log('「app」「computedValue」', this.value)
        return `computedValue ${this.value}`
      }
    },
    watch: {
      value: function (newValue, oldValue) {
        console.log('「app」「watch」「value」', newValue, oldValue)
        this.watchedValue = `watched ${newValue}`
      }
    },
    methods: {
      onNormalButtonClick() {
        this.normalButton.content = this.normalButton.content.split('').reverse().join('')
      },
      onUpdateFreeze() {
        this.normalButton.freezeObject.content = `${this.normalButton.freezeObject.content} *`
      },
      onUpdateNormal() {
        this.normalButton.normalObject.content = `${this.normalButton.normalObject.content} ~`
      }
    },
  }
</script>