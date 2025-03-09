def longest_consecutive_seq_non_optimized(nums):
    max_len = 0
    current_len = 1
    nums = sorted(list(set(nums)))

    for i in range(len(nums) - 1):
        if nums[i + 1] - nums[i] == 1:
            current_len += 1
        else:
            current_len = 0

        max_len = max(max_len, current_len)

    return max_len


def longest_consecutive_seq(nums):
    num_set = set(nums)
    longest = 0

    for num in nums:
        if num - 1 not in num_set:
            counter = 1

            while (num + counter) in num_set:
                counter += 1

            longest = max(longest, counter)

    return longest


print(longest_consecutive_seq_non_optimized([2, 20, 4, 10, 3, 4, 5]))
print(longest_consecutive_seq([2, 20, 4, 10, 3, 4, 5]))

print(longest_consecutive_seq_non_optimized([0, 3, 2, 5, 4, 6, 1, 1]))
print(longest_consecutive_seq([0, 3, 2, 5, 4, 6, 1, 1]))
