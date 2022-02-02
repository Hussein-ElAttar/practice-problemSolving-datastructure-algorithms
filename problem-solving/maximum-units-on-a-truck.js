var maximumUnits = function (boxTypes, maxBoxes) {
    boxTypes = boxTypes.sort((a, b) => b[1] - a[1]);

    let collectedUnits = 0, collectedBoxes = 0;

    for (const [availableBoxesOfCurrentType, unitsPerBox] of boxTypes) {
        const BoxesRemaining = maxBoxes - collectedBoxes;

        if (BoxesRemaining <= availableBoxesOfCurrentType) {
            return collectedUnits + BoxesRemaining * unitsPerBox
        }

        collectedUnits += availableBoxesOfCurrentType * unitsPerBox;
        collectedBoxes += availableBoxesOfCurrentType;
    }

    return collectedUnits;
};

console.log(maximumUnits([[5, 10], [2, 5], [4, 7], [3, 9]], 10));




    // const sortedBoxTypes = boxTypes.sort((a, b) => b[1] - a[1]);
    // let collectedUnits = 0, collectedBoxes = 0;
    // let i = 0;
    // while (collectedBoxes < maxBoxes) {
    //     const availableBoxesOfCurrentType = sortedBoxTypes[i][0];
    //     const unitsPerBox = sortedBoxTypes[i][1];
    //     const maxRemainingBoxes = maxBoxes - collectedBoxes;

    //     if (maxRemainingBoxes <= availableBoxesOfCurrentType) {
    //         return collectedUnits + maxRemainingBoxes * unitsPerBox
    //     }

    //     collectedUnits += availableBoxesOfCurrentType * unitsPerBox;
    //     collectedBoxes += availableBoxesOfCurrentType;
    //     i++;
    // }
