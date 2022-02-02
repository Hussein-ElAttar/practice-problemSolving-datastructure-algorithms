function romanToInt(s) {
    const mappings = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

    let total = 0;
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        const nextChar = s[i + 1];

        if (mappings[nextChar] <= mappings[char]) {
            total += mappings[char];
        } else if (nextChar == undefined) {
            total += mappings[char];
        } else {
            i++;
            total += (mappings[nextChar] - mappings[char]);
        }
    }

    return total;
}

console.log(romanToInt("VVI"))