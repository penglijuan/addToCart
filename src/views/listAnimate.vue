<template>
  <div>
    <div>
      <label>id:<input type="text" v-model="id"/></label>
      <label>name:<input type="text" v-model="name"/></label>
      <input type="button" value="添加" @click="add"/>
    </div>
    <!--  一组动画要用transition-group,每一项必须设置:key的值-->
    <transition-group appear tag="ul" class="list">
      <li v-for="(item,index) in list" :key="item.id" @click="del(index)">{{item.id}}------{{item.name}}</li>
    </transition-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        { id: 1, name: '张三' },
        { id: 2, name: '李四' },
        { id: 3, name: '王五' }
      ],
      id: '',
      name: ''
    }
  },
  methods: {
    add () {
      this.list.push({
        id: this.id,
        name: this.name
      })
      this.id = this.name = ''
    },
    del (i) {
      this.list.splice(i, 1) // splice在原数组基础上进行删除，slice截取生成新的数组
    }
  }
}
</script>

<style scoped>
  .list li{
    border: 1px solid #999;
    line-height: 35px;
    margin:5px;
    width:100%;
  }
  .v-enter, v-leave-to {
    opacity: 0;
    transform: translateY(50px);
  }
  .v-enter-active, .v-leave-active {
    transition: all 0.5s;
  }
  /* v-move 和 v-leave-active 配合使用 */
  .v-move{
    transition: all 0.5s;
  }
  .v-leave-active {
    position: absolute;
  }
  li:hover {
    background: cadetblue;
  }
</style>
