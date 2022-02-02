
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

const result = binarySearch([1, 2, 3, 4, 5, 6, 7], 3);
console.log('=====================');
console.log(result);
console.log('=====================');