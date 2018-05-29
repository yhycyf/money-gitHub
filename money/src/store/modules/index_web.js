
const index_web = {
	state: {
		info:{}
	},
	mutations: {
		setInfo (state, obj) {
            state.info = obj
        }
	},
	actions: {
		set_info ({commit},obj) {
			commit('setInfo',obj)
		}
	},
	getters: {
		getInfo: state => state.info
	}
}
export default index_web
