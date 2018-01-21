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
    <Rec @clicked="letsDrawRectangle();"></Rec>
    <Cir @clicked="letsDrawCirle();"></Cir>
  </div>
</template>

<script>

import Tri from './components/Tri'
import Rec from './components/Rec'
import Cir from './components/Cir'
// import Elem1 from './Elem1'

export default {
    // name: 'drawme',
    components: {
        Tri,
        Rec,
        Cir
    }
}

</script>
