console.log("hello");
let arr = [1, 2, 3, 4, 5];
function findAndSet(arr, num) {
  let elem = arr.find((item) => item === num);
  elem = 0;
}

findAndSet(arr, 3);
console.log(arr);
