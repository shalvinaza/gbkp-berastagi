import Vue from 'vue'
import VueRouter from 'vue-router'
import Beranda from '../views/beranda.vue'
import InformasiUmum from '../views/informasi-umum.vue'
import Kesiswaan from '../views/kesiswaan.vue'
import Akademik from '../views/akademik.vue'
import Kontak from '../views/kontak-dan-lokasi.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Beranda',
    component: Beranda
  },
  {
    path: '/beranda',
    name: 'Beranda',
    component: Beranda
  },
  {
    path: '/informasi-umum',
    name: 'Infornasi Umum',
    component: InformasiUmum
  },
  {
    path: '/kesiswaan',
    name: 'Kesiswaan',
    component: Kesiswaan
  },
  {
    path: '/akademik',
    name: 'Akademik',
    component: Akademik
  },
  {
    path: '/kontak-dan-lokasi',
    name: 'Kontak dan Lokasi',
    component: Kontak
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
