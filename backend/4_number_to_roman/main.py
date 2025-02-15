"""
เขียบนโปรแกรมแปลงตัวเลยเป็นตัวเลข roman

[Input]
number: list of numbers

[Output]
roman_text: roman number

[Example 1]
input = 101
output = CI

[Example 2]
input = -1
output = number can not less than 0
"""


class Solution:
    roman_unit = [
        {"label": "M","value": 1000, "condition": 900, "label_condition": "CM" },
        {"label": "D","value": 500, "condition": 400, "label_condition": "CD"  },
        {"label": "C","value": 100, "condition": 90, "label_condition": "XC"  },
        {"label": "L","value": 50, "condition": 40, "label_condition": "XL"  },
        {"label": "X","value": 10, "condition": 9, "label_condition": "IX"  },
        {"label": "V","value": 5, "condition": 4, "label_condition": "IV"  },
        {"label": "I","value": 1,"condition": 1, "label_condition": ""  },
    ]

    def number_to_roman(self, number: int) -> str:
        if number < 0:
            return "number can not less than 0"
        if number == 0:
            return ""
        text = ""
        for item in self.roman_unit:
            count = number // item['value']
            if count > 0:
                text += item['label']*count
            number %= item['value']
            if number // item['condition']:
                text += item['label_condition']
                number %= item['condition']
        return text


s = Solution()
#  CI
print(s.number_to_roman(101))
# number can not less than 0
print(s.number_to_roman(-1))
# empty
print(s.number_to_roman(0))
# VIII
print(s.number_to_roman(8))
# IX
print(s.number_to_roman(9))
# XLIV
print(s.number_to_roman(44))
# XCIX
print(s.number_to_roman(99))
# CDXLIV
print(s.number_to_roman(444))
# MCMXCVIII
print(s.number_to_roman(1998))