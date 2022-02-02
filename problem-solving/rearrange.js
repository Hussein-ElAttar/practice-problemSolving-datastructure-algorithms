/* 
[Example]
Input: [5,3,7,10]
Output: [3,5,10,7]

[Explanation]
5:  its binary representation is (0101), count of ones is 2
3:  its binary representation is (0011), count of ones is 2
7:  its binary representation is (0111), count of ones is 3
10: its binary representation is (1010), count of ones is 2

N.B: when numbers are qual in the ones' count, then you should reorder them ascendingly based on their decimal values.

so the final list should be: [3,5,10,7]
*/

/**
 * 
 * @param {Number[]} elements 
 */
function rearrange(numbers) {
    const dic = {};

    numbers.forEach(num => {
        const sum = num.toString(2).split('')
            .map(numString => Number(numString))
            .reduce((accumulator, currentValue) => accumulator + currentValue, 0)

        dic[sum] = dic[sum] ? dic[sum] : [];
        dic[sum].push(num);
    })

    const sorted2DArray = Object.values(dic).map(ar => ar.sort((a, b) => a - b));

    // Flatten the arrays
    return Array.prototype.concat.apply([], sorted2DArray)
}

/**
 * 
 * @param {Number[]} elements 
 */
function rearrange2(numbers) {
    return numbers
        .map(num => ({
            num,
            binarySum: Number(num).toString(2).split('').reduce((acc, v) => Number(v) + acc, 0)
        }))
        .sort((a, b) => {
            const binaryDiff = a['binarySum'] - b['binarySum'];
            const decimalDiff = a['num'] - b['num'];

            return binaryDiff < 0 ? binaryDiff : decimalDiff;
        })
        .map(obj => obj.num)
}

console.log(rearrange([5, 7, 3, 10]));
console.log(rearrange2([5, 7, 3, 10]));