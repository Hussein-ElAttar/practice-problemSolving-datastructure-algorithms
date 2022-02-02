/* 
    Given two strings s and t, return true if t is an anagram of s, and false otherwise.
    An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once
    Input: s = "anagram", t = "nagaram"
    Output: true
*/

function isAnagram(a, b) {
    if (a.length != b.length) return false;

    const dic = {};
    a.split('').forEach(char => {
        if (dic[char] > 0) {
            dic[char]++;
        } else {
            dic[char] = 1;
        }
    });

    b.split('').forEach(char => {
        if (dic[char] > 0) {
            dic[char]--;
        } else {
            dic[char] = 1;
        }
    });

    return Object.values(dic).filter(v => v != 0).length == 0;
}

function countDeletions(a, b) {
    const dic = {};
    a.split('').forEach(char => {
        if (dic[char] > 0) {
            dic[char]++;
        } else {
            dic[char] = 1;
        }
    });

    b.split('').forEach(char => {
        if (dic[char] != undefined) {
            dic[char]--;
        } else {
            dic[char] = -1;
        }
    });

    // Operations needed are the non zero values
    return Object.values(dic)
        .reduce((total, current) => total + Math.abs(current), 0);
}

console.log(isAnagram('a', 'aaa'));
console.log(countDeletions('car', 'racc'));
console.log(countDeletions('abc', 'amnop'));
console.log(countDeletions('abc', 'cde'));
console.log(countDeletions('abb', 'aaa'));