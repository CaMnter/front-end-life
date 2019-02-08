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
      <dt>
        <div :class="computedBindClass">「bind:class」: computedBindClass</div>
      </dt>
      <dt>
        <div :class="computedBindClassArray">「bind:class」「array」: computedBindClassArray</div>
      </dt>
      <dt>
        <div :style="computedBindStyle">「bind:style」: computedBindStyle</div>
      </dt>
      <dt>
        <div id="base_flex_row_start_start" style="justify-content: center">
          <template v-if="loginType === 'user'">
            <label id="text">User</label>
            <input style='margin-top: 10px' placeholder="Enter your username">
          </template>
          <template v-else>
            <label id="text">Email</label>
            <input style='margin-top: 10px' placeholder="Enter your email address">
          </template>
          <normal-button :content="keySwitchButton.content" :click="loginTypeSwitchButtonClick" />
        </div>
      </dt>
      <dt>
        <div id="base_flex_row_start_start" style="justify-content: center">
          <template v-if="keyLoginType === 'user'">
            <label id="text">User</label>
            <input style='margin-top: 10px' placeholder="Enter your username" key="user">
          </template>
          <template v-else>
            <label id="text">Email</label>
            <input style='margin-top: 10px' placeholder="Enter your email address" key="email">
          </template>
          <normal-button :content="keySwitchButton.content" :click="keyLoginTypeSwitchButtonClick" />
        </div>
      </dt>
      <dt v-for="(item, index) in vForData" :key="index">
        <div id="text">{{item}}</div>
      </dt>
      <dt v-for="(value, key, index) in vForObject" :key="index">
        <div id="text">{{index}}. {{key}}: {{value}}</div>
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

  const LOGIN_TYPE_USER = 'user'
  const LOGIN_TYPE_EMAIL = 'email'

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
    keySwitchButton: {
      content: 'swtich',
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
    loginType: LOGIN_TYPE_USER,
    keyLoginType: LOGIN_TYPE_USER,
    vForData: [
      '「v-for」one',
      '「v-for」two',
      '「v-for」three',
    ],
    vForObject: {
      one: '「v-for object」',
      two: '「v-for object」',
      three: '「v-for object」',
    }
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
        // eslint-disable-next-line
        console.log('「app」「computedValue」', this.value)
        return `computedValue ${this.value}`
      },
      computedBindClass: function () {
        return {
          text: true
        }
      },
      computedBindClassArray: function () {
        return ['text', 'chocolate']
      },
      computedBindStyle: function () {
        return {
          'font-family': 'cursive',
          'margin': ' 5px 5px 0px 5px',
          'padding': '5px',
          'color': 'cornflowerblue',
          'font-size': '14px',
        }
      },
    },
    watch: {
      value: function (newValue, oldValue) {
        // eslint-disable-next-line
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
      },
      loginTypeSwitchButtonClick() {
        switch (this.loginType) {
          case LOGIN_TYPE_USER:
            this.loginType = LOGIN_TYPE_EMAIL
            break;
          case LOGIN_TYPE_EMAIL:
            this.loginType = LOGIN_TYPE_USER
            break;
          default:
            break;
        }
      },
      keyLoginTypeSwitchButtonClick() {
        switch (this.keyLoginType) {
          case LOGIN_TYPE_USER:
            this.keyLoginType = LOGIN_TYPE_EMAIL
            break;
          case LOGIN_TYPE_EMAIL:
            this.keyLoginType = LOGIN_TYPE_USER
            break;
          default:
            break;
        }
      }
    },
  }
</script>