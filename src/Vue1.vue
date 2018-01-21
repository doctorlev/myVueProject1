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
      <svg height="110" width="500">
        <polygon points="100,10 170,100 50,100" style="fill:red;stroke:purple;stroke-width:1"/>
      </svg>
      <p>To hide the figure - use the button</p>
      <button @click= "hideElement">Hide Me</button>
    </div>
  </div>
</template>

<script>

// import Tri from './components/Tri'
// import Rec from './components/Rec'
// import Cir from './components/Cir'
// import Elem1 from './Elem1'

export default {
    // name: 'drawme',
    components: {
        // Tri,
        // Rec,
        // Cir
    },
    data() {
      return {
        title: "Element One (Tri)",
        name: "Triangle",
        seen: false
      }
    }
}

</script>
