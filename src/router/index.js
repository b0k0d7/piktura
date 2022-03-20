import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BooksView from "@/views/BooksView";
import EducationView from "@/views/EducationView";
import GalleriesView from "@/views/GalleriesView";
import HistoryView from "@/views/HistoryView";
import PhilosophyView from "@/views/PhilosophyView";
import ShopsView from "@/views/ShopsView";
import TechnicsView from "@/views/TechnicsView";
import TheoryView from "@/views/TheoryView";
import WebsitesView from "@/views/WebsitesView";
import ContactView from "@/views/ContactView";

import ColorsView from "@/views/ColorsView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/szintan',
    name: 'colors',
    component: ColorsView
  },


  {
    path: '/konyvajanlo',
    name: 'books',
    component: BooksView
  },
  {
    path: '/oktatas',
    name: 'education',
    component: EducationView
  },
  {
    path: '/galeriak',
    name: 'galleries',
    component: GalleriesView
  },
  {
    path: '/muveszettortenet',
    name: 'history',
    component: HistoryView
  },
  {
    path: '/filozofia',
    name: 'philosophy',
    component: PhilosophyView
  },
  {
    path: '/muveszellatok',
    name: 'shops',
    component: ShopsView
  },
  {
    path: '/technikak',
    name: 'technics',
    component: TechnicsView
  },
  {
    path: '/elmelet',
    name: 'Theory',
    component: TheoryView
  },
  {
    path: '/mediumok',
    name: 'websites',
    component: WebsitesView
  },
  {
    path: '/kapcsolat',
    name: 'contact',
    component: ContactView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
