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
      <svg width="110" height="110">
         <circle cx="50" cy="50" r="47" stroke="green" stroke-width="4" fill="yellow" />
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
        title: "Element Three (Cir)",
        name: "Circle",
        seen: true
      }
    },
    methods: {
      hideElement() {
        // alert('works');
        this.seen = false;
      }
    }
}

</script>
