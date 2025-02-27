def length_of_longest_substring(self, s: str) -> int:
    left = longest = 0
    seen = set()
    for char in s:
        while char in seen:
            seen.remove(s[left])
            left += 1

        seen.add(char)
        longest = max(longest, len(seen))

    return longest


# Variation of sliding window

def length_of_longest_substring_b(self, s: str) -> int:
    left = right = longest = 0
    seen = set()
    for right in range(len(s)):
        while s[right] in seen:
            seen.remove(s[left])
            left += 1

        seen.add(s[right])
        longest = max(longest, len(seen))

    return longest


def length_of_longest_substring_c(s):
    window = set()
    i, j, max_length = 0, 0, 0

    while i < len(s):
        if s[i] in window:
            window.remove(s[j])
            j += 1
        else:
            window.add(s[i])
            max_length = max(max_length, len(window))
            i += 1

    return max_length
