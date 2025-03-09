
def binary_search(nums, target: int, start=0, end=None) -> int:
    if end is None:
        end = len(nums) - 1

    middle_index = int((start + end) // 2)

    if target == nums[middle_index]:
        return middle_index

    if target < nums[middle_index]:
        return binary_search(nums, target, start, middle_index)

    else:
        return binary_search(nums, target, middle_index, end)


print(binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7))
