// function swap(indexA, indexB, arr) {
//     const temp = arr[indexA]

//     arr[indexA] = arr[indexB];
//     arr[indexB] = temp;

//     return arr;
// }

function leftRotation(arr, rotations) {
    // for (let i = rotations; i < arr.length; i++) {
    //     swap(i, i - rotations, arr);
    // }
    // swap(arr.length - 1, arr.length - 2, arr);
    const newArr = [];
    for (let i = rotations; i < arr.length; i++) {
        newArr.push(arr[i]);
    }
    for (let i = 0; i < rotations; i++) {
        newArr.push(arr[i]);
    }
    console.log('=====================');
    console.log(newArr);
    console.log('=====================');
}

leftRotation([1, 2, 3, 4, 5, 6, 7, 8, 9], 5);
// [1, 4, 5, 2, 3]
// [3, 4, 5, 1, 2]
