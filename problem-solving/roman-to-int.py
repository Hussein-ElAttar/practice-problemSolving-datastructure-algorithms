def romanToInt(s):
    mappings = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}
    total = 0
    prev_value = 0  # Initialize the previous value

    for char in reversed(s):
        value = mappings[char]

        if value < prev_value:
            total -= value
        else:
            total += value

        prev_value = value  # Update the previous value

    return total


print(romanToInt("VVIV"))
