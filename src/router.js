import Vue from 'vue'
import Router from 'vue-router'

const ViewToDoList = () => import('@/views/ViewToDoList.vue')
const ViewLogin = () => import('@/views/ViewLogin.vue')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: { name: 'ToDoList' }
    },
    {
      path: '/to-do-list',
      name: 'ToDoList',
      component: ViewToDoList
    },
    {
      path: '/login',
      name: 'Login',
      component: ViewLogin
    }
    // {
    //   path: '*',
    //   redirect: { name: 'ViewNotFound' }
    // }
  ]
})

export default router
