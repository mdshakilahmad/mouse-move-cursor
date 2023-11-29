const mainBg = document.getElementById("main-bg");
const cursor = document.querySelector(".cursor");

mainBg.addEventListener("mousemove", function (event) {
  cursor.style.left = event.x + "px";
  cursor.style.top = event.y + "px";
});
