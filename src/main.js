// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import Job from './components/Job'
import NewJob from './components/NewJob'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Home
}, {
  path: '/job',
  component: Job
}, {
  path: '/newJob',
  component: NewJob
}
]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ...App
})
