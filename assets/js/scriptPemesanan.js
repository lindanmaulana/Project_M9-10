import { datakamar, dataPesanan } from "./scriptData.js";

const acount = localStorage.getItem("auth");

if (!acount) {
  window.location.href = "http://127.0.0.1:5500/index.html";
}

let checkingKamar = {
  idPemesanan: "",
  namaPemesan: "",
  nomorIdentitas: "",
  tipeKamar: "",
  jenisKelamin: "",
  tanggalPesan: "",
  durasiMenginap: 0,
  breakfast: false,
  hargaKamar: 0,
  hargaBreakfast: 0,
  diskon: 0,
  totalBayar: 0,
};

const hargaBreakfast = 80000;
const diskonKamar = 0.2;
const InpNomorIdentitas = document.getElementById("nomorIdentitas")
const InpTipeKamar = document.getElementById("tipeKamar");
const InpDurasiMenginap = document.getElementById("durasiMenginap");
const InpBreakfast = document.getElementById("breakfast");


const FuncCheckingKamar = (jenisKamar) => {
  return datakamar.find((kamar) => {
    return kamar.tipeKamar.toLowerCase() === jenisKamar.toLowerCase();
  });
};

InpNomorIdentitas.addEventListener('input', (e) => {
    const nomorIdentitas = e.target.value
    const nomorIdentitasMessage = document.getElementById(
        "nomorIdentitasMessage"
      );
    
      if (nomorIdentitas.length <= 16) {
        nomorIdentitasMessage.style.display = "table-row";
      } else {
        nomorIdentitasMessage.style.display = "none";
      }
})

InpTipeKamar.addEventListener("change", (e) => {
  const harga = document.getElementById("harga");

  const changeKamar = e.target.value;
  const findKamar = FuncCheckingKamar(changeKamar);

  checkingKamar = {
    ...checkingKamar,
    hargaKamar: findKamar.hargaPerMalam,
    durasiMenginap:
      checkingKamar.durasiMenginap > 0 ? checkingKamar.durasiMenginap : 1,
    totalBayar:
      checkingKamar.durasiMenginap === 0
        ? findKamar.hargaPerMalam
        : findKamar.hargaPerMalam * checkingKamar.durasiMenginap,
  };

  harga.value = checkingKamar.hargaKamar;
  readData();
});

InpDurasiMenginap.addEventListener("input", (e) => {
  const changeDurasi = Number(e.target.value);

  checkingKamar = {
    ...checkingKamar,
    hargaKamar: changeDurasi
      ? (checkingKamar.hargaKamar *= Number(changeDurasi))
      : checkingKamar.hargaKamar,
    durasiMenginap: changeDurasi,
    totalBayar: checkingKamar.hargaKamar,
  };

  if (changeDurasi >= 3) {
    checkingKamar = {
      ...checkingKamar,
      diskon: checkingKamar.hargaKamar * diskonKamar,
    };
  }

  readData();
});

InpBreakfast.addEventListener("change", (e) => {
  const changeBreakfast = e.target.checked;
  checkingKamar = {
    ...checkingKamar,
    breakfast: changeBreakfast,
  };

  if (changeBreakfast) {
    checkingKamar = {
      ...checkingKamar,
      hargaBreakfast,
    };
  } else {
    checkingKamar = {
      ...checkingKamar,
      hargaBreakfast: 0,
    };
  }

  checkingKamar = {
    ...checkingKamar,
    totalBayar: (checkingKamar.totalBayar += checkingKamar.hargaBreakfast),
  };
  readData();
});

const handleForm = (e) => {
  e.preventDefault();
  const eTarget = e.target;
  const idPemesanan = eTarget.idPemesanan.value;
  const namaPemesan = eTarget.namaPemesan.value;
  const nomorIdentitas = eTarget.nomorIdentitas.value;
  const tipeKamar = eTarget.tipeKamar.value;
  const jenisKelamin = eTarget.jenisKelamin.value;
  const tanggalPesan = eTarget.tanggalPesan.value;
  const durasiMenginap = Number(eTarget.durasiMenginap.value);
  const resumePemesanan = document.getElementById("resumePemesanan");

  let totalBayar =
    checkingKamar.hargaKamar +
    checkingKamar.hargaBreakfast -
    checkingKamar.diskon;

  checkingKamar = {
    ...checkingKamar,
    idPemesanan,
    namaPemesan,
    nomorIdentitas,
    tipeKamar,
    jenisKelamin,
    tanggalPesan,
    durasiMenginap,
    totalBayar,
  };


  resumePemesanan.innerHTML = `
  <div class="card mx-auto mt-4" style="max-width: 600px;">
    <div class="card-header text-center bg-primary text-white">
      <h2>Resume Pemesanan</h2>
    </div>
    <div class="card-body">
      <table class="table table-bordered">
        <tbody>
          <tr>
            <th scope="row">ID Pemesanan</th>
            <td>${checkingKamar.idPemesanan}</td>
          </tr>
          <tr>
            <th scope="row">Nama Pemesan</th>
            <td>${checkingKamar.namaPemesan}</td>
          </tr>
          <tr>
            <th scope="row">Nomor Identitas</th>
            <td>${checkingKamar.nomorIdentitas}</td>
          </tr>
          <tr>
            <th scope="row">Tipe Kamar</th>
            <td>${checkingKamar.tipeKamar}</td>
          </tr>
          <tr>
            <th scope="row">Jenis Kelamin</th>
            <td>${checkingKamar.jenisKelamin}</td>
          </tr>
          <tr>
            <th scope="row">Harga</th>
            <td>Rp${checkingKamar.hargaKamar.toLocaleString()}</td>
          </tr>
          <tr>
            <th scope="row">Tanggal Pesan</th>
            <td>${checkingKamar.tanggalPesan}</td>
          </tr>
          <tr>
            <th scope="row">Durasi Menginap</th>
            <td>${checkingKamar.durasiMenginap} malam</td>
          </tr>
          <tr>
            <th scope="row">Breakfast</th>
            <td>${checkingKamar.breakfast ? 'Ya' : 'Tidak'}</td>
          </tr>
          <tr class="table-danger">
            <th scope="row">Total Bayar</th>
            <td><strong>Rp${checkingKamar.totalBayar.toLocaleString()}</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
`;


  dataPesanan.push(checkingKamar);
  readData();
};

const readData = () => {
  console.log({ checkingKamar });
  const total = document.getElementById("totalBayar");
  total.value = checkingKamar.totalBayar > 0 ? checkingKamar.totalBayar : null;
};

readData();

const form = document.getElementById("formPemesanan");
form.addEventListener("submit", handleForm);
