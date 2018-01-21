import Vue from 'vue'
import MainVue from './MainVue'
import Vue1 from './Vue1'
import Vue2 from './Vue2'
import Vue3 from './Vue3'

Vue.config.productionTip = false

var mainvue = new Vue({
  el: '#drawme',
  template: '<MainVue/>',
  components: {MainVue}
});
//
var vue1 = new Vue({
  el: '#elem1',
  template: '<Vue1/>',
  components: {Vue1}
});

var vue2 = new Vue({
  el: '#elem2',
  template: '<Vue2/>',
  components: {Vue2}
});
//
var vue3 = new Vue({
  el: '#elem3',
  template: '<Vue3/>',
  components: {Vue3}
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
