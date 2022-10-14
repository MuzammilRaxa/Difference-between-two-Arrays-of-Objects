// Get Difference between two Arrays of Objects #
// To get the difference between two arrays of objects:

// Use the filter() method to iterate over the first array.
// Check if each object is not contained in the second array.
// Repeat steps 1 and 2 for the second array.
// Concatenate the results to get the complete difference.

const arr1 = [
    { id: 1, name: 'Tom' },
    { id: 2, name: 'John' },
];
const arr2 = [{ id: 1, name: 'Tom' }];

function getDifference(array1, array2) {
    return array1.filter(object1 => {
        return !array2.some(object2 => {
            return object1.id === object2.id;
        });
    });
}

// 👇️ [{id: 2, name: 'John'}]
console.log(getDifference(arr1, arr2));

// The function we passed to the Array.filter method gets called with each element (object) in the array.

// On each iteration, we use the Array.some method on the second array.

// The function we pass to the some() method also gets invoked with each element (object) in the array.

// We used the logical NOT (!) operator to negate the result from the some method, because we only care about objects that don't have the same id property between the arrays.

// If the condition is met, the some method returns true and the object gets included in the array the filter method returns.

// However, we only called the filter method on one of the arrays. So what happens if the first array contains less elements than the second?


const arrA = [{ id: 1, name: 'Tom' }];
// 📌 now second array has 2 elements
const arrB = [
    { id: 1, name: 'Tom' },
    { id: 2, name: 'John' },
];

function getDifference(array1, array2) {
    return array1.filter(object1 => {
        return !array2.some(object2 => {
            return object1.id === object2.id;
        });
    });
}

// 👇️ []
console.log(getDifference(arrA, arrB));
// The only thing that we changed is we switched the values between the arr1 and arr2 variables.

// Now we call the filter method on the first array, however the only object it contains is also contained in the second array, so the getDifference method returns an empty array.


// We would expect the return value to be [{id: 2, name: 'John'}].

// To solve this problem, we need to call the getDifference method two times and combine the results.
// index.js

const arrX = [{ id: 1, name: 'Tom' }];
const arrY = [
    { id: 1, name: 'Tom' },
    { id: 2, name: 'John' },
];

function getDifference(array1, array2) {
    return array1.filter(object1 => {
        return !array2.some(object2 => {
            return object1.id === object2.id;
        });
    });
}

const difference = [
    ...getDifference(arrX, arrY),
    ...getDifference(arrY, arrX)
];

// 👇️ [{id: 2, name: 'John'}]
console.log(difference);
// Here's what we did to get this working:

// Call the filter method on the first array and return only the objects that are not contained in the second array.
// Call the filter method on the second array and return only the objects that are not contained in the first array.
// We combined the results from the two arrays into a third array, using the spread operator (...) syntax.
// An easy way to think about the spread operator (...) is that we are unpacking the values of one array into another array.

// Now our example is complete and returns the difference between the two arrays of objects.