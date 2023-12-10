<!-- Navbar.vue -->
<template>
    <nav id="img-caroussel" :class="{ 'navbar navbar-expand-lg bg-body-tertiary p-0' : true, 'navbar-transparent': isTransparent,'navbar-solid': !isTransparent,}">
      <div class="container-fluid py-2 px-3">
        <a class="navbar-brand" href="#"><img src="../assets/images/logo.png" alt="Logo" class="logo"/></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link to="/beranda" class="nav-link beranda">Beranda</router-link>
            <router-link to="/informasi-umum" class="nav-link info">Informasi Umum</router-link>
            <router-link to="/kesiswaan" class="nav-link siswa">Kesiswaan</router-link>
            <router-link to="/akademik" class="nav-link akademik">Akademik</router-link>
            <router-link to="/kontak-dan-lokasi" class="nav-link kontak">Kontak & Lokasi</router-link>
          </div>
        </div>
      </div>
    </nav>
</template>

<script>
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default {
  props: {
    isTransparent: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
