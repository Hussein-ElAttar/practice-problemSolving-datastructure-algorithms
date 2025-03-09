def top_k_frequent(nums, k):
    # -------------------------------------------------
    count_map = {}
    for num in nums:
        count_map[num] = count_map.get(num, 0) + 1

    # -------------------------------------------------
    bucket = [[] for _ in range(len(nums) + 1)]

    for key, val in count_map.items():
        bucket[val].append(key)

    # -------------------------------------------------
    top_k_frequent = []
    for i in range(len(bucket) - 1, 0, -1):
        for num in bucket[i]:
            top_k_frequent.append(num)
            if len(top_k_frequent) == k:
                return top_k_frequent


print(top_k_frequent([1, 2, 2, 3, 3, 3, 3], 2))
