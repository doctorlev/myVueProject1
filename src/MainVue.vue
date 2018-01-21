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
    <h1>This is MainVue Instance</h1>
    <Tri @clicked="letsDrawTriangle();"/>
    <Rec @clicked="letsDrawRectangle();"/>
    <Cir @clicked="letsDrawCirle();"/>
    <p>Click the button to display a figure</p>
  </div>
</template>

<script>

import Tri from './components/Tri'
import Rec from './components/Rec'
import Cir from './components/Cir'
import Vue1 from './Vue1'

export default {
    // name: 'drawme',
    components: {
        Tri,
        Rec,
        Cir
    },
    methods: {
      letsDrawTriangle() {
        alert('drawing triangle');
        Vue1.seen = true;
      },
      letsDrawRectangle() {
        alert('drawing rectangle');
        // vue2.seen = true;
      },
      letsDrawCirle() {
        // vue3.seen = true;
      }
    }
}

</script>
