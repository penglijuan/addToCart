<template>
  <div>
    <div>
      <input type="button" value="左右动画" @click="flag = !flag"/>
      <transition>
        <h3 v-if="flag">这是动画元素</h3>
      </transition>
    </div>

    <div>
      <input type="button" value="上下动画" @click="flag2 = !flag2"/>
      <transition name="my">
        <h6 v-if="flag2">这是动画元素</h6>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      flag: false,
      flag2: false
    }
  }
}
</script>

<style scoped>
  .v-enter, .v-leave-to {
    opacity: 0;
    transform: translateX(100px) ;
  }
  .v-enter-active, .v-leave-active {
    transition: all 0.5s;
  }

  .my-enter, .my-leave-to {
    opacity: 0;
    transform: translateY(100px) ;
  }
  .my-enter-active, .my-leave-active {
    transition: all 0.5s;
  }
</style>
