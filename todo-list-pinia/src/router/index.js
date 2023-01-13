import { createRouter, createWebHistory } from 'vue-router'
import ShowTodos from '../views/ShowTodos.vue'
import AddTodo from '../views/AddTodo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  
  routes: [
    {
      path: '/',
      name: 'Todos',
      component: ShowTodos
  },
  {
    path: '/AddTodo',
    name: 'Add',
    component: AddTodo
},
  ]
})

export default router
