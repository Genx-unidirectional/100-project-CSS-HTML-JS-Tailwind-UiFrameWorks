const popVideo = document.getElementById("pop-video");
const btn = document.getElementById("btn");
const closeBtn = document.getElementById("close-btn");
btn.addEventListener("click", () => {
  console.log("hello");
  popVideo.classList.remove("invisible");
  popVideo.classList.remove("opacity-0");
  popVideo.classList.add("opacity-1");
});
closeBtn.addEventListener("click", () => {
  popVideo.classList.add("invisible");
  popVideo.classList.add("opacity-0");
});
