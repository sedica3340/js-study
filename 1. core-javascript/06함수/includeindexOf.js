function IC (arr, el) {
    let result = false;
    for (let i of arr) {
        if (i === el) {
            result = true;
        }
    }
    return result;
}

let arr1 = [1, 2, 3, 4, 5, 6];

console.log(IC (arr1, 0));

function IO (arr, el) {
    let index = 0;
    for (let i of arr) {
        if (i === el) {
            return index;
        }
        index++;
    }
    return -1;
}
console.log(IO(arr1, 5));