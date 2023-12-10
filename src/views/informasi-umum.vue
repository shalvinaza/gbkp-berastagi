<template>
  <div id="infoUmum">
      <Navbar :isTransparent="false" />
      <div class="bg-blue">
        <div class="container body-part">
            <div class="outer-container">
                <div class="row">
                    <div class="col-12 col-lg-6">
                        <div class="bg-white p-5 d-flex flex-column" style="height: 400px">
                            <h2 class="mb-3" style="font-weight: 700">Visi</h2>
                            <h5 class="mb-3">Terwujudnya masyarakat yang cerdas, berprestasi dan beriman</h5>
                            <h2 class="mb-3" style="font-weight: 700">Misi</h2>
                            <h5 class="mb-3">Meningkat kesiapan masukan dari kualitas proses pendidikan untuk mengoptimalkan pembentukan kepribadian yang bermoral</h5>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 bg-white p-5">
                        <h2 class="mb-3" style="font-weight: 700">Tujuan</h2>
                        <h6 class="mb-3">1. MENINGKATKAN MUTU SEKOLAH YANG DITANDAI DENGAN PENINGKATAN JUMLAH PESERTA DIDIK YANG LULUS DENGAN STANDART KOMPETENSI TINGGI.</h6>
                        <h6 class="mb-3">2. MENINGKATKAN JUMLAH SISWA YANG DAPAT MELANJUTKAN PENDIDIKANKE PERGURUAN TINGGI.</h6>
                        <h6 class="mb-3">3. MENINGKATKAN KEGIATAN EKSTRAKURIKULER UNGGULAN YANG SESUAI DENGAN POTENSI DAN MINAT PESERTA DIDIK</h6>
                        <h6 class="mb-3">4. MENINGKATKAN KEMAMPUAN PROFESIONAL TENAGA PENDIDIK DAN KEPENDIDIKAN SESUAI DENGAN TUNTUTAN PROGRAM PEMBELAJARAN YANG BERKUALITAS.</h6>
                    </div>
                </div>
            </div>
        </div>
      </div>
              <!-- PPDB -->
        <div class="bg-white">
          <div class="d-flex bg-white w-100" style="min-height: 300px; position: absolute; left: 0; margin-top: 50px; padding: 50px;color: #2c3e50">
            <div class="col-12 col-lg-4 d-flex flex-column">
              <h1 class="caroussel-title">Jadwal PPDB 2023</h1>
              <h5 class="mb-4">Semester Ganjil 2023</h5>
              <h6 style="line-height: 1.5">Bagi calon siswa dan wali calon siswa, mohon perhatikan detail mengenai setiap langkah-lahkan pendaftaran yang diperlukan. Jadwal disamping merupakan jadwal perkiraan sementara yang mungkin akan berubah sewaktu-waktu, menigkuti jadwal tetap yang diberikan pemerintah pada tahun depan. Kami akan selalu memperbarui jadwal jika ada perubahan nantinya.</h6>
            </div>
          </div>
          <div class="row pt-5" id="kalender">
            <div class="col-12 col-lg-4">
            </div>
            <div class="col-12 col-lg-8">
              <div class="container" style="position: relative; z-index: 100; top:10px">
                <div class="d-flex justify-content-center">
                  <img
                    src="../assets/images/ppdb.webp"
                    alt="Kalender"
                    class="img-kalender"
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- beasiswa -->
          <div id="repoBuku">
            <div class="container m-5">
              <h1 class="caroussel-title mb-5">Beasiswa</h1>
              <div class="row row-cols-1 row-cols-lg-3 g-1 g-lg-2">
                <div class="col d-flex justify-content-center">
                  <div class="card text-center" style="width: 18rem;">
                    <div class="card-body">
                      <h5>Program Indonesia Pintar</h5>
                      <a href="#" class="btn btn-primary">Lihat Detail</a>
                    </div>
                  </div>
                </div>
                <div class="col d-flex justify-content-center">
                  <div class="card text-center" style="width: 18rem;">
                    <div class="card-body">
                      <h5>Beasiswa Indonesia Maju (BIM)</h5>
                      <a href="#" class="btn btn-primary">Lihat Detail</a>
                    </div>
                  </div>
                </div>
                <div class="col d-flex justify-content-center">
                  <div class="card text-center" style="width: 18rem;">
                   <div class="card-body">
                      <h5>Kartu Indonesia Pintar (KIP) Kuliah</h5>
                      <a href="#" class="btn btn-primary">Lihat Detail</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <Footer/>
  </div>
</template>

<script>
  import Navbar from '../components/navbar.vue';
  import Footer from '../components/footer.vue';

  export default {
    components: {
      Navbar,
      Footer
    }
  }
</script>
