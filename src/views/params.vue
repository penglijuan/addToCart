<template>
  <div>这是params传参组件</div>
</template>

<script>
export default {
  created () {
    console.log(this.$route.params) // 通过params传参
  }
}
</script>

<style scoped>

</style>
