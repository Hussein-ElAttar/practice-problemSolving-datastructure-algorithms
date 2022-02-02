// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
function lengthOfLongestSubstring(str) {
    let absLongest = 0;
    const windowStr = new Set();

    for (let i = 0; i < str.length; i++) {
        let head = str[i - windowStr.size];
        let tail = str[i];

        if (windowStr.has(tail)) {
            while (windowStr.size > 0 && head != tail) {
                windowStr.delete(head);
                head = str[i - windowStr.size]
            }

        } else {
            windowStr.add(tail);
        }

        absLongest = Math.max(absLongest, windowStr.size);
    }

    return absLongest;
}

console.log(lengthOfLongestSubstring("abbd"));
// console.log(lengthOfLongestSubstring(""));
// console.log(lengthOfLongestSubstring("a"));
// console.log(lengthOfLongestSubstring("abbdewaqzz"));
// console.log(lengthOfLongestSubstring("abcb"));
// console.log(lengthOfLongestSubstring("bbbbb"));
// console.log(lengthOfLongestSubstring("pwwkew"));