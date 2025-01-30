def findMin(self, nums):
    for i in range(len(nums)):
        if nums[i] < nums[i - 1]:
            return nums[i]

    return nums[0]
    