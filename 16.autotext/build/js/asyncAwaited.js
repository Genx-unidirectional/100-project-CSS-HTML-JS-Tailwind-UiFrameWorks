const words = ["Love", "Dynamic", "Popular", "Fun", "Weird"];
const changingText = document.getElementById("changing-text");

async function adder(char) {
  return new Promise((resolve) => {
    setTimeout(() => {
      changingText.innerText += char;
      resolve();
    }, 300);
  });
}
async function type(str) {
  for (let j = 0; j < str.length; j++) {
    await adder(str[j]);
  }
}

async function remover(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      changingText.innerText = changingText.innerText.substring(0, num - 1);
      resolve();
    }, 100);
  });
}

async function erase(str) {
  for (let j = str.length; j > 0; j--) {
    await remover(j);
  }
}

async function waiter() {
  return new Promise((resolve) => {
    setTimeout(() => {
      //does nothing
      resolve();
    }, 1500);
  });
}

async function start() {
  while (true) {
    for (let i = 0; i < words.length; i++) {
      await type(words[i]);
      await waiter();
      await erase(words[i]);
    }
  }
}

start();
