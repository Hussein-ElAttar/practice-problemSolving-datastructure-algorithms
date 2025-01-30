x = [7, 1, 3, 2, 4, 5, 6]
# x = [4,3,1,2]


def swap(ar, x, y):
    ar[x], ar[y] = ar[y], ar[x]


def minimumSwaps(arr):
    swaps = 0
    for i in range(len(arr)):
        while arr[i] - 1 != i:
            swap(arr, arr[i] - 1, i)
            swaps += 1

    return swaps


print(minimumSwaps(x))
