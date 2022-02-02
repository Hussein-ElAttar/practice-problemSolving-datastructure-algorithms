# Input: numbers = [2,7,11,15], target = 9
# Output: [0,1]
# Output: Because numbers[0] + numbers[1] == 9, we return [0, 1].
from audioop import reverse


def twoSumPointers(numbers, target):
    sortedNumbers = sorted(numbers)
    left = 0
    right = len(numbers) - 1

    print(sortedNumbers)
    while(left < right):
        sum = sortedNumbers[left] + sortedNumbers[right]

        if (sum == target):
            return [left, right]

        if (sum < target):
            left+=1
        else:
            right-=1

    return [left, right];

print(twoSumPointers([3, 3, 5, 11, 80], 85))
print(twoSumPointers([2, 7, 11, 15], 9))
