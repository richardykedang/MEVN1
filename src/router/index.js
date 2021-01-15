import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/authentication/Login.vue'
import Register from '../views/authentication/Register.vue'
import TaskAll from '../views/task/TaskAll.vue'
import TaskCreate from '../views/task/TaskCreate.vue'
import TaskEdit from '../views/task/TaskEdit.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/task/new',
    name: 'task-create',
    component: TaskCreate
  },
  {
    path: '/task/:id',
    name: 'task-edit',
    component: TaskEdit
  },
  {
    path: '/task',
    name: 'task-all',
    component: TaskAll
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
