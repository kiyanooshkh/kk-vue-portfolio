import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import goTo from 'vuetify/es5/services/goto'

Vue.use(Router)

export default new Router({
  scrollBehavior: (to) => {
    let scrollTo = 0

    if (to.hash) {
      scrollTo = to.hash
    }
    console.log(scrollTo);

    return goTo(scrollTo)
  },

  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/photography',
      name: 'photography',
      component: () => import('./views/Photography.vue')
    },
  ]
})
