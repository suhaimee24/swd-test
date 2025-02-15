"""
เขียบนโปรแกรมหา index ของตัวเลขที่มีค่ามากที่สุดใน list

[Input]
numbers: list of numbers

[Output]
index: index of maximum number in list

[Example 1]
input = [1,2,1,3,5,6,4]
output = 5

[Example 2]
input = 
output = list can not blank
"""


class Solution:

    def find_max_index(self, numbers: list) -> int | str:
        if len(numbers) == 0:
            return "list can not blank"
        max_index = 0
        max_value = numbers[max_index]
        for i in range(len(numbers)):
            if max_value < numbers[i]:
                max_index = i
                max_value = numbers[i]
        return max_index

s = Solution()
# ans 5
print(s.find_max_index([1,2,1,3,5,6,4]))
# ans list can not blank
print(s.find_max_index([]))
# ans 0
print(s.find_max_index([1000,1,2,1,3,5,6,4]))
# ans 7
print(s.find_max_index([1,2,1,3,5,6,4,100]))