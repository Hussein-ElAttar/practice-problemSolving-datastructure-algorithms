
def unique_paths(n, m):
    if n == 1 or m == 1:
        return 1

    return unique_paths(n - 1, m) + unique_paths(n, m - 1)


print(unique_paths(3, 3))
