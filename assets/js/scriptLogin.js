const account = {
  username: "lindanmaulana",
  password: "lindan123",
};

const acount = [
  {
    username: "lindanmaulana",
    password: "lindan123",
    role: "admin",
  },
  {
    username: "satriamahesa",
    password: "satria123",
    role: "user",
  },
];

const handleLogin = (e) => {
  e.preventDefault();

  const username = e.target.username.value;
  const password = e.target.password.value;

  acount.map((user) => {
    if (username === user.username && password === user.password) {
      if (user.role === "user") {
        localStorage.setItem("auth", JSON.stringify({ username, password, role: user.role }));
        window.location.href =
          "http://127.0.0.1:5500/assets/html/homePage.html";
      } else if (user.role === "admin") {
        localStorage.setItem("auth", JSON.stringify({ username, password, role: user.role }));
        window.location.href =
          "http://127.0.0.1:5500/assets/html/admin/dashboard.html";
      }
    }
  });
};
