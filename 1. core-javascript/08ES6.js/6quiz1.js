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
function map(condition) {
    const newArr = [];
    for (let i of userList) {
        newArr.push(condition(i));
    }
    return newArr;
}




// 회원정보에서 회원의 이름들만 다 추출해서 배열에 담아줘
console.log('=========================');
const nameList = map(user => user.userName);
console.log(nameList);
// 회원정보에서 회원의 주소들만 다 추출해서 배열에 담아줘
const addressList = map(user => user.address);
console.log(addressList);
const firstHobbyList = map(user => user.hobbys[0]);
console.log(firstHobbyList);

// 모든 회원의 이름과 계정을 연결해서 배열에 담아줘
// [ 대길이(abc1234), 빠나나(banana), … ]
const nameAndAccount = map(user => `${user.userName}(${user.account})`);
console.log(nameAndAccount);