import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import { routes } from './routes'
import Vuelidate from 'vuelidate'
import { store } from './store/store'
import VueNativeSock from 'vue-native-websocket'
// import VueSocketIO from 'vue-socket.io'

 
// Vue.use(new VueSocketIO({
//     debug: true,
//     // connection: 'http://192.168.0.177:3000',
// }))

// Vue.use(VueNativeSock, 'ws://192.168.0.177:8047/gamewebsocket' ,{ format: 'json'})

Vue.use(VueRouter)
Vue.use( Vuelidate )

Vue.use(require('vue-pusher'), {
	api_key: '5be92aaa0743e7f3f10c',
	options: {
		cluster: 'eu',
		encrypted: true,
		app_id: "642371",
		secret: "f519ecb986008ef9673c"
	}
});
const router = new VueRouter ({
	mode: 'history',
	routes: routes
})

var vm = new Vue({
  router: router,
  store,
  render: h => h(App)
}).$mount('#app')
