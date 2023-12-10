<template>
  <div id="akademik">
    <Navbar :isTransparent="false" />
		<div class="body-part">
			<div class="bg-blue">
				<div class="d-flex bg-white w-100" style="min-height: 500px; position: absolute; left: 0; margin-top: 150px; padding: 150px 50px;color: #2c3e50">
					<div class="col-12 col-lg-4 d-flex flex-column">
						<h1 class="caroussel-title">Kalender Akademik</h1>
						<h5 class="mb-4">Semester Ganjil 2022</h5>
						<h6 style="line-height: 1.5">Semester ganjil tahun ajaran 2022 akan dimulai pada 10 Agustus 2022. Selama semester ini, kita akan mengalami libur pertengahan semester, ujian tengah semester, dan libur akhir semester. Harap perhatikan informasi lebih lanjut yang akan diupdate secara berkala.</h6>
					</div>
				</div>
				<div class="row pt-5" id="kalender" style="padding-bottom: 70px">
					<div class="col-12 col-lg-4">
					</div>
					<div class="col-12 col-lg-8">
						<div class="container" style="position: relative; z-index: 100;">
							<div class="d-flex justify-content-center">
								<img
									src="../assets/images/kalender.jpg"
									alt="Kalender"
									class="img-kalender"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="bg-white" id="repoBuku">
				<div class="container m-5">
					<h1 class="caroussel-title mb-5">Repositori Buku</h1>
					<div class="row row-cols-1 row-cols-lg-3 g-1 g-lg-2">
						<div class="col d-flex justify-content-center">
							<div class="card text-center" style="width: 18rem;">
								<div class="card-body">
									<h5>Kelas</h5>
									<h5 class="card-title">X</h5>
									<p class="card-text">Download buku elektronik kelas X untuk setiap mata pelajaran melalui link di bawah ini</p>
									<a href="#" class="btn btn-primary">Buka Google Drive</a>
								</div>
							</div>
						</div>
						<div class="col d-flex justify-content-center">
							<div class="card text-center" style="width: 18rem;">
								<div class="card-body">
									<h5>Kelas</h5>
									<h5 class="card-title">XI</h5>
									<p class="card-text">Download buku elektronik kelas XI untuk setiap mata pelajaran melalui link di bawah ini</p>
									<a href="#" class="btn btn-primary">Buka Google Drive</a>
								</div>
							</div>
						</div>
						<div class="col d-flex justify-content-center">
							<div class="card text-center" style="width: 18rem;">
								<div class="card-body">
									<h5>Kelas</h5>
									<h5 class="card-title">XII</h5>
									<p class="card-text">Download buku elektronik kelas XII untuk setiap mata pelajaran melalui link di bawah ini</p>
									<a href="#" class="btn btn-primary">Buka Google Drive</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/navbar.vue";
import Footer from "../components/footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>
