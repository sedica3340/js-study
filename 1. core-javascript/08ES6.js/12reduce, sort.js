const appleBasket = [
    {
        color: "green",
        sweet: 13,
    },
    {
        color: "red",
        sweet: 14,
    },
    {
        color: "red",
        sweet: 11,
    },
    {
        color: "green",
        sweet: 6,
    },
    {
        color: "green",
        sweet: 7,
    },
    {
        color: "green",
        sweet: 9,
    },
];
const userList = [
    {
        account: "abc1234",
        userName: "대길이",
        job: "추노",
        address: "서울",
        hobbys: ["수영", "축구", "테니스"],
        salary: 5400,
        age: 35,
    },
    {
        account: "banana",
        userName: "빠나나",
        job: "과일",
        address: "서울",
        hobbys: ["푸드파이팅", "테니스"],
        salary: 9700000,
        age: 18,
    },
    {
        account: "park1234",
        userName: "주차왕",
        job: "발렛파킹",
        address: "경기",
        hobbys: ["족구", "축구", "테니스", "영화감상"],
        salary: 3900000,
        age: 56,
    },
    {
        account: "fire",
        userName: "불꽃남자카리스마",
        job: "게이머",
        address: "서울",
        hobbys: ["독서", "테니스"],
        salary: 7900000,
        age: 42,
    },
];
//배열고차함수
// reduce : 배열의 각 요소들을 주어진 콜백에
// 맞게 합산 누적하여 하나의 결과값을 반환하는 함수
// reduce에 들어가는 callback
// callback(accumulator, currentValue)
// accumulator: 어떤 데이터를 계속 쌓아가는 변수
// currentValue: 현재 루프회차에서 사용할 데이터
// reduce는 반복을 실행할때마다 currentValue를 accumulator에 누적함..?
//                                              reduce의 콜백함수 말고 reduce의 두번째 매개변수 자리에 값을 넣으면 a(0번인덱스)대신 그 값이 들어감
//                                              + 기존에 a값을 누작하고 시작했기에 한번 덜하던 루프도 기본값을 채움으로써 한번 더 하게됨.

//                                                a는 첫값및누적값 b는 현재값 마지막 값은 reduce자체의 리턴값으로 나옴.
// const result = [1, 2, 3, 4, 5, 6].reduce(function(a, b){
//     console.log(`${a} + ${b} = ${a + b}`);
//     console.log(a);
//     console.log(b);
//     console.log('===========');
//     return a+b;
// }, 0);
// console.log(result);
//reduce의 콜백함수 다음 파라미터는 initialValue를 의미하며
// 반복문의 accumulator시작값을 의미함
// 따라서 0을 시작값으로 두고 return a + b; 를 하면
// 0 + 1 + 2 + 3 + 4 + 5 + 6
// 시작값을 없애면 accumulator의 시작값이 0번 인덱스로 지정되며
// 1 + 2 + 3 + 4 + 5 + 6

// 사과바구니에 있는 사과들의 모든 당도를 합산한 결과 얻기

const allSweet = appleBasket.reduce((totalSweet, apple) => {
    return totalSweet + apple.sweet;
}, 0);
console.log(allSweet);

console.log("===================");

function myReduce(arr, callback, init) {
    let accumulator = init === undefined ? arr[0] : init;
    const startIdx = init === undefined ? 1 : 0;
    for (let i = startIdx; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i]);
    }
    return accumulator;
}
// 사과 색깔별로 사과 개수 카운트하기
console.log("==================");
const countByColor = appleBasket.reduce((count, apple) => {
    if (apple.color in count) {
        count[apple.color]++;
    } else {
        count[apple.color] = 1;
    }
    return count;
}, {});
console.log(countByColor);
