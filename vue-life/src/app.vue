<style>
  @import './app.css';
  @import 'https://cdn.jsdelivr.net/npm/animate.css@3.5.1';
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
      <dt v-for="(value, key, index) in computedVForData" :key="index">
        <div id="text">{{index}}. {{key}}: {{value}}</div>
      </dt>
      <dt>
        <div id="line">
          <button @click="say('hi')">Say hi</button>
          <button @click="say('what')">Say what</button>
        </div>
      </dt>
      <dt>
        <button click="warn('Form cannot be submitted yet.', $event)">
          Submit
        </button>
      </dt>
      <dt>
        <div id="line">
          <input v-model="inputMessage" placeholder="edit me">
          Message is: {{ inputMessage }}
        </div>
        <div id="line">
          <span>Multiline message is:</span>
          <p style="white-space: pre-line;">{{ textareaMessage }}</p>
          <textarea v-model="textareaMessage" placeholder="add multiple lines"></textarea>
        </div>
        <div id="line">
          <input type="checkbox" id="checkbox" v-model="checked">
          <label for="checkbox">{{ checked }}</label>
        </div>
        <div id="line">
          <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
          <label for="jack">Jack</label>
          <input type="checkbox" id="john" value="John" v-model="checkedNames">
          <label for="john">John</label>
          <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
          <label for="mike">Mike</label>
          <br>
          <span>Checked names: {{ checkedNames }}</span>
        </div>
        <div id="line">
          <input type="radio" id="one" value="One" v-model="picked">
          <label for="one">One</label>
          <br>
          <input type="radio" id="two" value="Two" v-model="picked">
          <label for="two">Two</label>
          <br>
          <span>Picked: {{ picked }}</span>
        </div>
        <div id="line">
          <select v-model="selected">
            <option disabled value="">请选择</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
          <span>Selected: {{ selected }}</span>
        </div>
        <div id="line">
          <select v-model="multipleSelected" multiple style="width: 50px;">
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
          <br>
          <span>Selected: {{ multipleSelected }}</span>
        </div>
      </dt>
      <dt>
        <div id="line">
          <button @click="showTransition = !showTransition">
            Toggle
          </button>
          <transition name="fade">
            <div v-if="showTransition">transition</div>
          </transition>
        </div>
      </dt>
      <dt>
        <div id="line">
          <button @click="showSlideFade = !showSlideFade">
            Toggle render
          </button>
          <transition name="slide-fade">
            <div v-if="showSlideFade">showSlideFade</div>
          </transition>
        </div>
      </dt>
      <dt>
        <div id="line">
          <button @click="showBounce = !showBounce">Toggle bounce</button>
          <transition name="bounce">
            <div v-if="showBounce">showBounce</div>
          </transition>
        </div>
      </dt>
      <dt>
        <div id="line">
          <button @click="showAnimateCss = !showAnimateCss">
            Toggle animateCss
          </button>
          <transition name="custom-classes-transition" enter-active-class="animated tada"
            leave-active-class="animated bounceOutRight" @before-enter="beforeAnimateEnter" @enter="animateEnter"
            @after-enter="afterAnimateEnter" v-on:enter-cancelled="enterAnimateCancelled"
            @before-leave="beforeAnimateLeave" @leave="animateLeave" @after-leave="afterAnimateLeave"
            @leave-cancelled="leaveAnimateCancelled">
            <div v-if="showAnimateCss">showAnimateCss</div>
          </transition>
        </div>
      </dt>
      <dt>
        <div id="line">
          <div>
            <button v-on:click="add">Add</button>
            <button v-on:click="remove">Remove</button>
            <transition-group name="list" tag="p">
              <span v-for="item in items" v-bind:key="item" class="list-item">
                {{ item }}
              </span>
            </transition-group>
          </div>
        </div>
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

  const animateLifeCycle = {
    beforeAnimateEnter: function (el) {
      // eslint-disable-next-line
      console.log('「beforeAnimateEnter」', el)
    },
    // 当与 CSS 结合使用时
    // 回调函数 done 是可选的
    animateEnter: function (el, done) {
      // eslint-disable-next-line
      console.log('「animateEnter」', el, done)
    },
    afterAnimateEnter: function (el) {
      // eslint-disable-next-line
      console.log('「afterAnimateEnter」', el)
    },
    enterAnimateCancelled: function (el) {
      // eslint-disable-next-line
      console.log('「enterAnimateCancelled」', el)
    },

    // --------
    // 离开时
    // --------

    beforeAnimateLeave: function (el) {
      // eslint-disable-next-line
      console.log('「beforeAnimateLeave」', el)
    },
    // 当与 CSS 结合使用时
    // 回调函数 done 是可选的
    animateLeave: function (el, done) {
      // eslint-disable-next-line
      console.log('「animateLeave」', el, done)
    },
    afterAnimateLeave: function (el) {
      // eslint-disable-next-line
      console.log('「afterAnimateLeave」', el)
    },
    // leaveCancelled 只用于 v-show 中
    leaveAnimateCancelled: function (el) {
      // eslint-disable-next-line
      console.log('「leaveAnimateCancelled」', el)
    }
  }

  const listAnimation = {
    randomIndex: function () {
      return Math.floor(Math.random() * this.items.length)
    },
    add: function () {
      this.items.splice(this.randomIndex(), 0, this.nextNum++)
    },
    remove: function () {
      this.items.splice(this.randomIndex(), 1)
    },
  }

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
    },
    inputMessage: '',
    textareaMessage: '',
    checked: false,
    checkedNames: [],
    picked: '',
    selected: '',
    multipleSelected: '',
    showTransition: true,
    showSlideFade: true,
    showBounce: true,
    showAnimateCss: true,

    items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    nextNum: 10
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
      computedVForData: function () {
        return this.vForData.map(value => {
          return `computedVForData-${value}`;
        });
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
      ...animateLifeCycle,
      ...listAnimation,
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
      },
      say(message) {
        alert(message)
      },
      warn(message, event) {
        // 原生事件
        // eslint-disable-next-line
        console.log('「app」「warn」', event)
        if (event) event.stopPropagation()
        alert(message)
      },
    },
  }
</script>