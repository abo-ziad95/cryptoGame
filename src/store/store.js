import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export const store = new Vuex.Store({
	state: {
		transactions: [],
		inviteToken: '',
		userBalanceGame: 0,
		opponentBalanceGame: 0,
		authToken: false,
		gameEnded: false,
		message: '',
		walletTable: '',
		wallet: [],
		timelive: 0,
		userNameGame: '',
		balance: 0,
		deposit: 0,
		gameUserId: 0,
		startGame: null,
		currentGames: [],
		oponent: '',
		oponentBalance: 0,
		balanceFun: 0,
		balanceFactual: 0,
		checkGame: {},
		curBuyed: ['ETH', 'ETH'],
		timeleft: 0,
		firstName: '',
		lastName: '',
		game_status: 0,
		email: '',
		currency: {},
		nameGameOld: '',
		nameGame: '',
		// symbol: {}
	},
	getters: {
		userBalanceGame: state => {
			return state.userBalanceGame
		},
		nameGameOld: state => {
			return state.nameGameOld
		},
		// symbol: state => {
		// 	return state.symbol
		// },
		opponentBalanceGame: state => {
			return state.opponentBalanceGame
		},
		authToken: state => {
			return state.authToken
		},
		userNameGame: state => {
			return state.userNameGame
		},
		gameEnded: state => {
			return state.gameEnded
		},
		message: state => {
			return state.message
		},
		nameGame: state => {
			return state.nameGame
		},
		nameGameGetters: state => {
			return state.nameGame
		},
		currency: state => {
			return state.currency
		},
		email: state => {
			return state.email
		},
		firstName: state => {
			return state.firstName
		},
		lastName: state => {
			return state.lastName
		},
		checkGame: state => {
			return state.checkGame
		},
		gameUserId: state => {
			return state.gameUserId
		},
		walletTable: state => {
			return state.walletTable
		},
		oponentBalance: state => {
			return state.oponentBalance
		},
		game_status: state => {
			return state.game_status
		},
		timeleft: state => {
			return state.timeleft
		},
		startGameGetters: state => {
			return state.startGame
		},
		balanceFactual: state => {
			return state.balanceFactual
		},
		balanceFun: state => {
			return state.balanceFun
		},
		curBuyed: state => {
			return state.curBuyed
		},
		balance: state => {
			return state.balance
		},
		wallet: state => {
			return state.wallet
		},
		transactions: state => {
			return state.transactions
		},
		deposit: state =>{
			return state.deposit
		},
		oponent: state => {
			return state.oponent
		},
		currentGames: state => {
			return state.currentGames
		},
		timelive : state => {
			return state.timelive
		},
		inviteToken : state => {
			return state.inviteToken
		}
	},
	mutations: {
		nameGame: (state, nameGame) => {
			state.nameGame = nameGame
		},
		changeInviteToken: (state, token) => {
			state.inviteToken = token
		},
		authToken: (state, authToken) => {
			state.authToken = authToken
		},
		addTransaction: (state, item) => {
			state.transactions.unshift(item)
		},
		currency: (state, item) => {
			state.currency = item
		},
		gameUserId: (state, item) => {
			state.gameUserId = item
		},
		cuclMarge: (state, item) => {
			state.oponentBalance = state.balance - item
		},
		addCurBuyed: (state, item) => {
			state.curBuyed.push(item)
		},
		culcLiveTime: (state, item) => {
			state.timelive = item / 1000
		},
		changeSatrtGame: (state, item) => {
			state.startGame = item
		},
		changeStatusGame: (state, item) => {
			state.game_status = item
		},
		changeTimeLeft: (state, item) => {
			state.timeleft = item
		},
		changecheckGame: (state, item) => {
			state.checkGame = item
		},
		gameEnded: (state, item) => {
			state.gameEnded = item
		},
		message: (state, item) => {
			state.message = item
		},
		// symbol: (state, item) => {
		// 	state.symbol = item
		// }
		// removeTransaction: (state, item) => {
		// 	let index = state.transactions.indexOf(item)
		// 	state.transactions.splice(index, 1)
		// },
	}
})