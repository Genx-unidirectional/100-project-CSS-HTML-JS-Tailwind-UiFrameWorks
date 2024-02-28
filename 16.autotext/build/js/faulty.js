const words = ["Love", "Popular", "Weird", "Dynamic", "Fun"];
const changingText = document.getElementById("changing-text");

async function adder(char) {
  await setTimeout(() => {
    changingText.innerHTML += char;
  }, 300);
}
async function type(str) {
  for (let j = 0; j < str.length; j++) {
    await adder(str[j]);
  }
}

async function remover(num) {
  setTimeout(() => {
    changingText.innerHTML = changingText.innerHTML.substring(0, num - 2);
  }, 300);
}

async function erase(str) {
  for (let j = str.length; j > 0; j--) {
    await remover(j);
  }
}

async function start() {
  for (let i = 0; i < words.length; i++) {
    await type(words[i]);
    await erase(words[i]);
    if (i === words.length) {
      i = 0;
    }
  }
}

start();
