const datakamar = [
  {
    tipeKamar: "Standar",
    deskripsi:
      "Kamar standar yang nyaman dengan fasilitas dasar untuk penginapan singkat, aman dan paling aman.",
    fasilitas: [
      "Tempat tidur queen size",
      "AC",
      "TV layar datar",
      "Kamar mandi dalam dengan shower",
      "Wi-Fi gratis",
      "Meja kerja",
      "Lemari pakaian",
    ],
    hargaPerMalam: 500000,
    image: "../images/tipe-kamar/tipe-kamar-standar.webp",
  },
  {
    tipeKamar: "Deluxe",
    deskripsi:
      "Kamar deluxe yang lebih luas dengan fasilitas premium dan pemandangan indah.",
    fasilitas: [
      "Tempat tidur king size",
      "AC",
      "TV layar datar dengan saluran kabel",
      "Kamar mandi dalam dengan bathtub",
      "Wi-Fi gratis",
      "Meja kerja",
      "Lemari pakaian",
      "Kulkas mini",
      "Pemandangan luar",
    ],
    hargaPerMalam: 750000,
    image: "../images/tipe-kamar/tipe-kamar-deluxe.jpg",
  },
  {
    tipeKamar: "Family",
    deskripsi:
      "Kamar keluarga luas dengan dua tempat tidur besar dan fasilitas lengkap untuk keluarga.",
    fasilitas: [
      "Dua tempat tidur queen size",
      "AC",
      "TV layar datar",
      "Kamar mandi dalam dengan shower dan bathtub",
      "Wi-Fi gratis",
      "Meja makan",
      "Lemari pakaian",
      "Kulkas mini",
      "Pemandangan luar",
      "Layanan kamar",
    ],
    hargaPerMalam: 1000000,
    image: "../images/tipe-kamar/tipe-kamar-family.jpg",
  },
];

const dataPesanan = [
    {
        idPemesan: 1134,
        namaPemesan: "Wafiatul Mubarokah",
        nomorIdentitas: 667845,
        tipeKamar: "Standar",
        tanggalPesan: "30-12-2024",
        durasiMenginap: 4,
        breakfast: false,
        deskripsi: "Kamar standar yang nyaman dengan fasilitas dasar untuk penginapan singkat.",
        fasilitas:    "Tempat tidur queen size, AC, TV layar datar, Kamar mandi dalam dengan shower, Wi-Fi gratis, Meja kerja, Lemari pakaian",
        harga: 160000
    }
];

export { datakamar, dataPesanan };
