
const binarySearch = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const middle = left + Math.floor((right - left) / 2);

        if (target < nums[middle]) {
            right = middle - 1;

        } else if (target > nums[middle]) {
            left = middle + 1;

        } else {
            return middle;
        }
    }

    return -1;
}

function binarySearchRecursive(ar, target, left = 0, right = ar.length - 1) {
    const middle = Math.ceil((right + left) / 2);

    if (ar[middle] == target) {
        return middle
    }

    if (ar[middle] > target) {
        return binarySearch(ar, target, left, middle - 1);
    }

    return binarySearch(ar, target, middle + 1, right);
}

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log('=====================');
console.log(binarySearch(arr, 3));
console.log(binarySearchRecursive(arr, 3));
console.log('=====================');
