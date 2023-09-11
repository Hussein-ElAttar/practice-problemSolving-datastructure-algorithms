def romanToInt(s):
    mappings = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}

    total = i = 0
    while i < len(s):
        char = s[i]

        if i == len(s) - 1:
            total += mappings[char]
            i += 1
        elif mappings[s[i + 1]] <= mappings[char]:  # Fix the comparison
            total += mappings[char]
            i += 1
        else:
            total += mappings[s[i + 1]] - mappings[char]
            i += 2 

    return total


print(romanToInt("VVI"))
