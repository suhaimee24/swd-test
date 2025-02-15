"""
เขียนโปรแกรมหาจำนวนเลข 0 ที่ออยู่ติดกันหลังสุดของค่า factorial โดยห้ามใช้ function from math

[Input]
number: as an integer

[Output]
count: count of tailing zero as an integer

[Example 1]
input = 7
output = 1

[Example 2]
input = -10
output = number can not be negative
"""


class Solution:
    def factorial(self, number: int) -> int:
        if(number <= 1):
            return 1
        return number * self.factorial(number -1)

    def count_zero(self, number:int) -> int:
        zeros = 0
        while number > 0:
            if number % 10 == 0:
                zeros += 1
                number //= 10
            else:
                return zeros

    def find_tailing_zeroes(self, number: int) -> int | str:
        if(number < 0):
            return "number can not be negative"
        factorial_value = self.factorial(number)
        return self.count_zero(factorial_value)



s = Solution()
# ans 1
print(s.find_tailing_zeroes(7))  
# ans number can not be negative
print(s.find_tailing_zeroes(-10))
# ans 2
print(s.find_tailing_zeroes(10))