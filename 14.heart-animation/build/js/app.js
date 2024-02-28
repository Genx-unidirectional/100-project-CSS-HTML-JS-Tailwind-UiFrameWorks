const greyHeart = document.querySelector(".grey-heart");
const pinkHeart = document.querySelector(".pink-heart");

greyHeart.addEventListener("click", () => {
  console.log("hello");
  pinkHeart.classList.toggle("invisible");
  pinkHeart.classList.toggle("animate-pop");
});

pinkHeart.addEventListener("click", () => {
  pinkHeart.classList.toggle("invisible");
  pinkHeart.classList.toggle("animate-pop");
});
