<template>
  <div class="img-carrousel" id="kesiswaan">
      <Navbar :isTransparent="isNavbarTransparent" />
      <Carousel ref="carousel" />
  </div>
</template>

<script>
  import Navbar from '../components/navbar.vue';
  import Carousel from '../components/img-caroussel-2.vue';

  export default {
    components: {
      Navbar,
      Carousel,
    },
    data() {
      return {
        isNavbarTransparent: true,
      };
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        // Tambahkan logika scroll untuk menentukan apakah navbar harus transparan atau tidak
        this.isNavbarTransparent = window.scrollY < this.$refs.carousel.$el.clientHeight;
      },
    },
  }
</script>
