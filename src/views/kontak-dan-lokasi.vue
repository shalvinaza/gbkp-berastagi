<template>
  <div class="" id="kontakDanLokasi">
      <Navbar :isTransparent="false" />
      <div class="bg-blue">
        <div class="container body-part">
            <div class="outer-container">
                <div class="row">
                    <div class="col-12 col-lg-6">
                        <div class="bg-white p-5 d-flex flex-column" style="height: 400px">
                            <h2 class="mb-3" style="font-weight: 700">Lokasi</h2>
                            <h5 class="mb-3">Jl. Merdeka No. 119 Berastagi, Gundaling I, Kec. Berastagi, Kabupaten Karo, Sumatera Utara 22152</h5>
                            <iframe title="Lokasi" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.6114313786734!2d98.50600857357388!3d3.1963503528635875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303102ecf3da40b1%3A0x629b82de0038980b!2sYPK%20GBKP%20Masehi%20Berastagi!5e0!3m2!1sid!2sid!4v1701962860028!5m2!1sid!2sid" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 bg-white p-5" style="height: 300px">
                        <h2 class="mb-3" style="font-weight: 700">Kontak</h2>
                        <div class="d-flex flex-row">
                            <div class="col-12 col-lg-3">
                                <div class="d-flex flex-row align-items-center mb-3">
                                    <img src="../assets/images/phone-solid.svg" alt="Phone" width="14" height="14">
                                    <h6 class="ms-2 m-0" style="font-weight: 600">Telepon</h6>
                                </div>
                                <div class="d-flex flex-row align-items-center mb-3">
                                    <img src="../assets/images/envelope-solid.svg" alt="Email" width="14" height="14">
                                    <h6 class="ms-2 m-0" style="font-weight: 600">Email</h6>
                                </div>
                                <div class="d-flex flex-row align-items-center">
                                    <img src="../assets/images/fax-solid.svg" alt="Faksimile" width="14" height="14">
                                    <h6 class="ms-2 m-0" style="font-weight: 600">Faksimile</h6>
                                </div>
                            </div>
                            <div class="col-12 col-lg-9">
                                <div class="d-flex mb-3">
                                    <h6 class="m-0">: (0628) 842 83488</h6>
                                </div>
                                <div class="d-flex mb-3">
                                    <h6 class="m-0">: smamshbtagi@gmail.com</h6>
                                </div>
                                <div class="d-flex">
                                    <h6 class="m-0">: (0628) 842 82398</h6>
                                </div>
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
