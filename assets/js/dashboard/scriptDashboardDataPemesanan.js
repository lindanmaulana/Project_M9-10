import { dataPesanan } from "../scriptData.js"

const renderTableBody = () => {
    const tableBody = document.getElementById("table-body")

    const itemRender = dataPesanan.map((pesanan, index) => (
        `
        <tr>
        <th >${pesanan.idPemesan}</th>
        <th >${pesanan.namaPemesan}</th>
        <th >${pesanan.nomorIdentitas}</th>
        <td>${pesanan.tipeKamar}</td>
        <th >${pesanan.tanggalPesan}</th>
        <th >${pesanan.durasiMenginap}</th>
        <th >${pesanan.breakfast}</th>
        <td>${pesanan.deskripsi}</td>
        <td>${pesanan.fasilitas}</td>
        <td>${pesanan.harga}</td>
        </td>
      </tr>
        `
    )).join("")

    tableBody.innerHTML = itemRender
}

renderTableBody()