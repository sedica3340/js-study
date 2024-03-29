function makeLine() {
    console.log("==================================================");
}
const traders = [
    {
        trader: {
            name: "김철수",
            city: "대전",
        },
        year: 2023,
        value: 500000,
    },
    {
        trader: {
            name: "박영희",
            city: "서울",
        },
        year: 2022,
        value: 600000,
    },
    {
        trader: {
            name: "김철수",
            city: "대전",
        },
        year: 2022,
        value: 1200000,
    },
    {
        trader: {
            name: "박영희",
            city: "서울",
        },
        year: 2023,
        value: 650000,
    },
    {
        trader: {
            name: "뽀로로",
            city: "부산",
        },
        year: 2023,
        value: 800000,
    },
    {
        trader: {
            name: "루피",
            city: "대전",
        },
        year: 2022,
        value: 780000,
    },
    {
        trader: {
            name: "김철수",
            city: "대전",
        },
        year: 2023,
        value: 1500000,
    },
    {
        trader: {
            name: "김철수",
            city: "대전",
        },
        year: 2022,
        value: 2500000,
    },
    {
        trader: {
            name: "김철수",
            city: "대전",
        },
        year: 2022,
        value: 500000,
    },
];

// 연습 1: 2022년에 발생한 모든 거래를 찾아
//   거래자 정보(이름, 도시)를 배열에 매핑해주세요

const tradeAt2022 = traders
    .filter((trade) => trade.year === 2022)
    .map((trade) => trade.trader);
console.log(tradeAt2022);
makeLine();
// 연습 2: 거래자가 근무하는 모든 도시이름을 배열에 담아주세요.
const tradingCity = [];
traders
    .map((trade) => trade.trader.city)
    .forEach((i) => {
        if (!tradingCity.includes(i)) {
            tradingCity.push(i);
        }
    });
console.log(tradingCity);

makeLine();
// 연습 3: 대전에 근무하는
// 모든 거래자를 찾아 거래자정보(이름, 도시)를 배열에 매핑해주세요.
const workingInDaejeon = [];
traders
    .filter((trade) => trade.trader.city === "대전")
    .map((trade) => trade.trader)
    .forEach((i) => {
        workingInDaejeon.push(i);
    });
console.log(workingInDaejeon);
makeLine();
// 연습 4: 모든 거래자의 이름을 배열에 모아주세요.
const allTradersName = [];
traders
    .map((trade) => trade.trader.name)
    .forEach((i) => {
        if (!allTradersName.includes(i)) {
            allTradersName.push(i);
        }
    });
console.log(allTradersName);
makeLine();
// 연습 5: 서울에 사는 거래자의 모든 거래액의 총합 출력.
let seoulTotal = 0;
traders
    .filter((trade) => trade.trader.city === "서울")
    .map((trade) => trade.value)
    .forEach((i) => (seoulTotal += i));
console.log(`거래총액: ${seoulTotal}`);
makeLine();
const seoultotal2 = traders
    .filter((trade) => trade.trader.city === "서울")
    .reduce((total, trade) => total + trade.value, 0);
console.log(seoultotal2);
makeLine();
/*
1. **2023년에 대전에서 발생한 모든 거래의 총액을 계산해주세요.**
*/
let tradeInDJAt2023 = 0;
traders
    .filter((trade) => trade.trader.city === "대전" && trade.year === 2023)
    .map((trade) => trade.value)
    .forEach((i) => (tradeInDJAt2023 += i));
console.log(`2023년 대전에서 발생한 거래총액:${tradeInDJAt2023}`);
makeLine();
/*

2. **부산에서 거래한 모든 거래자의 이름을 배열에 담아 출력해주세요.**
*/
const busanTrader = traders
    .filter((trade) => trade.trader.city === "부산")
    .map((trade) => trade.trader.name);
console.log(busanTrader);
makeLine();
/*
3. **모든 거래 중 가장 높은 거래액을 가진 거래의 거래자 정보(이름, 도시)와 거래액을 출력해주세요.**
*/
const values = traders.map((trade) => trade.value);
const higherValue = Math.max(...values);
highValueTrader = traders
    .filter((trade) => trade.value === higherValue)
    .map(
        (trade) =>
            `이름: ${trade.trader.name} 도시: ${trade.trader.city} 거래액: ${trade.value}`
    );
console.log(highValueTrader);
makeLine();
/*
4. **각 도시별로 발생한 총 거래액을 객체 형태로 매핑해주세요. 예를 들어, `{서울: 총거래액, 부산: 총거래액}`과 같은 형태입니다.**
*/
const cities = [];
const newObj = {};
traders
    .map((trade) => trade.trader.city)
    .forEach((i) => {
        if (!cities.includes(i)) {
            cities.push(i);
        }
    }); //cities = [서울, 대전, 부산, ...];
