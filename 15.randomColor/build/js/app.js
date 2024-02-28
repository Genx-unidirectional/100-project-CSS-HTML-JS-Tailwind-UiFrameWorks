const section = document.getElementById("section");
const btn = document.getElementById("btn");
const info = document.getElementById("stroke");
// console.log(typeof section.classList); to check classList is object or array
console.log(Array.from(section.classList));
function randomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// function randomColor() {
//   function randomNum() {
//     return Math.floor(Math.random() * 256).toString();
//   }
//   let color = `rgb(${randomNum()},${randomNum()},${randomNum()})`;
//   return color;
// }

// btn.addEventListener("click", () => {
//   section.classList.remove(
//     Array.from(section.classList).filter((item) => item.includes("bg"))[0]
//   );
//   console.log(Array.from(section.classList));
//   const tailwindColorClass = `bg-[${randomColor()}]`;
//   info.innerHTML = tailwindColorClass;
//   section.classList.add(tailwindColorClass);
//   console.log(Array.from(section.classList));
// });

btn.addEventListener("click", () => {
  const color = randomColor();
  section.style.backgroundColor = color;
  info.innerHTML = color;
});
