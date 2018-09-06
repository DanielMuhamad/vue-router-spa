import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import VueCharts from 'vue-chartjs'
import routes from './router/index'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import faIcon from './icons/fontAwesome'
import { Bar, Line } from 'vue-chartjs'

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(faIcon)
Vue.use(VueCharts),
Vue.use(Bar, Line)
Vue.config.productionTip = false

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')