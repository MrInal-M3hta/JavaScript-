const numbers = [1, 2, 3];

numbers.map(num => {
  return num * 2;
});

console.log(numbers); // [1, 2, 3] -- The original array is not modified.

const doubled = numbers.map(num => {
  return num * 2;
});
console.log(doubled); // [2, 4, 6] -- A new array is returned with the modified values.