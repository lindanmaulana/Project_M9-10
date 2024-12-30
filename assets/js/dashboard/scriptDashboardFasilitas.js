import { datakamar } from "../scriptData.js";
const btnLogout = document.getElementById("btn-logout")
const acount = localStorage.getItem("auth")

if(!acount) {
    window.location.href = "http://127.0.0.1:5500/index.html"
}


btnLogout.addEventListener("click", () => {
    localStorage.removeItem("auth")
    window.location.href = "http://127.0.0.1:5500/index.html"
})


const renderTableItems = () => {
  const tableBody = document.getElementById("table-body");
  const rows = datakamar
    .map(
      (kamar, index) => `
      <tr>
        <th scope="row">${index + 1}</th>
        <td>
          <ul class="list-unstyled">
            ${kamar.fasilitas
              .map(
                (fasilitas) =>
                  `<li><i class="bi bi-check-circle"></i> ${fasilitas}</li>`
              )
              .join("")}
          </ul>
        </td>
        <td></td>
        <td>
          <button class="btn btn-warning btn-sm">Edit</button>
          <button class="btn btn-danger btn-sm">Delete</button>
        </td>
      </tr>
    `
    )
    .join("");
  tableBody.innerHTML = rows;
};

renderTableItems();

document
  .getElementById("addRoomForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const tipeKamar = document.getElementById("roomType").value;
    const deskripsi = document.getElementById("roomDescription").value;
    const hargaPerMalam = parseInt(
      document.getElementById("roomPrice").value
    );
    const fasilitas = document
      .getElementById("roomFacilities")
      .value.split(",")
      .map((f) => f.trim());

    datakamar.push({
      tipeKamar,
      deskripsi,
      fasilitas,
      hargaPerMalam,
      image: "../images/tipe-kamar/default.jpg",
    });

    renderTableItems(); 
    document.getElementById("addRoomForm").reset(); // Reset the form
    const addRoomModal = new bootstrap.Modal(
      document.getElementById("addRoomModal")
    );
    addRoomModal.hide(); // Hide the modal
  });