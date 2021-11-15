/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function result(numbers) {
  // Your Code Here
  sorted = numbers.sort();

  for (let index = 0; index < sorted.length; index++) {
    if (sorted[index] != index) return index;
  }
}

console.log(result(numbers));
