const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", (e) => {
  mouseCursor(e.pageX, e.pageY);
});

function mouseCursor(pageX, pageY) {
  cursor.style.left = pageX + "px";
  cursor.style.top = pageY + "px";
}
