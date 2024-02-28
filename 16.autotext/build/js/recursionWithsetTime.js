const words = ["Love", "Popular", "Fun", "Dynamic", "Weird"];
const changingText = document.getElementById("changing-text");
const newLetterDelay = 2000;
const typingDelay = 300;
const erasingDelay = 300;
// we need index to grab first element and then later we increment it to grab next element in word
let index = 0;
// We need charIndex to add one char at time to changingText and also for we need it during erasing we increment it in the type function and decrement it in erase function.
let charIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  if (words.length) {
    setTimeout(type, newLetterDelay);
  }
});

function type() {
  if (charIndex < words[index].length) {
    changingText.innerText += words[index][charIndex];
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newLetterDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    changingText.innerText = changingText.innerText.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    index++;
    if (index >= words.length) {
      index = 0;
    }
    setTimeout(type, typingDelay + 1200);
  }
}
