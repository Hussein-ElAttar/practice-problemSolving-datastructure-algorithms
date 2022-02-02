function subsets(nums) {
    const allSubs = [];

    const subsetsRecursive = (i = 0, sub = []) => {

        if (i >= nums.length) {
            allSubs.push(sub);
            return;
        }

        subsetsRecursive(i + 1, sub.concat(nums[i]));
        subsetsRecursive(i + 1, sub);
    }

    subsetsRecursive();

    return allSubs
}

console.log('=====================');
console.log(subsets([1, 2, 3, 3]));
console.log('=====================');

// function subsets(nums) {
//     const allSubs = [];
//     const subs = [];

//     function subsetsRecursive(i = 0) {
//         if (i >= nums.length) {
//             allSubs.push([...subs]);
//             return
//         }

//         subs.push(nums[i]);
//         subsetsRecursive(i + 1);

//         subs.pop(nums[i]);
//         subsetsRecursive(i + 1);
//     }

//     subsetsRecursive();

//     return allSubs
// };

// function subsets (nums) {
//     const allSubs = [];

//     function subsetsRecursive(i = 0, subs = []) {
//         if (i >= nums.length) {
//             allSubs.push(subs);
//             return
//         }

//         subsetsRecursive(i + 1, subs.concat(nums[i]));
//         subsetsRecursive(i + 1, subs);
//     }

//     subsetsRecursive();

//     return allSubs
// };

// function subsets(nums) {
//     const allSubs = [[]];

//     for (const num of nums) {
//         for (const sub of [...allSubs]) {
//             allSubs.push(sub.concat(num))
//         }
//     }

//     return allSubs
// };
