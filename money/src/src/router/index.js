import Vue from 'vue'
import Router from 'vue-router'
import index_web from '@/components/index_web/index_web.vue'
import xianshirenwu from '@/components/xianshirenwuList/xianshirenwu.vue'
import detail_new_v2 from '@/components/detail_new_v2/detail_new_v2.vue'
import PersonalCenter from '@/components/PersonalCenter/PersonalCenter.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index_web
    },
    {
      path:'/xianshirenwu',
      component: xianshirenwu,
    },
    {
      path:'/detail_new_v2',
      component: detail_new_v2,
    },
    {
      path:'/PersonalCenter',
      component: PersonalCenter,
    }
  ]
})
