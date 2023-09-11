import math

def binary_search(arr, key, start=None, end=None):
    start = start if start else 0
    end = end if end else len(arr) - 1
    index = math.ceil((end + start) / 2)

    if arr[index] == key:
        return index

    if arr[index] > key:
        return binary_search(arr, key, start, index - 1)
    else:
        return binary_search(arr, key, index + 1, end)


arr = [1, 2, 3, 5, 6, 7, 8, 9, 10]
print(binary_search(arr, 5))
