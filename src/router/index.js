
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MoviesView from '../views/MoviesView.vue'
import TVShowsView from '@/views/TVShowsView.vue'
import AnimeView from '@/views/AnimeView.vue'
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '/',
    component: HomeView,

  },
  {
    path: '/movies',
    component: MoviesView
  },
  {
    path:'/tv',
    component:TVShowsView
  },
  {
    path:'/anime',
    component:AnimeView
  }
  ],
})

export default router
