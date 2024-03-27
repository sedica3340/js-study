const NOT_FOUND = -1;
function myIndexOf(arr, el) {
    let index = 0;
    for (let i of arr) {
        if (i === el) {
            return index;
        }
        index++;
    }
    return NOT_FOUND;
}
function myIncludes(arr, el) {
    return myIndexOf(arr, el) !== NOT_FOUND;
    
}





let foods = ['족발', '피자', '파스타', '김치찌개'];

let idx = myIncludes(foods, '파스타');
console.log(idx);