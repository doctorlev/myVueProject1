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
    <div>
      <Tri @clicked="letsDrawTriangle();"/>
      <Rec @clicked="letsDrawRectangle();"/>
      <Cir @clicked="letsDrawCirle();"/>
    </div>
    <p>Click the button to display a figure</p>
  </div>
</template>

<script>

import Tri from './components/Tri'
import Rec from './components/Rec'
import Cir from './components/Cir'

import bus from './bus'

export default {
    components: {
        Tri,
        Rec,
        Cir
    },
    methods: {
      letsDrawTriangle() {
        bus.$emit ('drawTriangle')
      },
      letsDrawRectangle() {
        bus.$emit ('drawRectangle')
      },
      letsDrawCirle() {
        bus.$emit ('drawCircle')
      }
    }
}

</script>
