<template>
  <div>
    <div>
      <a href="" @click.prevent="comName='login'">注册</a>
      <a href="" @click.prevent="comName='register'">登录</a>
    </div>
    <transition mode="out-in">
      <component :is="comName"></component>
    </transition>
  </div>
</template>

<script>
import login from '../components/login'
import register from '../components/register'
export default {
  data () {
    return {
      comName: ''
    }
  },
  created () {
    // 通过query传参
    console.log(this.$route.query.id)
  },
  components: {
    login,
    register
  }
}
</script>

<style scoped>
  .v-enter, v-leave-to{
    opacity: 0;
    transform: translateX(150px);
  }
  .v-enter-active, .v-leave-active{
    transition: all 0.2s;
  }
</style>
