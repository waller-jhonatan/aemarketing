import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EmpresasView from '../views/EmpresasView.vue'
import EventosView from '../views/EventosView.vue'
import VideoMakerView from '../views/VideoMakerView.vue'
import ReelsView from '../views/ReelsView.vue'

const HEADER_OFFSET = 80

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'AE Marketing — Conexão, estratégia e vídeo maker' },
    },
    {
      path: '/empresas',
      name: 'empresas',
      component: EmpresasView,
      meta: { title: 'Para empresas — AE Marketing' },
    },
    {
      path: '/eventos',
      name: 'eventos',
      component: EventosView,
      meta: { title: 'Para eventos — AE Marketing' },
    },
    {
      path: '/video-maker',
      name: 'video-maker',
      component: VideoMakerView,
      meta: { title: 'Vídeo maker para eventos — AE Marketing' },
    },
    {
      // Versão alternativa do vídeo maker, no estilo de um reel do Instagram.
      path: '/video-maker-2',
      name: 'video-maker-2',
      component: ReelsView,
      meta: { title: 'Vídeo maker para eventos — AE Marketing' },
    },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, top: HEADER_OFFSET, behavior: 'smooth' }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  if (to.meta.title) document.title = to.meta.title
})

export default router
