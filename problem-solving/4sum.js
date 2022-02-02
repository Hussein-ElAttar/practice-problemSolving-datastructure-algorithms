// This is not an efficient solution
// let nums = [1, 0, -1, 0, -2, 2], target = 0
// let nums = [-2, -1, -1, 1, 1, 2, 2], target = 0
let nums = [2, 2, 2, 2, 2], target = 8

const fourSum = function (nums, target) {
    nums.sort((a, b) => b - a);
    const allSubsets = [];
    const usedKeys = new Set();

    const subsets = (i = 0, sub = ["", 0]) => {
        const newKey = nums[i] != undefined ? sub[0].concat(nums[i]) : sub[0];

        if (sub.length == 6 && sub[1] == target) {
            if (usedKeys.has(sub[0])) return;

            usedKeys.add(sub[0]);

            allSubsets.push(sub.slice(0));

            return;
        }

        if (i > nums.length) return;

        const oldKey = sub[0];

        sub[0] = newKey;
        sub[1] += nums[i];
        subsets(i + 1, sub.concat(nums[i]));

        sub[0] = oldKey;
        sub[1] -= nums[i];
        subsets(i + 1, sub);
    }

    subsets();

    return allSubsets;
};

console.log(fourSum(nums, target));