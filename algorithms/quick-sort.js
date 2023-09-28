const ar = [11, 5, 45, 8, 44, 9, 7, 50, 58, 4, 10, 9]

function quickSort (ar = [], start = 0, end = ar.length - 1) {

    // Exit condition
    if (start >= end) { return; }

    const pivot = ar[end];

    let partitionIndex = start;

    // Partition logic:
    for (let i = start; i < end; i++) {
        if (ar[i] < pivot) {
            swap(ar, i, partitionIndex);
            partitionIndex++;
        }
    }

    swap(ar, partitionIndex, end);

    quickSort(ar, start, partitionIndex - 1);
    quickSort(ar, partitionIndex + 1 , end);
}

function swap (ar, i, j) {
    const temp = ar[i];
    ar[i] = ar[j];
    ar[j] = temp;
}

quickSort(ar);

console.log(ar);
