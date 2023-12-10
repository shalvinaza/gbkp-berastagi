<!-- Carousel.vue -->
<template>
  <div id="myCarousel" class="carousel slide body-part" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active" id="carou-2">
        <img
          src="../assets/images/hari-guru.jpg"
          class="d-block w-100"
          alt="First slide"
          id="carou-2"
        />
        <div class="carousel-caption">
          <div class="my-auto">
            <h1 class="caroussel-title">Upacara Dalam Rangka Hari Guru</h1>
            <h5 class="mb-3">Segenap keluarga sekolah ingin menyampaikan ucapan terima kasih kepada guru-guru tercinta. Keberhasilan kami adalah hasil dari kerja keras dan dedikasi Anda. Terima kasih atas pengorbanan dan cinta yang telah Anda berikan.</h5>
            <h6>- OSIS SMA Masehi GBKP Berastagi</h6>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="../assets/images/porak.jpg"
          class="d-block w-100"
          alt="Second slide"
          id="carou-2"
        />
         <div class="carousel-caption">
          <div class="my-auto">
            <h1 class="caroussel-title">Pekan Olahraga dan Seni Antar Kelas 2022</h1>
            <h5>Terima kasih atas dukungan semua siswa! 3 minggu penuh momen istimewa, dari olahraga hingga proyek sosial. Solidaritas dan semangat kita semakin kuat!</h5>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="../assets/images/kerja-bakti.jpg"
          class="d-block w-100"
          alt="Third slide"
        />
         <div class="carousel-caption">
          <div class="my-auto">
            <h1 class="caroussel-title">Kerja Bakti</h1>
            <h5>Kegiatan kerja bakti antara sisw SMA Masehi GBKP Berastagi dengan warga sekitar. erima kasih atas partisipasi dan dedikasi semua yang terlibat!</h5>
          </div>
        </div>
      </div>
    </div>
    <!-- Pengarahan -->
    <div class="h-100" style="padding-top: 100px">
      <div class="col-12 col-lg-8 bg-blue" style="min-height: 300px; position: absolute; z-index: -100; left:0"></div>
      <div class="row p-0 m-0" id="sambutan" style="min-height: 500px">
        <div class="col-12 col-lg-8">
          <div class="container" style="padding: 50px 150px 50px 150px; color: white">
            <div class="mb-4"><h4>Pengarahan dari Kepala Sekolah:</h4></div>
            <p>Mari bersama-sama menuju prestasi unggul! Saya mendukung setiap langkah siswa untuk meraih kesuksesan. Terus bersemangat dan manfaatkan setiap kesempatan untuk berprestasi. Kita adalah tim yang solid, dan saya yakin, bersama, kita akan mencapai puncak prestasi!
            </p>
          </div>
        </div>
        <div class="col-12 col-lg-4 bg-white p-0 d-flex justify-content-start" style="position: relative; z-index: 100; right: 8%; top: -50px; background-color: transparent !important">
            <img src="../assets/images/pengarahan.png" alt="Pengarahan" class="img-kepsek" height="400px" >
        </div>
      </div>
    </div>
    <div class="row p-0 m-0 bg-blue" id="prestasi">
      <div class="container my-5">
        <h1 class="mx-5">Prestasi Siswa</h1>
        <div class="d-flex justify-content-center">
          <div id="carouselExampleCaptions" class="carousel slide">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner" style="padding: 100px;color: #2c3e50">
              <div class="carousel-item active">
                <div class="row row-cols-1 row-cols-lg-3 g-1 g-lg-2">
                  <div class="col d-flex justify-content-center">
                    <div class="card text-center" style="width: 18rem;">
                    <img src="../assets/images/prestasi-1.jpg" class="card-img-top" alt="Prestasi">
                      <div class="card-body">
                        <h5>Juara 1 Paduan Suara Tingkat Kabupaten</h5>
                        <p class="card-text">3 Agustus 2022</p>
                      </div>
                    </div>
                  </div>
                  <div class="col d-flex justify-content-center">
                    <div class="card text-center" style="width: 18rem;">
                    <img src="../assets/images/prestasi-2.jpg" class="card-img-top" alt="Prestasi">
                      <div class="card-body">
                        <h5>Juara 3 Paskibraka Tingkat Daerah</h5>
                        <p class="card-text">19 Agustus 2022</p>
                      </div>
                    </div>
                  </div>
                  <div class="col d-flex justify-content-center">
                    <div class="card text-center" style="width: 18rem;">
                    <img src="../assets/images/prestasi-3.jpeg" class="card-img-top" alt="Prestasi">
                      <div class="card-body">
                        <h5>Juara 1 Olimpiade Matematika</h5>
                        <p class="card-text">27 Agustus 2022</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row row-cols-1 row-cols-lg-3 g-1 g-lg-2">
                  <div class="col d-flex justify-content-center">
                    <div class="card text-center" style="width: 18rem;">
                    <img src="../assets/images/prestasi-4.jpg" class="card-img-top" alt="Prestasi">
                      <div class="card-body">
                        <h5>Juara 2 Lomba Cerdas Cermat Tingkat SMA</h5>
                        <p class="card-text">10 September 2022</p>
                      </div>
                    </div>
                  </div>
                  <div class="col d-flex justify-content-center">
                    <div class="card text-center" style="width: 18rem;">
                    <img src="../assets/images/prestasi-5.jpeg" class="card-img-top" alt="Prestasi">
                      <div class="card-body">
                        <h5>Juara 3 Karate Tingkat Kabupaten</h5>
                        <p class="card-text">13 September 2022</p>
                      </div>
                    </div>
                  </div>
                  <div class="col d-flex justify-content-center">
                    <div class="card text-center" style="width: 18rem;">
                    <img src="../assets/images/prestasi-6.png" class="card-img-top" alt="Prestasi">
                      <div class="card-body">
                        <h5>Juara 1 Futsal Tigkat SMA</h5>
                        <p class="card-text">10 November 2022</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
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