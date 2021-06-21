const rotateLeft = (arr, count) => {
  return [...arr.slice(count, arr.length), ...arr.slice(0, count)];
};

const arr = [1, 2, 3, 4, 5];

console.log(rotateLeft(arr, 2)); //Output = [3, 4, 5, 1, 2]
