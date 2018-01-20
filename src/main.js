// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Elem1 from './Elem1'
import MainVue from './MainVue'
//
Vue.config.productionTip = false
//
var mainVue = new Vue({
  el: '#mainVue',
  template: '<MainVue/>',
  components: { MainVue }
});
var vue1 = new Vue({
  el: '#elem1',
  template: '<Elem1/>',
  components: { Elem1 }
  
  // methods: {
  //   hideElement() {
  //     // alert('works');
  //     this.seen = false;
  //   }
  // }
});
