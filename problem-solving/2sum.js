// Input: numbers = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because numbers[0] + numbers[1] == 9, we return [0, 1].

function twoSumDict(numbers, target) {
    const dict = {};
    for (const [index, num] of numbers.entries()) {

        const diff = target - num;
        dict[diff] = index;

        if (dict[num] != undefined) return [dict[num], index];
    }

    // if (dict[num] != undefined) {
    //     return [dict[num], i];
    // }

    // dict[dif] = i;
    // for (let i = 0; i < numbers.length; i++) {
    //     const num = numbers[i];
    //     const dif = target - num;

    //     if (dict[dif] != undefined) {
    //         return [dict[dif], i];
    //     }

    //     dict[num] = i;
    // }

    return []
}

function twoSumPointers(numbers, target) {

    const sortedNumbers = numbers.sort((a, b) => a - b);

    let left = 0;
    let right = numbers.length - 1;

    while(left < right) {
        const sum = sortedNumbers[left] + sortedNumbers[right];

        if (sum == target) {
            return [left, right];
        }

        if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return [left, right];
}




function twoSum(numbers, target) {
    return twoSumPointers(numbers, target)
    // return twoSumDict(numbers, target)
}

console.log(twoSum([3, 3, 5, 11, 80], 85))
console.log(twoSum([2, 7, 11, 15], 9))






const dic = {};