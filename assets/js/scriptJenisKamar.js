import { datakamar } from "./scriptData.js";
const acount = localStorage.getItem("auth")

if(!acount) {
    window.location.href = "http://127.0.0.1:5500/index.html"
}


const renderCardJenisKamar = () => {
  const boxJenisKamar = document.getElementById("box-card-kamar");

  const cardKamar = datakamar
    .map(
      (kamar) =>
        `
    <div class="col-12 col-md-4">
<div class="card position-relative">
  <img
    src="${kamar.image}"
    class="card-img-top"
    alt="..."
    style="object-fit: cover; height: 200px"
  />
  <p
    class="position-absolute start-100 bg-primary translate-middle badge rounded-pill text-bg-secondary"
    style="top: -10px"
  >
    ${kamar.tipeKamar}
  </p>
  <div class="card-body">
    <p class="card-text">
      ${kamar.deskripsi}
    </p>
  </div>
</div>
</div>
    `
    )
    .join("");
  boxJenisKamar.innerHTML = cardKamar;
};

renderCardJenisKamar();
