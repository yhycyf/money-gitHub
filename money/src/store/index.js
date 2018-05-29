import Vue from 'vue'
import Vuex from 'vuex'
import IndexWeb from './modules/index_web.js'
import xianshirenwuList from './modules/xianshirenwuList.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        allInfo: {},
        xianshi_Info: {}
    },
    getters: {
        getAllInfo: state => state.allInfo,
        getxianshi_Info: state => state.xianshi_Info,
    },
    mutations: {
        setInfo (state, obj) {
            state.allInfo = obj
        },
        setxianshiInfo (state, obj) {
            state.xianshi_Info = obj
        }
    },
    actions: {
        set_info ({commit},obj) {
            commit('setInfo',obj)
        },
        set_xianshiInfo ({commit},obj) {
			commit('setxianshiInfo',obj)
		}
    },
    modules: {
        IndexWeb,
        xianshirenwuList
    }
})

export default store
