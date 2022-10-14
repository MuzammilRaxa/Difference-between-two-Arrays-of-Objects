// Get Difference between two Arrays of Objects #
// To get the difference between two arrays of objects:

// Use the filter() method to iterate over the first array.
// Check if each object is not contained in the second array.
// Repeat steps 1 and 2 for the second array.
// Concatenate the results to get the complete difference.
// index.js
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