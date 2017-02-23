import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		verse: {
			verseId: '',
			verseText: ''
		}
	},
	mutations: {
		addVerse(state, verse) {
			state.verse = verse
		}
	}
})
