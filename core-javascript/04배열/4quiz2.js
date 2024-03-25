/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.
- 요구사항
1. prompt 창을 띄워 사용자에게 숫자를 입력해 달라고 요청한 후, 
   입력받은 값들을 배열에 순차적으로 저장합니다.
   
2. '그만'이라고 입력하면 질문을 멈추고
   입력했던 숫자배열과 숫자의 총합(배열 요소의 합)을 계산하여 출력하세요.
*/


let arr = [];
let sum = 0;
let input = 0;
for(let i = 1; true; i++) {
    input = prompt('숫자를 입력해주세요 \'그만\'을 입력하면 멈춥니다.');
    if (input === '그만') {
        break;
    } else {
        arr.push(+input);
        sum += +input;
        if (i === 6) break;
    }
}
alert(`${arr}, 총합: ${sum}`);