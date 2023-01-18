const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// Function containing logic for filtering out odd numbers
function isOdd(x) {
  return x % 2 != 0;
}
// Function containing logic for filtering out even numbers
function isEven(x) {
  return x % 2 === 0;
}
function filterFunction(arr, callback) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]) ? filteredArr.push(arr[i]) : null;
  }
  return filteredArr;
}
console.log(filterFunction(arr, isOdd));
console.log(filterFunction(arr, isEven));
