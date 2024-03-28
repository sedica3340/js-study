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

// 사과바구니에 있는 사과들의 모든 당도를 합산한 결과 얻기