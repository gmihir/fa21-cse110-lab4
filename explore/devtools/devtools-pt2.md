1. The bug is that it is taking the numbers as strings and concatenating them, instead of adding the values of the numbers.
   
2. I would fix it by parsing the values of num1 and num2 to number types with base 10. I can use the built-in parseInt() method in javascript to do so.