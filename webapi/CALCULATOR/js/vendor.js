//프로그램 전체에서 사용할 전역적인 변수, 상수와 함수를 정의
const $userInput = document.querySelector("#input-number");
const $addBtn = document.getElementById("btn-add");
const $subtractBtn = document.getElementById("btn-subtract");
const $multiplyBtn = document.getElementById("btn-multiply");
const $divideBtn = document.getElementById("btn-divide");
const $currentResult = document.querySelector("#current-result");
const $currentCalculation = document.querySelector("#current-calculation");
const $logEntries = document.querySelector(".log-entries");
//result에 그려질 숫자
let currentResult = 0;
let logCount = 0;
const allLog = [];

//===================== 함수 정의 영역 ======================//
// 계산 기능 헬퍼 함수
const calculate = (e) => {
    const prevResult = currentResult;
    const enteredNumber = +$userInput.value;
    let descriptionLog;
    if (e.target === $addBtn) {
        currentResult += enteredNumber;
        descriptionLog = `${prevResult} + ${enteredNumber}`;
    } else if (e.target === $subtractBtn) {
        currentResult -= enteredNumber;
        descriptionLog = `${prevResult} - ${enteredNumber}`;
    } else if (e.target === $multiplyBtn) {
        currentResult *= enteredNumber;
        descriptionLog = `${prevResult} * ${enteredNumber}`;
    } else if (e.target === $divideBtn) {
        currentResult /= enteredNumber;
        descriptionLog = `${prevResult} / ${enteredNumber}`;
    }
    $currentResult.textContent = currentResult;
    $currentCalculation.textContent = descriptionLog;
    $userInput.value = "";
    logCount++;
    allLog.push(`#${logCount}. ${descriptionLog} = ${currentResult}`);
    const $newLi = document.createElement("li");
    $newLi.textContent = allLog[allLog.length - 1];
    $newLi.classList.add("log-entries__item");
    $logEntries.appendChild($newLi);
};
// function fastCalc(e) {
//     // $userInput.value.substr(0, $userInput.value.length - 1);
//     if (e.key === "+" || e.key === "-") {

//     }
// }
