/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let commonPrefix = "";

    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i];
        let alreadyUsed = false;
        for (let j = 1; j < strs.length; j++) {
            const currWord = strs[j];
            if (char == currWord[i]) {
                if (!alreadyUsed) {
                    commonPrefix = commonPrefix.concat(char);
                    alreadyUsed = true;
                }
            } else {
                return j == 1 ? commonPrefix: commonPrefix.slice(0, -1);
            }
        }
    }

    return commonPrefix;
};

console.log(longestCommonPrefix(["leet", "leets", ""]))