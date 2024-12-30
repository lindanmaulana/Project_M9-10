import { datakamar } from "./scriptData.js";
const acount = localStorage.getItem("auth")

if(!acount) {
    window.location.href = "http://127.0.0.1:5500/index.html"
}

const renderTableItems = () => {
  const tableBody = document.getElementById("table-body");

  const cardFasilitas = datakamar
    .map(
      (kamar, index) => `
      <tr>
        <th scope="row">${index + 1}</th>
        <td>${kamar.tipeKamar}</td>
        <td>
          <ul class="list-unstyled">
            ${kamar.fasilitas
              .map(
                (fasilitas) => `
                  <li>
                    <i class="bi bi-check-circle"></i> ${fasilitas}
                  </li>`
              )
              .join("")}
          </ul>
        </td>
      </tr>
    `
    )
    .join("");

  tableBody.innerHTML = cardFasilitas;
};

renderTableItems();
