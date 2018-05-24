import Vue from 'vue/dist/vue.js'

var App = Vue.component('app', {
  data: function () {
    return {
      message: "Hello Vue!",
      counter: 0
    }
  },
  template: '<p @click="counter += 1">{{ message }} | {{counter}}</p>'
})

document.addEventListener('turbolinks:load', () => {
  var el = document.getElementById('test')
  if (el != null) {
    var app = new Vue({
      el: el,
      components: { App }
    })
  }
})
