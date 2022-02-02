const str = "{{}[][[[{}]]]}(";

function checkIsValid(bracketsStr) {
    const stack = [];

    for (let char of bracketsStr) {
        if ('({['.includes(char)) {
            stack.push(char);
            continue;
        }

        const previousChar = stack[stack.length - 1];

        // Current character doesn't close the previous

        if (char == '}' && previousChar != '{') {
            return false;
        }

        if (char == ')' && previousChar != '(') {
            return false;
        }

        if (char == ']' && previousChar != '[') {
            return false;
        }

        stack.pop();
    }

    return stack.length == 0
}

console.log(checkIsValid(str));