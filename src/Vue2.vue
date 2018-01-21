<style>
  #appStyle {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: left;
      color: #2c3e50;
      margin-top: 60px;
  }
</style>

<template>
  <div id="appStyle">
    <h2> {{title}} </h2>
    <div v-if="seen != true">
      <p>The <span>{{name}} </span>is hidden</p>
    </div>
    <div id="canvas" v-if="seen" >
      <svg width="400" height="110">
        <rect width="300" height="100" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
      </svg>
      <p>To hide the figure - use the button</p>
      <button @click= "hideElement">Hide Me</button>
    </div>
  </div>
</template>

<script>

import bus from './bus'

export default {
    created() {
      // bus.$on('trueSeen', () => alert('changing Seen to true'))
      bus.$on('drawRectangle', () => this.seen = true)
    },
    data() {
      return {
        title: "Element Two (Rect)",
        name: "Rectangle",
        seen: false
      }
    },
    methods: {
      hideElement() {
        this.seen = false;
      }
    }
}

</script>
