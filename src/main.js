import Vue from 'vue'
import MainVue from './MainVue'
import Vue1 from './Vue1'
import Vue2 from './Vue2'
import Vue3 from './Vue3'

Vue.config.productionTip = false

var mainvue = new Vue({
// new Vue({
  el: '#drawme',
  template: '<MainVue/>',
  components: {MainVue}
  // methods: {
  //   letsDrawTriangle() {
  //     alert('drawing triangle');
  //     // vue1.seen = true;
  //   },
  //   letsDrawRectangle() {
  //     // alert('drawing triangle');
  //     // vue2.seen = true;
  //   },
  //   letsDrawCirle() {
  //     // vue3.seen = true;
  //   }
  // }
});
//
var vue1 = new Vue({
  el: '#elem1',
  template: '<Vue1/>',
  components: {Vue1},
  methods: {
    hideElement() {
      // alert('works');
      this.seen = false;
    }
  }
});

var vue2 = new Vue({
  el: '#elem2',
  template: '<Vue2/>',
  components: {Vue2},
  methods: {
    hideElement() {
      this.seen = false;
    }
  }
});
//
var vue3 = new Vue({
  el: '#elem3',
  template: '<Vue3/>',
  components: {Vue3},
  methods: {
    hideElement() {
      this.seen = false;
    }
  }
});



//
// function setup() {
//   // createCanvas(640, 360);
//   let canvas = createCanvas(100, 100);
//   // canvas.parent('#canvas');
// };
// function draw() {
//     background(0,0,255);
//     fill(255,255,0);
//     ellipse(50,50,100,100); //renders centered :')
// };

// Vue.component('tri', {
//   template: '<button @click= "emitClickEvent();">Show figure in Element 1</button>',
//   methods: {
//     emitClickEvent() {
//       // alert('works');
//       this.$emit('clicked');
//     }
//   }
// });


// Vue.component('qua', {
//   template: '<button @click= "emitClickEvent">Show figure in Element 2</button>',
//   methods: {
//     emitClickEvent() {
//       // alert('works');
//       this.$emit('clicked');
//     }
//   }
// });
//
// Vue.component('cir', {
//   template: '<button @click= "emitClickEvent">Show figure in Element 3</button>',
//   methods: {
//     emitClickEvent() {
//       // alert('works');
//       this.$emit('clicked');
//     }
//   }
// });
