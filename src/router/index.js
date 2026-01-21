import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Publication from '../views/Publication.vue'
import CV from '../views/CV.vue'
import Team from '../views/Team.vue'
import Project from '../views/Project.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'XXX Lab' }
  },
  {
    path: '/publication',
    name: 'Publication',
    component: Publication,
    meta: { title: 'Publication' }
  },
  {
    path: '/cv',
    name: 'CV',
    component: CV,
    meta: { title: 'CV' }
  },
  {
    path: '/team',
    name: 'Team',
    component: Team,
    meta: { title: 'Team' }
  },
  {
    path: '/project',
    name: 'Projects',
    component: Project,
    meta: { title: 'Projects' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'XXX Lab'
  next()
})

export default router