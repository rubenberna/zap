import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FullCalendar from 'vue-full-calendar'
import 'fullcalendar/dist/fullcalendar.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Delay from 'vue-delay'

Vue.config.productionTip = false

Vue.use(FullCalendar)
Vue.use(ElementUI)
Vue.use(Delay)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
