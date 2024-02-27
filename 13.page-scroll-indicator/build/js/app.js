document.addEventListener("DOMContentLoaded", function () {
  const filler = document.querySelector(".filler");
  console.log(filler);
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  function scroll() {
    let topHeight = document.documentElement.scrollTop;
    console.log(topHeight);
    let totalHeight = (topHeight / scrollHeight) * 100;
    filler.style.width = `${totalHeight}%`;
    console.log(totalHeight);
  }

  window.addEventListener("scroll", scroll);
});
