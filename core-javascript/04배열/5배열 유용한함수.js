let foodList = ['닭꼬치', '볶음밥', '짜장면', '족발'];

let food = '짜장면';
console.log(foodList.indexOf('짜장면'));
console.log(food.indexOf('장'));

console.log(foodList.includes('떡볶이'));
console.log(foodList.includes('족발'));
console.log(food.includes('장'));
console.log(food.includes('자'));

let newFoodList = foodList.slice(1, 3);
console.log(newFoodList);
let newWord = food.slice(0, 2);
console.log(newWord);

let nums = [10, 20, 30, 40, 50];
let numsCopy = nums.slice();
numsCopy.reverse();
console.log(numsCopy);
console.log(nums);

let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
let arr3 = arr1.concat(arr2);
console.log(arr3);

console.log(foodList);
foodList.splice(2, 1);
console.log(foodList);

foodList.splice(0, 1, '피에스타');
console.log(foodList);

foodList.splice(2, 0, '마라탕');
console.log(foodList);

foodList.splice(2);
console.log(foodList);