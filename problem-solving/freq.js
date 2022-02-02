/*
    Operation   Array   Output
    (1,1)       [1]
    (2,2)       [1]
    (3,2)                   0
    (1,1)       [1,1]
    (1,1)       [1,1,1]
    (2,1)       [1,1]
    (3,2)                   1
*/

console.log(freqQuery([
    [1, 3],
    [2, 3],
    [3, 2],
    [1, 4],
    [1, 5],
    [1, 5],
    [1, 4],
    [3, 2],
    [2, 4],
    [3, 2],
]));

function freqQuery(queries) {
    const frequencies = {};
    const usedFrequencies = {};
    const output = [];

    for (let i = 0; i < queries.length; i++) {
        const query = queries[i];

        const operation = query[0];
        const num = query[1];

        switch (operation) {
            case 1:
                // Remove Old occurrences
                usedFrequencies[frequencies[num]] = (usedFrequencies[frequencies[num]] || 1) - 1;

                // Add new occurrences
                frequencies[num] = (frequencies[num] || 0) + 1;
                usedFrequencies[frequencies[num]] = (usedFrequencies[frequencies[num]] || 0) + 1;
                break;
            case 2:
                // Remove occurrences
                usedFrequencies[frequencies[num]] = (usedFrequencies[frequencies[num]] || 1) - 1;
                frequencies[num] = (frequencies[num] || 1) - 1;

                // Add new occurrences
                usedFrequencies[frequencies[num]] = (usedFrequencies[frequencies[num]] || 0) + 1
                break;
            case 3:
                output.push(usedFrequencies[num] > 0 ? 1 : 0);
                break;
        }
    }
    return output;
}
