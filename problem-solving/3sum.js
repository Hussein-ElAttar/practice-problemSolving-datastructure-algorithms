/**
 * @param {number[]} nums
 * @return {number[][]}
*/
function threeSum(numbers) {

    numbers.sort((a, b) => a - b);
    const combinations = [];

    for (let i = 0; i < numbers.length - 1; i++) {
        let left = i + 1;
        let right = numbers.length - 1;

        if (i > 0 && numbers[i] == numbers[i - 1]) continue;

        while (left < right) {
            const sum = numbers[i] + numbers[left] + numbers[right];

            if (sum == 0) {
                combinations.push([numbers[i], numbers[left], numbers[right]]);
                left++;
                right--;

                while (numbers[left] == numbers[left - 1] && left < right) {
                    left++;
                }

                while (numbers[right] == numbers[right + 1] && left < right) {
                    right--;
                }


            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return combinations;
}

console.log(threeSum([0, 0, 0, 0]))
console.log(threeSum([-1, 0, 11111111111111, 2, -1, -4]))