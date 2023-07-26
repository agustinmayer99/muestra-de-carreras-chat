import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../Home.vue'

/**
 * Se especifican todas las rutas necesarias para acceder al chat de diferentes departamentos
 */
Vue.use(VueRouter);

const routes = [
  {
    path: '/prueba',
    name: 'Chat-Prueba',
    props: { department: "CHAT-PRUEBA", name: "Chat para prueba" },
    component: Home
  },
  {
    path: '/at004',
    name: 'Chat-at004',
    props: { department: "CHAT-at004", name: "Chat para at004" },
    component: Home
  },
    ]

    const router = new VueRouter({
        mode: 'history',
        base: process.env.BASE_URL,
        routes
      })
      
      export default router
