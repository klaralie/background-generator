const array = [1, 2, 10, 16];

const reduceArray = array.reduce((accumulator, num) => {
  return accumulator + num;
}, 0);

console.log("reduce", reduceArray);
