import Vue from 'vue'
import Router from 'vue-router'
import NotFound from './views/NotFound.vue'
import Preview from './views/Preview.vue'
import Page from './views/Page.vue'
import Imagegallery from './views/Imagegallery.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: { name: 'page' }
    },
    {
      path: '/not-found',
      name: 'not-found',
      component: NotFound
    },
    {
      path: '/preview',
      name: 'preview',
      component: Preview
    },
    {
      path: '/page/:uid',
      name: 'page',
      component: Page
    },
    {
      path: '/imagegallery/:uid',
      name: 'imagegallery',
      component: Imagegallery
    },
    {
      path: '*',
      redirect: { name: 'not-found' }
    }
  ]
})
