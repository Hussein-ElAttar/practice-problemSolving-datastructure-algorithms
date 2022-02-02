function subsets(nums, k = 0) {
    const allSums = [];

    function subsetsRecursive(nums, i = 0, sum = 0) {
        if (i >= nums.length) {
            allSums.push(sum);
            return
        }

        subsetsRecursive(nums, i + 1, sum + nums[i]);
        subsetsRecursive(nums, i + 1, sum);
    }

    subsetsRecursive(nums);

    allSums.sort((a, b) => b - a);

    return allSums.slice(0, k);
}

console.log(subsets([1,2,3,4], 4))