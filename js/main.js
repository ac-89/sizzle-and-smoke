document.querySelector(".nav-box").addEventListener("click", function () {
  const menu = document.getElementById("nav_ul");
  const computedStyle = window.getComputedStyle(menu);
  console.log("click", computedStyle.display);
  if (computedStyle.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});
