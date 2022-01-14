const sumItems = function(array) {
  // Sum all the numbers in the array
  let sum = 0;
  for (const item of array) {
    if (Array.isArray(item)) {
      sum = sum + sumItems(item);
      continue;
    }
    sum += item;
  }
  return sum;
};

console.log(sumItems([1, 2, 3, 4, 5]));
console.log(sumItems([[1, 2, [[3], 4]], 5, []]));

module.exports = sumItems;