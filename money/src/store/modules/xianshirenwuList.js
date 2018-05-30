
const xianshirenwuList = {
	state: {
		xianshiInfo: {}
	},
	mutations: {
		setxianshiInfo (state, obj) {
            state.xianshiInfo = obj
        }
	},
	actions: {
		set_xianshiInfo ({commit},obj) {
			commit('setxianshiInfo',obj)
		}
	},
	getters: {
		getxianshiInfo: state => state.xianshiInfo
	}
}
export default xianshirenwuList
