<template>
  <div id="app">
   <div><router-link to="/addToCart">加入购物车小球动画</router-link></div>
    <div><router-link to="/animate">用过渡class实现动画</router-link></div>
    <div><router-link to="/listAnimate">列表动画</router-link></div>
    <div><router-link to="/componetAnimate?id=10">组件切换动画</router-link></div> // 通过query方式传参
    <div><router-link to="/params/12">pramas传参</router-link></div>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">

</style>