for (let i of cities) {
    let total = 0;
    for (let j of traders) {
        if (j.trader.city === i) {
            total += j.value;
        }
    }
    newObj[i] = total;
}
console.log(newObj);
makeLine();
/*
5. **거래액이 700000원 이상인 거래를 모두 찾아, 해당 거래의 연도별로 분류해주세요. 결과는 `{2022: [...거래정보], 2023: [...거래정보]}`와 같은 형태가 되어야 합니다.**
*/
const over70Trade = {};
const years = [];
traders.map((trade) => {
    if (!years.includes(trade.year)) {
        years.push(trade.year);
    }
});
for (let i of years) {
    over70Trade[i] = [];
}
traders
    .filter((trade) => trade.value >= 700000)
    .forEach((trade) => {
        for (let i of years) {
            if (trade.year === i) {
                over70Trade[i].push(
                    `이름: ${trade.trader.name} 도시: ${trade.trader.city} 거래액: ${trade.value}`
                );
            }
        }
    });
console.log(over70Trade);
makeLine();
/*
6. **각 거래자별로 그들이 진행한 거래의 평균 거래액을 계산해주세요. 결과는 `{거래자이름: 평균거래액}` 형태의 객체가 되어야 합니다.**
*/
const allTradersNameCount = traders.reduce((countingMember, trade) => {
    if (!(trade.trader.name in countingMember)) {
        countingMember[trade.trader.name] = 1;
    } else {
        countingMember[trade.trader.name]++;
    }
    return countingMember;
}, {});
// console.log(allTradersNameCount);
const traderAvgValue = traders.reduce((avgValue, trade) => {
    if (!(trade.trader.name in avgValue)) {
        avgValue[trade.trader.name] = trade.value;
    } else {
        avgValue[trade.trader.name] += trade.value;
    }
    return avgValue;
}, {});
const avgResult = {};
let getValues = 0;
for (let i = 0; i < Object.keys(traderAvgValue).length; i++) {
    getValues =
        Object.values(traderAvgValue)[i] /
        Object.values(allTradersNameCount)[i];
    avgResult[Object.keys(traderAvgValue)[i]] = getValues;
}
console.log(avgResult);
makeLine();
// console.log(traderAvgValue);
// const traderAvgValue = [];
// let count = 0;
// for (let i of allTradersName) {
//     traderAvgValue.push({});
// }
// traders.forEach((trade) => {
//     let avg = 0;
//     let traderCount = 0;
//     let total = 0;
//     for (let i of allTradersName) {
//         traderCount = 0;
//         total = 0;
//         if (trade.trader.name === i) {
//             traderCount++;
//             total += trade.value;
//         }
//     }
//     avg = total / traderCount;
//     if (avg) {
//         traderAvgValue[count][trade.trader.name] = avg;
//     }
//     count++;
// });
// console.log(traderAvgValue);
// const getValues = [];
// traders
// .forEach(trade => {
//     for(let i of allTradersName) {
//         let total = 0;
//         if(trade.trader.name === i) {
//             total += trade.value;
//         }
//         let count = 0;
//         for(let i of allTradersName) {
//             traderAvgValue[count][i] = total;
//             count++;
//         }
//     }
// })
/*
7. **2022년과 2023년 각각에서 가장 많은 거래를 한 거래자의 이름과 그 거래 횟수를 출력해주세요.**
아마도 [y2022 :{거래자:횟수} , y2023 : {거래자:횟수}];
*/
function findBestTrader(obj) {
    let best = 0;
    for(let key in obj) {
        if(obj[key] >= best) {
            best = obj[key];
        }
    }
    for(let key in obj) {
        if(obj[key] < best) {
            delete obj[key];
        }
    }
}
const bestTrader = [];
const trade2022 = traders
    .filter((trade) => trade.year === 2022)
    .reduce((countingMember, trade) => {
        if (!(trade.trader.name in countingMember)) {
            countingMember[trade.trader.name] = 1;
        } else {
            countingMember[trade.trader.name]++;
        }
        return countingMember;
    }, {});
// console.log(trade2022);
const trade2023 = traders
.filter((trade) => trade.year === 2023)
.reduce((countingMember, trade) => {
    if (!(trade.trader.name in countingMember)) {
        countingMember[trade.trader.name] = 1;
    } else {
        countingMember[trade.trader.name]++;
    }
    return countingMember;
}, {});
findBestTrader(trade2022);
findBestTrader(trade2023);
// console.log(trade2023);
bestTrader.push({ y2022: trade2022 });
bestTrader.push({ y2023: trade2023 });
console.log(bestTrader);
makeLine();
/*
8. **모든 거래 중 거래액이 중간값인 거래의 정보(거래자 이름, 도시, 연도, 거래액)를 출력해주세요.**
*/
const totalValue = traders
.reduce((total, trade) => {
total += trade.value
return total;
}, 0 );
console.log(totalValue);
const avgTotalValue = totalValue / Object.keys(traders).length;
console.log(avgTotalValue);
let resultTradeIndex = 0;
traders
.reduce((acc, trade) => {}, )
// Math.abs(trade.value - avgTotalValue)
/*
9. **각 도시에서 진행된 거래의 수를 계산해주세요. 결과는 `{도시이름: 거래수}` 형태의 객체여야 합니다.**

10. **거래액을 기준으로 모든 거래를 오름차순으로 정렬한 후, 정렬된 리스트를 출력해주세요. 각 거래 정보는 거래자 이름, 도시, 연도, 거래액을 포함해야 합니다.**

*/
