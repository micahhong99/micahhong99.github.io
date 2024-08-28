document.addEventListener("DOMContentLoaded", function () {
  console.log("All pages use this script.");

  // 动态加载 header
  fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("header").innerHTML = data;
    });

  // 动态加载 footer
  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("footer").innerHTML = data;
    });
});
