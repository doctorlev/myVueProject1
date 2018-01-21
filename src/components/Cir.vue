<template>
  <div>
    <button @click= "emitClickEvent();">Show figure in Element 3</button>
  </div>
</template>

<script>
export default {
  name: 'Cir',
  data () {
    return {
      msg: 'This is TRI vue component'
    }
  },
  methods: {
    emitClickEvent() {
      // alert('works');
      this.$emit('clicked');
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
