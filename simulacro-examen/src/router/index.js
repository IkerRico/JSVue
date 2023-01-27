import { createRouter, createWebHistory } from 'vue-router'
import HomeView  from '../views/HomeView.vue';
import EmpresasView from '../views/EmpresasView.vue';
import EmpresaView from '../views/EmpresaView.vue';
import OfertaView from '../views/OfertasView.vue';
import NuevaOferta from '../views/NuevaOferta.vue';
import AcercaDe from '../views/AcercaDe.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/Empresas',
      name: 'empresas',
      component: EmpresasView
    },
    {
      path: '/Empresas/:id',
      name: 'Empresa',
      component: EmpresaView,
      props: true
    },
    {
      path: '/Ofertas/:id',
      name: 'Oferta',
      component: OfertaView,
      props: true
    },
    {
      path: '/NuevaOferta',
      name: 'Nueva Oferta',
      component: NuevaOferta
    },
    {
      path: '/Edit/:id',
      name: 'Edit Oferta',
      component: NuevaOferta,
      props: true
    },
    {
      path: '/AcercaDe',
      name: 'Acerca de',
      component: AcercaDe
    }, 
  ]
})

export default router
