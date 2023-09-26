# LEET CODE

# Brute Force
def strStr(haystack: str, needle: str) -> int:
  j = 0
  for i in range(len(haystack) - (len(needle) - 1)):
    for j in range(len(needle)):
      if haystack[i + j] != needle[j]:
        break

      if j == len(needle) - 1:
        return i

  return -1


print(strStr(haystack="abc", needle="c"))
print(strStr(haystack="sadbutsad", needle="sad"))
print(strStr(haystack="leetcode", needle="leeto"))
print(strStr(haystack="aleetcode", needle="leet"))
print(strStr(haystack="aaaaa", needle="bba"))
print(strStr(haystack="a", needle="a"))
print(strStr(haystack="mississippi", needle="issip"))
