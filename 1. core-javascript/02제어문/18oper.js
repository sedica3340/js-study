let bestScore = 0;
let scoreletter = '';
while (true) {
    let lastScore = 0;
    alert(`~~~~~~ 재미있는 사칙연산 게임 ~~~~~~\n[즐겁게 문제를 푸시다가 지겨우면 \'0\'을 입력하세요.]\n최고기록: ${bestScore}`)
    let level = +prompt('난이도를 선택하세요\n1. 상 1~100 2. 중 1~50 \n3. 하 1~20  4. 삽하남자 1~10\n4이상 선택시 자동 삽하남자')
    let y;
    if (level === 1) y = 100;
    if (level === 2) y = 50;
    if (level === 3) y = 20;
    if (level >= 4) y = 10;
    let n1;
    let n2;
    let rn;
    let select;
    let oper;
    let operletter ='';
    let correct;
    // rn = Math.floor(Math.random() * y) + 1;
    for (let i = 1; true; i++) {
        n1 = Math.floor(Math.random() * y) + 1;
        n2 = Math.floor(Math.random() * y) + 1;
        rn = Math.floor(Math.random() * 4) + 1;
        if(rn === 1) {
        oper = '+';
        operletter = '덧셈(더하기)';
        correct = n1 + n2;
    }
    else if (rn === 2 && n1 > n2) {
        oper = '-';
        operletter = '뺄셈(빼기)';
        correct = n1 - n2;
    }
    else if (rn === 3 && !(n1 === 1 || n2 === 1)) {
        oper = '*';
        operletter = '곱셈(곱하기)';
        correct = n1 * n2;
    }
    else if (rn === 4 && (n1 / n2) % 1 === 0 && !(n2 === 1 || n1 === n2)) {
        oper = '÷';
        operletter = '나눗셈(나누기)';
        correct = n1 / n2;
    } else {
        i--;
        continue;
    }
    if (i - 1 >= bestScore) {
        scoreletter = '최고기록 갱신중';
    } else {
        scoreletter = `최고기록: ${bestScore}`;
    }
    select = +prompt(`${operletter}\n${n1} ${oper} ${n2} = ??`)
    if (correct !== 0 && select === 0) {
        alert(`포기하셨습니다. 지금까지 ${i - 1}개 맞추셨습니다.`);
        lastScore = i - 1;
        break;
    }
    if (select !== correct) {
        alert(`틀렸습니다.정답은 ${correct}였습니다. \n지금까지 ${i - 1}개 맞추셨습니다.`);
        lastScore = i - 1;
        break;
    } else if (select === correct) {
        alert(`${correct} 정답입니다 현재까지 ${i}개 맞추셨습니다.\n${scoreletter}`);
    }
    }
    let retry = confirm('다시 하시겠습니까?');
    if (!retry) {
        break;
    } else if (bestScore <= lastScore) {
        bestScore = lastScore;
    }
}