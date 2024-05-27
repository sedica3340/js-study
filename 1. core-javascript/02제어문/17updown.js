while (true) {
let level = +prompt('1.상:3회 2.중:6회 3.하:10회 \n3이상 선택시 자동 하남자');
let chance;
let rn = Math.floor(Math.random() * 100) + 1;
let select;
let low = 1;
let high = 100;
if (level === 1) chance = 3;
if (level === 2) chance = 6;
if (level >= 3) chance = 10;
for (let i = 1; i <= chance; i++) {
    if (i === 1) {
        alert(`1 ~ 100사이의 무작위 숫자를 ${chance}번 안에 맞춰보세요`);
    }
    select = +prompt(`${i}번째시도 ${low} ~ ${high} 범위: ${high - low + 1}`);
    if (select < low || select > high) {
        i--;
        continue;
    }
    if (rn === select) {
        alert(`${rn} 정답입니다 ${i}번 만에 맞췄습니다.`);
        break;
    } else if (rn < select) {
        if (i === chance) {
            alert(`기회 끝 탈락입니다.\n정답은 ${rn}였습니다.`);
            break;
        }
        high = select - 1;
        alert('DOWN!');
    } else if (rn > select) {
        if (i === chance) {
            alert(`기회 끝 탈락입니다.\n정답은 ${rn}였습니다.`);
            break;
        }
        low = select + 1;
        alert('UP!');
    }
}
    let retry = confirm('한판 더?');
    if (!retry) {
        alert('수고하셨습니다.');
        break;
    } 
}