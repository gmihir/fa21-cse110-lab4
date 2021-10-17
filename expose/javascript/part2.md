1. It will print ```3``` because this is the final value of ```i```. This is because ```i``` is post-incremented, and so after it reaches a value of ```3```, the for loop is no longer executed (```3 > prices.length``` is false since ```3 === prices.length```).
2. It will print the last value of ```discountedPrice```, which is ```150``` (300 * 0.5). 
3. It will print out the value of ```finalPrice``` which is ```150```, since ```Math.round(150 * 100) / 100 === 150```
4. It will return the array of finalPrices, which will be ```[50,100,150]```.
5. There will be an error because ```i``` is out of scope since it was declared with ```let```.
6. There will be an error because ```discountedPrice``` is out of scope since it was declared with ```let```.
7. It will print out the value of ```finalPrice``` which is ```150```, since ```Math.round(150 * 100) / 100 === 150```
8. It will return the array of finalPrices, which will be ```[50,100,150]```. There are no scope issues since ```discounted``` was instantiated with ```let``` in the same block and has the same scope as the ```return``` statement.
9. At line 11 specifically, ```i``` is still out of scope and will give an error since it is using the ```let``` keyword.
10. It will print ```3``` as that is the length of the input array ```prices```.
11. The function will return the same array as earlier: ```[50,100,150]```. This is because while there is a ```const``` that takes on multiple values, it is always being reinstantiated on every loop iteration. This is allowed and the calculation remains the same.
12. A. ```student.name```
    
    B. ```student['Grad Year']```

    C. ```student.greeting()```

    D. ```student['Favorite Teacher'].name```

    E. ```student.courseLoad[1]```

13. A. ```'32'``` (2 was converted to a string)
    
    B. ```1``` (3 was converted to a numeric value)

    C. ```3``` (null is converted to 0)

    D. ```'3null'``` (null is converted to a string)

    E. ```4``` (true is converted to 1)

    F. ```0``` (false is converted to 0 and null is converted to 0)

    G. ```3undefined``` (undefined is converted to a string)

    H. ```NaN``` (undefined is converted to NaN, which is then subtracted from 3, which is converted from string to number)

14. A. ```true``` ('2' is converted to a number)

    B. ```false``` ('2' and '12' are both converted to numbers)

    C. ```true``` ('2' is converted to a number)

    D. ```false``` (unequal since === comparator does not allow for type conversion and '2' is a string while 2 is a number)

    E. ```false``` (true is converted to 1, which is unequal to 2)

    F. ```true``` (The Boolean object is instantiated with a default value of true. true === true holds)

15. == allows for type conversion but === does not. For example, 1 == '1' will be true since the '1' is converted to a number, but 1 === '1' will be false because there will be no type conversion and it is trivial that a string is not equivalent to a number.

17. ```[2,4,6]``` is returned. This is because the callback function is ```doSomething```, which returns double the input number. This callback function is called on each element of the input array. So, each element in ```[1,2,3]``` is multiplied by 2 and the result is ```[2,4,6]```.

19. ```1 4 3 2``` (each on a new line). 
    