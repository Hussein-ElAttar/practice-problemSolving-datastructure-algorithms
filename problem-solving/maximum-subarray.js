// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
function maxSubArray(nums) {
    if (nums.length == 1) {
        return nums[0];
    }

    let maxCurrent = 0;
    let absMax = Number.NEGATIVE_INFINITY;

    for (const num of nums) {
        maxCurrent += num

        if (maxCurrent >= 0) {
            absMax = Math.max(absMax, maxCurrent);
        } else {
            maxCurrent = 0;
            absMax = Math.max(absMax, num);
        }
    }

    return absMax;
}
// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([-10, 1, -2, 3, 1, 1, 8]));
console.log(maxSubArray([-8, -4, -1]));