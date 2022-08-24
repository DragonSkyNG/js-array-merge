const array1 = [2, 1, 6, 8, 4];
const array2 = [2, 3, 8, 5, 1];

function arrayMerge(array1, array2) {
  const tempSet = new Set();
  for (item of array1) {
    tempSet.add(item);
  }
  for (item of array2) {
    tempSet.add(item);
  }
  const newArray = Array.from(tempSet);
  return newArray.sort();
}

console.log(arrayMerge(array1, array2));
