import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import HelloWorld from '@/components/HelloWorld'
import signup from '@/components/signup'
import signin from '@/components/signin'
import liste from '@/components/liste'
import messages from '@/components/messages'

Vue.use(Router)

export default new Router({
  routes:[
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },

    {
      path:'/signup',
      name: 'signup',
      component: signup
    },
    {
      path:'/signin',
      name: 'signin',
      component: signin
    },
    {
      path:'/liste',
      name: 'liste',
      component: liste
    },
    {
      path: '/messages',
      name: 'messages,',
      component: messages
    }
  ]
})