"use strict";
// Array Methods
// push Method
/* Functionality: The push method adds one or more elements to the end of an array.

Return Value: It returns the new length of the array after adding the elements.

Changes Original Array: Yes, the original array is modified by adding elements to the end.

Parameters: The elements you want to add to the array having same data type as of array.

Example: */
const numbers = [1, 2, 3];
const returnedValue = numbers.push(4, 5);
console.log(returnedValue);
// Result: numbers = [1, 2, 3, 4, 5], returnedValue = 5
// Pop Method
/* Functionality: The pop method removes the last element from the end of an array.

Return Value: It returns the removed element.

Changes Original Array: Yes, the original array is modified by removing the last element. Example: */
const numbers2 = [1, 2, 3];
const removedElement = numbers2.pop();
console.log(removedElement);
// Result: numbers = [1, 2], removedElement = 3
