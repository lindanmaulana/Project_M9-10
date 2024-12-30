const acount = localStorage.getItem("auth")
const btnLogout = document.getElementById("btn-logout")

if(!acount) {
    window.location.href = "http://127.0.0.1:5500/index.html"
}

btnLogout.addEventListener("click", () => {
    localStorage.removeItem("auth")
    window.location.href = "http://127.0.0.1:5500/index.html"
})

