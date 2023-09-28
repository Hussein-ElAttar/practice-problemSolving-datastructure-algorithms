def lengthOfLongestSubstring(self, s: str) -> int:
    left = right = max_length = 0
    substring_set = set()
    for right in range(len(s)):
        if s[right] in substring_set:
            while s[right] in substring_set:
                substring_set.remove(s[left])
                left += 1

        substring_set.add(s[right])
        right += 1
        max_length = max(max_length, len(substring_set))

    return max_length