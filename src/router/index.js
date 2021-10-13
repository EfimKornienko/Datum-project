import Vue from 'vue'
import VueRouter from 'vue-router'
import Statement from '@/components/Statement.vue'
import AddModal from '@/components/AddModal.vue'
import EditModal from '@/components/EditModal.vue'
import MapComponent from '@/components/Map.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    beforeEnter: (to, from, next) => {
      next({ name: 'statement' })
    },
  },
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
    path: '/map/:x/:y/:zoom',
    name: 'mapXYZ',
    component: MapComponent,
    props: true,
  },
  {
    path: '/map/:x/:y',
    name: 'mapXY',
    component: MapComponent,
    props: true,
  },
  {
    path: '/map/:x',
    name: 'mapX',
    component: MapComponent,
    props: true,
  },
  {
    path: '/map',
    name: 'map',
    component: MapComponent,
    props: true,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
