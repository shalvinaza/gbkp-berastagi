<!-- Carousel.vue -->
<template>
  <div id="myCarousel" class="carousel slide body-part" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="../assets/images/siswa-3.jpg"
          class="d-block w-100"
          alt="First slide"
          id="carou-2"
        />
        <div class="carousel-caption">
          <div class="my-auto">
            <h1 class="caroussel-title">SMA Masehi GBKP Berastagi</h1>
            <h5>Berastagi Kabupaten Karo</h5>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="../assets/images/hut-sma.jpg"
          class="d-block w-100"
          alt="Second slide"
          id="carou-2"
        />
         <div class="carousel-caption">
          <div class="my-auto">
            <h1 class="caroussel-title">Terwujudnya masyarakat yang cerdas, berprestasi dan beriman</h1>
            <h5>Dengan cara meningkatkan kesiapan masukan dari kualitas proses pendidikan untuk mengoptimalkan pembentukan kepribadian yang bermoral</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="container my-5">
      <div class="row mb-4" id="infoPembelajaran">
        <div class="col-12 col-lg-8">
          <div class="row row-cols-1 row-cols-lg-2 g-4 g-lg-5">
              <div class="col">
                <div class="d-flex flex-column align-items-center">
                  <img src="../assets/images/building.webp" alt="Building">
                  <h6 class="mt-3 px-5 text-center">Memiliki visi Terwujudnya masyarakat yang cerdas, berprestasi dan beriman</h6>
                </div>
              </div>
              <div class="col">
                <div class="d-flex flex-column align-items-center">
                  <img src="../assets/images/graduate.webp" alt="Graduate">
                  <h6 class="mt-3 px-5 text-center">Sejak 1998, banyak siswa diterima di PTN favorit seperti ITB, UNPAD, UGM, dll</h6>
                </div>
              </div>
              <div class="col">
                <div class="d-flex flex-column align-items-center">
                  <img src="../assets/images/book.webp" alt="Class">
                  <h6 class="mt-3 px-5 text-center">Tatap muka (sebelum pandemi), Online (synchronous/Asynchronous), Hybrid (Gabungan tatap muka & online)</h6>
                </div>
              </div>
              <div class="col">
                <div class="d-flex flex-column align-items-center">
                  <img src="../assets/images/class.webp" alt="Class">
                  <h6 class="mt-3 px-5 text-center">Program Kelas Bahasa Inggris untuk guru, siswa dan karyawan</h6>
                </div>
              </div>
            </div>
        </div>
        <div class="col-12 col-lg-4">
          <div class="card mb-4" style="width: 18rem; height: 12rem">
            <div class="card-body d-flex align-items-center m-auto">
              <img src="../assets/images/zoom.webp" alt="Zoom" class="card-img" style="width: 250px">
            </div>
          </div>
          <div class="card" style="width: 18rem;">
            <div class="card-body d-flex align-items-center m-auto">
              <img src="../assets/images/canvas.webp" alt="Canvas" class="card-img" style="width:200px">
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Sambutan -->
    <div class="h-100">
      <div class="col-12 col-lg-8 bg-blue" style="min-height: 500px; position: absolute; z-index: -100; right: 0"></div>
      <div class="row p-0 m-0" id="sambutan" style="min-height: 500px">
        <div class="col-12 col-lg-4 bg-white p-0 d-flex justify-content-end align-items-center" style="position: relative; z-index: 100;left: 6%; background-color: transparent !important">
            <img src="../assets/images/kepsek.jpg" alt="Kepsek" class="img-kepsek" height="300px">
        </div>
        <div class="col-12 col-lg-8">
          <div class="container" style="padding: 50px 150px 50px 150px; color: white">
            <div class="mb-4"><h4>Sambutan Kepala Sekolah</h4></div>
            <p>Salam sejahtera!
            <br><br> Kami menyambut Anda di website resmi SMA Masehi GBKP Berastagi. Berkomitmen memberikan layanan terbaik dalam pendidikan holistik, berlandaskan nilai-nilai Kristen, serta mengintegrasikan keunggulan akademis dengan pengembangan keterampilan sosial dan kepemimpinan. Temukan informasi terkini tentang kegiatan, prestasi siswa, dan program unggulan kami. Terima kasih atas dukungan Anda dalam menciptakan generasi penerus yang berprestasi, berakhlak, dan siap menghadapi tantangan masa depan. 
            <br><br>
            Salam hormat, <br> Keriahen Sinuhaji <br> SMA Masehi GBKP Berastagi
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row p-0 m-0" id="strukturOrganisasi">
      <div class="container m-5">
        <h1>Struktur Organisasi</h1>
        <div class="d-flex justify-content-center mt-5">
          <img src="../assets/images/struktur-organisasi-gbkp.jpeg" alt="Struktur Organisasi" class="img-struktur">
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
  import Footer from './footer.vue';

  export default {
    components: {
      Footer
    }
  }
</script>