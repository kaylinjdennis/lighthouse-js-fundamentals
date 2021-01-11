function concat(array1, array2) {
    let finalArray = array1;
    let array2Copy = array2;
    while (array2Copy.length > 0) {
        finalArray.push(array2Copy.shift());
    }
    return finalArray;
}

console.log(concat([1, 2, 3], [4, 5, 6]), "=?", [1, 2, 3, 4, 5, 6]);
console.log(concat([0, 3, 1], [9, 7, 2]), "=?", [0, 3, 1, 9, 7, 2]);
console.log(concat([], [9, 7, 2]), "=?", [9, 7, 2]);
console.log(concat([5, 10], []), "=?", [5, 10]);