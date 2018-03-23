// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import VueResource from 'vue-resource'
import router from './router'
import axios from 'axios'
Vue.config.productionTip = false
/*import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.axios.get(api).then ((response) => {
	console.log(response.data);
})

this.axios.get(api).then((response) => {
	console.log(response.data);
})

this.$http.get(api).then((response) => {
	console.log(response.data);
})*/
/* eslint-disable no-new */

//Vue.use(vueResource)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
