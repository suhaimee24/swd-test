"""
เขียบนโปรแกรมแปลงตัวเลยเป็นคำอ่านภาษาไทย

[Input]
number: positive number rang from 0 to 10_000_000

[Output]
num_text: string of thai number call

[Example 1]
input = 101
output = หนึ่งร้อยเอ็ด

[Example 2]
input = -1
output = number can not less than 0
"""


class Solution:
    number_thai = ["ศูนย์", "หนึ่ง", "สอง", "สาม", "สี่", "ห้า", "หก", "เจ็ด", "แปด", "เก้า"]
    unit_thai = ["","สิบ", "ร้อย", "พัน", "หมื่น", "แสน", "ล้าน"]

    def number_to_thai(self, number: int) -> str:
        if number < 0:
            return "number can not less than 0"
        if number == 0:
            return self.number_thai[0]
        numbers = list(map(int, str(number)))
        numbers_len = len(numbers)
        numbers.reverse()
        words = []
        for i in range(numbers_len):
            number = numbers[i]
            index_unit = i % 6
            if index_unit == 0 and i//6 > 0 :
                words.append(self.unit_thai[6] * (i//6))
            if number == 1 and index_unit == 0 and (numbers_len-i) > 1 :
                text = 'เอ็ด'
            elif number == 2 and index_unit == 1:
                text = "ยี่"
            elif number == 1 and index_unit == 1:
                text = ""
            else:
                text = self.number_thai[number]
            if number > 0:
                words.append(text+self.unit_thai[index_unit])
        words.reverse()
        return "".join(words)

s = Solution()
# หนึ่งร้อยเอ็ด
print(s.number_to_thai(101))
# number can not less than 0
print(s.number_to_thai(-1))
# ศูนย์
print(s.number_to_thai(0))
# ยี่สิบเอ็ด
print(s.number_to_thai(21))
# หนึ่งร้อยสิบเอ็ด
print(s.number_to_thai(111))
# สองพันยี่สิบสาม
print(s.number_to_thai(2023))
# หนึ่งร้อยยี่สิบสามล้านสี่แสนห้าหมื่นหกพันเจ็ดร้อยแปดสิบเก้า
print(s.number_to_thai(123456789))