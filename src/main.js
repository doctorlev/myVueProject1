Vue.component('tri', {
  template: '<button @click= "emitClickEvent();">Show figure in Element 1</button>',
  methods: {
    emitClickEvent() {
      // alert('works');
      this.$emit('clicked');
    }
  }
});

Vue.component('qua', {
  template: '<button @click= "emitClickEvent">Show figure in Element 2</button>',
  methods: {
    emitClickEvent() {
      // alert('works');
      this.$emit('clicked');
    }
  }
});

Vue.component('cir', {
  template: '<button @click= "emitClickEvent">Show figure in Element 3</button>',
  methods: {
    emitClickEvent() {
      // alert('works');
      this.$emit('clicked');
    }
  }
});

var vue1 = new Vue({
  el: '#elem1',
  data: {
    title: "Element One (Tri)",
    name: "Triangle",
    seen: false
  },
  methods: {
    hideElement() {
      // alert('works');
      this.seen = false;
    }
  }
});

var vue2 = new Vue({
  el: '#elem2',
  data: {
    title: "Element Two (Rect)",
    name: "Rectangle",
    seen: false
  },
  methods: {
    hideElement() {
      this.seen = false;
    }
  }
});
//
var vue3 = new Vue({
  el: '#elem3',
  data: {
    title: "Element Three (Cir)",
    name: "Circle",
    seen: false
  },
  methods: {
    hideElement() {
      this.seen = false;
    }
  }
});

var mainVue = new Vue({
  el: '#drawme',
  methods: {
    letsDrawTriangle() {
      // alert('drawing triangle');
      vue1.seen = true;
    },
    letsDrawRectangle() {
      // alert('drawing triangle');
      vue2.seen = true;
    },
    letsDrawCirle() {
      vue3.seen = true;
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
