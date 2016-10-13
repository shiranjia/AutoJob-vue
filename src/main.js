// The Vue build version to load with the `import` command//import VueRouter from 'vue-router'
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.import App from './App'
import Vue from 'vue'
import Job from './components/Job'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.http.options.xhr = { withCredentials: true }

/* eslint-disable no-new */
new Vue({
  el: '#jobs',
  data: {
    ms: Vue.http.get('http://localhost/rest?sad', {foo: 'bar'}).then((response) => {
      console.log(response.body)
    }, (response) => { // error callback
    })
  },

  render: h => h(Job)
})
