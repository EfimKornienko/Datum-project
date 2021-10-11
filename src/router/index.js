import Vue from 'vue'
import VueRouter from 'vue-router'
import Statement from '@/components/Statement.vue'
import AddModal from '@/components/AddModal.vue'
import EditModal from '@/components/EditModal.vue'
import Map from '@/components/Map.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/statement',
    name: 'statement',
    component: Statement,
    children: [
      {
        path: 'add',
        name: 'add',
        component: AddModal,
      },
      {
        path: ':id',
        name: 'edit',
        component: EditModal,
        props: true,
      },
    ],
  },
  {
    path: '/map',
    name: 'map',
    component: Map,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
