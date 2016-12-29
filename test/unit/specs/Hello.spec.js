import Vue from 'vue'
import Hello from 'src/components/Hello'

describe('Job.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Hello)
    })
    expect(vm.$el.querySelector('.job h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
})
