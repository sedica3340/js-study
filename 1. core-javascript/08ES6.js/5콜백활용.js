const userList = [
    {
        account: "abc1234",
        userName: "대길이",
        job: "추노",
        address: "서울",
        hobbys: ["수영", "축구", "테니스"],
    },
    {
        account: "banana",
        userName: "빠나나",
        job: "과일",
        address: "서울",
        hobbys: ["푸드파이팅", "테니스"],
    },
    {
        account: "park1234",
        userName: "주차왕",
        job: "발렛파킹",
        address: "경기",
        hobbys: ["족구", "축구", "테니스", "영화감상"],
    },
    {
        account: "fire",
        userName: "불꽃남자카리스마",
        job: "게이머",
        address: "서울",
        hobbys: ["독서", "테니스"],
    },
];
// 취미가 두개인사람만 필터링해서 보내달라.
// const newArr = filterByHas2Hobby();
// console.log(newArr);
function filterUserLiveInseoul() {
    const filteredArray = [];
    for (let i of userList) {
        if (i.address === '서울') {
            filteredArray.push(i);
        }
    }
    return filteredArray;
}
// console.log(filterUserLiveInseoul());

function filterBy(condition) {
    const filteredArray = [];
    for (let i of userList) {
        if (condition(user)) {
            filteredArray.push(i);
        }
    }
    return filteredArray;
};