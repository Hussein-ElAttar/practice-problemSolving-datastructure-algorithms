'abbc', 'ddca'

def makeAnagram(s1, s2):
    dic_s1 = {}
    dic_s2 = {}
    count = {}

    for a in s1:
        dic_s1[a] = dic_s1[a] + 1 if dic_s1.get(a) is not None else 1

    for b in s2:
        dic_s2[b] = dic_s2[b] + 1 if dic_s2.get(b) is not None else 1


    for char in dic_s1:
        if char in dic_s2:
            count[char] = abs(dic_s1[char] - dic_s2[char])
        else:
            count[char] = dic_s1[char]

    for char in dic_s2:
        if not char in dic_s1:
            count[char] = abs(dic_s1[char] - dic_s2[char])
        else:
            count[char] = dic_s2[char]

    return sum([count[char] for char in count])



# ######### Brute Force solution ####################

# def makeAnagram(s1, s2):
#     s1_new = s1
#     s2_new = s2
#     for a in s1:
#         if a in s2:
#             s2_new = s2_new.replace(a, '', 1)

#     for b in s2:
#         if b in s1:
#             s1_new = s1_new.replace(b, '', 1)

#     return len(s1_new) + len(s2_new)

    


print(makeAnagram('abbc', 'ddca'))
print(makeAnagram('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke'))