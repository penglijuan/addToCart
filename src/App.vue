<template>
  <div id="app">
    <div id="cart">
      <input type="button" value="加入购物车" @click="flag = !flag"/>
      <transition
        @before-enter = "beforeEnter"
        @enter = "enter"
        @after-enter ="afterEnter">
        <div class="circle" v-if="flag" ></div>
      </transition>
    </div>
  </div>
</template>

<style lang="scss">
  .circle{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: red;
  }
</style>

<script>
export default {
  data () {
    return {
      flag: false
    }
  },
  methods: {
    beforeEnter (el) {
      el.style.transform = 'translate(0, 0)'
    },
    enter (el, done) {
      // offsetWidth使浏览器重绘
      console.log(el.offsetWidth)
      el.style.transform = 'translate(100px, 450px)'
      el.style.transition = 'all 0.5s'
      done() // done()是对afterEnter的引用
    },
    afterEnter (el) {
      // 动画结束，隐藏小球
      this.flag = false
    }
  }
}
</script>
