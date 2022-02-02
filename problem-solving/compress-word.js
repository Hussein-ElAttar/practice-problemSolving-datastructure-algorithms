/**
Implement a function to compress words, and it has a customizable level of compression.

[Input Format]
word: string - a word to compress.
k: number - it defines the compression level. This means the count of consecutive occurrence of any character should not be greater than or equal to 'k'. otherwise, you should remove that repetitive sequence from the word completely.

[Output Format]
string - the word after compression.

[Example]
word =  'kdabbcccbaaddk'
k = 3

Output = 'kk'

[Explanation]
Iteration #1
compressed word = 'kdabbbaaddk'

Iteration #2
compressed word = 'kdaaaddk'

Iteration #3
compressed word = 'kdddk'

Iteration #4
compressed word = 'kk'

*/


/**
 *
 * @param {String} word
 * @param {Number} k
 */
function compressWord(word, k) {
  let charAr = word.split('');
  let startIndexToRemove = null;

  for (let i = 0; i < charAr.length; i++) {
    const char = charAr[i];

    const shouldRemoveNextSequence = charAr
      .slice(i, i + k)
      .filter(sequenceChar => char == sequenceChar)
      .length == k;

    if (shouldRemoveNextSequence) {
      startIndexToRemove = i;
      break;
    }
  }

  if (startIndexToRemove != null) {
    charAr.splice(startIndexToRemove, k);
    return compressWord(charAr.join(''), k);
  }

  return word;
}

function compressWord2(word, k) {
  let shouldCheckAgain = true;

  while (shouldCheckAgain) {
    shouldCheckAgain = false;
    let repeatCount = 0;

    for (let i = 0; i < word.length; i++) {
      if (word[i] != word[i - 1]) {
        repeatCount = 0;
        continue;
      }

      repeatCount++;

      if (repeatCount == k - 1) {
        shouldCheckAgain = true;
        const removedStart = i - k + 1;
        word = word.slice(0, removedStart) + word.slice(removedStart + k)
        break;
      }
    }
  }
  return word
}

console.log(compressWord("kdabbbaaddk", 3));
console.log(compressWord2("kdabbbaaddk", 3));




// function compressWord(word, k) {
//   const finalIndexesToRemove = [];
//   const charAr = word.split('');

//   charAr.forEach((char, i)=> {
//     const indexesToRemove = [i];

//     for (let j = i + 1; j < i + k; j++) {
//       const nextChar = word[j];

//       if (nextChar != char) { break; }

//       indexesToRemove.push(j);

//       if (indexesToRemove.length == k) {
//         finalIndexesToRemove.push(...indexesToRemove);
//       }
//     }
//   })

//   // Remove consecutive chars
//   finalIndexesToRemove.forEach(index => charAr[index] = null);
//   word = charAr.filter(el => el).join('');

//   // Re-evaluate word
//   if (finalIndexesToRemove.length) {
//     return compressWord(word, k)
//   }

//   // Base condition ==> no operations done
//   return word;

// }