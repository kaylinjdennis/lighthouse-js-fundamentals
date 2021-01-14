function merge(array1, array2) {
    let finalArray = array1;
    let array2Copy = array2;
    while (array2Copy.length > 0) {
        finalArray.push(array2Copy.shift());
    }
    return finalArray.sort();
}
console.log(merge([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6]);
console.log(merge([4], [2, 5, 8]), "=?", [2, 4, 5, 8]);
console.log(merge([1, 2, 6], []), "=?", [1, 2, 6]);