import Vue from 'vue'
import CustomComponent from './custom-component.vue'

new Vue({
  el: '#app',
  render: h => h(CustomComponent)
})
