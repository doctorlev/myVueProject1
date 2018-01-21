<template>
  <div>
    <button @click= "emitClickEvent();">Show figure in Element 2</button>
  </div>
</template>

<script>
export default {
  name: 'Rec',
  data () {
    return {
      msg: 'This is REC vue component'
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
