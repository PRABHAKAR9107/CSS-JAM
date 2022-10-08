window.onresize = screen;
window.onload = screen;

function screen() {
  width = window.innerWidth;
  document.getElementById("width").innerHTML = "Width:" + width + "px";
}
