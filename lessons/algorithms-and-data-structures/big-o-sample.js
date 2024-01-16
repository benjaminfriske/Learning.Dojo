/**
 * Big O Notation Examples
 */

// O(1) - Constant Time: This means the algorithm takes the same amount of time to complete, regardless of the size of the input data.
const constantTime = (array, index) => {
    return array[index];
}

// O(n) - Linear Time: The performance of the algorithm grows linearly with the size of the input data.
const linearTime = () => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
          return i;
        }
      }
      return -1;
}

// O(log n) - Logarithmic Time: The performance of the algorithm increases logarithmically with the size of the input data. Binary search is an example of an algorithm with logarithmic time complexity.
const logarithmicTime = (array) => {
    let lowIndex = 0;
    let highIndex = array.length - 1;
    while (lowIndex <= highIndex) {
        let midIndex = Math.floor((lowIndex + highIndex) / 2);
        if (array[midIndex] === item) {
            return midIndex;
        } else if (item > array[midIndex]) {
            lowIndex = midIndex + 1;
        } else {
            highIndex = midIndex - 1;
        }
    }
    return -1;  
}

//O(n^2) - Quadratic Time: The performance of the algorithm is directly proportional to the square of the size of the input data. Bubble sort, selection sort, and insertion sort are examples of algorithms with quadratic time complexity.

//O(2^n) - Exponential Time: The performance of the algorithm doubles with each addition to the input data set. The recursive calculation of Fibonacci numbers is an example of an algorithm with exponential time complexity.

//O(n!) - Factorial Time: The performance of the algorithm grows factorial with the size of the input data. An example of an algorithm with factorial time complexity is the brute force search of the traveling salesman problem.