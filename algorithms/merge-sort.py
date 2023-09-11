
# -----------------------------------------------------------------------------------------------------------------------------
# def unique_paths(n, m):
#     if n == 1 or m == 1:
#         return 1

#     return unique_paths(n - 1, m) + unique_paths(n, m - 1)


# print(unique_paths(3, 3))

# -----------------------------------------------------------------------------------------------------------------------------
def merge_sort(arr):
    if len(arr) <= 1:
        return arr

    mid = len(arr) // 2
    left = arr[:mid]
    right = arr[mid:]

    left = merge_sort(left)
    right = merge_sort(right)

    return merge_arrays(left, right)


def merge_arrays(left, right):
    sorted_list = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            sorted_list.append(left[i])
            i += 1
        elif left[i] > right[j]:
            sorted_list.append(right[j])
            j += 1

    return sorted_list + left[i:] + right[j:]


x = [5, 2, 6, 9, 1, 34, 43, 21, 2, 23, -55, -55]
print(merge_sort(x))
