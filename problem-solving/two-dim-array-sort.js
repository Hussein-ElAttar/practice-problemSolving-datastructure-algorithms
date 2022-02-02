
/*
  - Flatten the 2D-Array into 1-D array
    Sort the 1-D array
    Then merge it back into it's 2-D form

  - The time complexity of splitting and merging back is O(n) each, where n is the total number of elements
    The time complexity of sorting is O( nlog(n) ) if we use merge or quick sort
    Total time complexity would be O( nlog(n) )

  * There is different problem that can achieve better performance but the sub arrays are already sorted
 */

function sortTwoDimAr(twoDimAr, isSortAscending = true) {
    // Make a temp one dim array
    const ar = [];

    // Fill the temp array
    for (let i = 0; i < twoDimAr.length; i++) {
        for (let j = 0; j < twoDimAr[i].length; j++) {
            ar.push(twoDimAr[i][j]);
        }
    }
    
    // We can use any sorting algorithm, for simplicity we can use javascript built-in sort method
    ar.sort((a, b) => isSortAscending ? (b - a): (a - b));

    // Reverse the array back to it's original form
    for (let i = 0; i < twoDimAr.length; i++) {
        for (let j = 0; j < twoDimAr[i].length; j++) {
            twoDimAr[i][j] = ar.pop();
        }
    }

    return twoDimAr;
}


// Examples: --

const twoDimAr1 = [
    [1, 20, 1],
    [-5, 14, 3, 55],
    [0.2, 99]
];

const twoDimAr2 = [
    [9, 63, 1],
    [2, 7, 3],
    [4, 11, 5]
];

console.log(sortTwoDimAr(twoDimAr1));

console.log('======================');

console.log(sortTwoDimAr(twoDimAr2));
