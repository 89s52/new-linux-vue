import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import getData from '@/components/getData'
import market from '@/components/market'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/getdata',
      name: 'getData',
      component: getData
    },
    {
      path: '/market',
      name: 'market',
      component: market
}
  ]
})
