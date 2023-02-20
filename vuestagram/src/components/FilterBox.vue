<template>
  <div @click="selectFilter" :class="필터 + ' filter-item'" :style="`background-image:url(${url})`">
    <!-- <slot name="a"></slot> -->
    <!-- <slot name="b"></slot> -->
    <slot>{{필터}}</slot>
    <!-- <button @click="fire">버튼</button> -->
  </div> 
</template>

<script>
export default {
  name: 'filterBox',
  props: {
    url: String,
    필터 : String
  },
  methods: {
    fire(){
      this.emitter.emit('작명', '데이터')
    },
    selectFilter(){
      this.emitter.emit('selFil', this.필터)
    }
  },
}
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
}
</style>