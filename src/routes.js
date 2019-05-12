import dashboard from './components/dashboard.vue'
import myWallet from './components/myWallet.vue'
import tradersOnline from './components/tradersOnline.vue'
import gamesHistory from './components/gamesHistory.vue'
import portfolio from './components/portfolio.vue'
import usersRating from './components/usersRating.vue'
import referralProgram from './components/referralProgram.vue'
import register from './components/register.vue'
import enemy from './components/enemy.vue'
import login from './components/login.vue'
import game1x1 from './components/game1x1.vue'
import createGame from './components/createGame.vue'
import setting from './components/setting.vue'
import profile from './components/profile.vue'
import faq from './components/faq.vue'
import contactSupport from './components/contactSupport.vue'
import publicFaq from './components/publicPart/publicFaq.vue'
import publicRuls from './components/publicPart/publicRuls.vue'
import publicContacts from './components/publicPart/publicContacts.vue'
import publicNews from './components/publicPart/publicNews.vue'
import publicHome from './components/publicPart/publicHome.vue'


import {store} from './store/store'
import axios from 'axios'


export const routes = [
{ path: '/publicHome', component: publicHome, 
// beforeEnter(to, from, next){
// 	if(store.state.authToken){
// 		next()
// 	}else{
// 		next()
// 	}
// }
},
{ path: '/publicFaq', component: publicFaq, 
// beforeEnter(to, from, next){
// 	if(store.state.authToken){
// 		next()
// 	}else{
// 		next()
// 	}
// }
},
{ path: '/publicRuls', component: publicRuls, 
// beforeEnter(to, from, next){
// 	if(store.state.authToken){
// 		next()
// 	}else{
// 		next()
// 	}
// }
},
{ path: '/publicContacts', component: publicContacts, 
// beforeEnter(to, from, next){
// 	if(store.state.authToken){
// 		next()
// 	}else{
// 		next()
// 	}
// }
},
{ path: '/publicNews', component: publicNews, 
// beforeEnter(to, from, next){
// 	if(store.state.authToken){
// 		next()
// 	}else{
// 		next()
// 	}
// }
},

{ path: '/dashboard', component: dashboard , name: 'dashborad', 
// beforeEnter(to, from, next){
// 	if(store.state.authToken){
// 		next()
// 	}else{
// 		next('/login')
// 	}
// }
},
{ path: '/profile', component: profile, 
// beforeEnter(to, from, next){
// 	if(store.state.authToken){
// 		next()
// 	}else{
// 		next('/login')
// 	}
// }
},
{ path: '/contactSupport', component: contactSupport, 
// beforeEnter(to, from, next){
// 	if(store.state.authToken){
// 		next()
// 	}else{
// 		next('/login')
// 	}
// }
},
{ path: '/faq', component: faq, 
// beforeEnter(to, from, next){
// 	if(store.state.authToken){
// 		next()
// 	}else{
// 		next('/login')
// 	}
// }
},
{ path: '/setting', component: setting, 
// beforeEnter(to, from, next){
// 	if(store.state.authToken){
// 		next()
// 	}else{
// 		next('/login')
// 	}
// }
},
{ path: '/register', component: register,
// beforeEnter(to, from, next){
// 	let data = {token: localStorage.getItem('cryptoGameToken')}
// 	axios({
// 		url: `http://192.168.0.177:8000/api/checktoken`,
// 		method: 'POST',
// 		data
// 	})
// 	.then((res) => {
// 		if(res.data.token === false){
// 			store.commit('authToken', false)
// 			next()
// 		} else{
// 			// localStorage.setItem('cryptoGameToken', res.data.token)
// 			store.commit('authToken', true)
// 			next('/dashboard')
// 		}
// 	})
// 	.catch((err) => console.log(err))
// }
},
{ path: '/enemy', component: enemy, 
// beforeEnter(to, from, next){
// 	if(store.state.authToken){
// 		next()
// 	}else{
// 		next('/login')
// 	}
// }
},
{ path: '/', component: login,
// beforeEnter(to, from, next){
// 	let data = {token: localStorage.getItem('cryptoGameToken')}
// 	axios({
// 		url: `http://192.168.0.177:8000/api/checktoken`,
// 		method: 'POST',
// 		data
// 	})
// 	.then((res) => {
// 		if(res.data.token === false){
// 			store.commit('authToken', false)
// 			next()
// 		} else{
// 			// localStorage.setItem('cryptoGameToken', res.data.token)
// 			store.commit('authToken', true)
// 			next('/dashboard')
// 		}
// 	})
// 	.catch((err) => console.log(err))
// }
},
{ path: '/createGame', component: createGame, 
// beforeEnter(to, from, next){
// 	if(store.state.authToken){
// 		next()
// 	}else{
// 		next('/login')
// 	}
// }
},
{ path: '/myWallet', component: myWallet, 
// beforeEnter(to, from, next){
// 	if(store.state.authToken){
// 		next()
// 	}else{
// 		next('/login')
// 	}
// }
},
{ path: '/game1x1', component: game1x1, 
// beforeEnter(to, from, next){
// 	console.log('route')
// 	if(store.state.authToken){
// 		next()
// 	}else{
// 		next('/login')
// 	}
// }
},
{ path: '/portfolio', component: portfolio, 
// beforeEnter(to, from, next){
// 	if(store.state.authToken){
// 		next()
// 	}else{
// 		next('/login')
// 	}
// }
},
{ path: '/tradersOnline', component: tradersOnline, 
// beforeEnter(to, from, next){
// 	if(store.state.authToken){
// 		next()
// 	}else{
// 		next('/login')
// 	}
// }
},
{ path: '/gamesHistory', component: gamesHistory, 
// beforeEnter(to, from, next){
// 	if(store.state.authToken){
// 		next()
// 	}else{
// 		next('/login')
// 	}
// }
},
{ path: '/usersRating', component: usersRating, 
// beforeEnter(to, from, next){
// 	if(store.state.authToken){
// 		next()
// 	}else{
// 		next('/login')
// 	}
// }
},
{ path: '/referralProgram', component: referralProgram, 
// beforeEnter(to, from, next){
// 	if(store.state.authToken){
// 		next()
// 	}else{
// 		next('/login')
// 	}
// }
},
]