function showEvenNumber(n) {
    let arr = [];
    for(let i = 1; i <= n; i++) {
        if(i % 2 === 0) {
            arr.push(i);
        }
    }
    console.log(arr);
}

function showOddNumber(n) {
    let arr = [];
    for(let i = 1; i <= n; i++) {
        if(i % 2 === 1) {
            arr.push(i);
        }
    }
    console.log(arr);
}

function showOddOrEvenNumber(n, isOdd) {
    let arr = [];
    for(let i = 1; i <= n; i++) {
        if(i % 2 === isOdd) {
            arr.push(i);
        }
    }
    console.log(arr);
}
function showXNumber(n, x) {
    let arr = [];
    for(let i = 1; i <= n; i++) {
        if(i % x === 0) {
            arr.push(i);
        }
    }
    console.log(arr);
}
// showEvenNumber(7);
// showOddNumber(7);
// showOddOrEvenNumber(7,1);

// 콜백을 이용한 솔루션
// 정수 n을 전달하면 1 ~ n까지의 정수를 조건에 맞게 출력
function showNumber(n, condition) {
    let arr = [];
    for(let i = 1; i <= n; i++) {
        if (condition(i)) {
            arr.push(i);
        }
    }
    console.log(arr);
}
showNumber(50, i => i % 2 === 1);
showNumber(50, function(i) {
    return (i % 2 === 0);
});
showNumber(50, function(i) {
    return (i % 6 === 0 && i % 12 !== 0);
});


console.log('=============================');

function makeCook(recipeName, recipeCode) {
    console.log(`#### 나만의 맛도리 쩝쩝박사 레시피 ####`);
    console.log(`!!! 요리 이름: ${recipeName}`)
    // 실제 레시피 출력은 만들어서 출력해주세요
    recipeCode();



    console.log(`~~~ 참 쉽죠 여러분도 이대로 만들어보세요~! ~~~`);
}

makeCook('맛도리쩝쩝라면', () => {
    console.log(`1. 아리수 팔팔 끼리기`);
    console.log(`2. 대파 양파 청양고추 팍팍넣기`);
    console.log(`3. ㅋㅋㅋ 맛점띠~`);
})