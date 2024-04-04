// 함수 실행 이벤트 코드
$addBtn.addEventListener("click", (e) => {
    calculate(e);
});
$subtractBtn.addEventListener("click", (e) => {
    calculate(e);
});
$multiplyBtn.addEventListener("click", (e) => {
    calculate(e);
});
$divideBtn.addEventListener("click", (e) => {
    calculate(e);
});
setInterval(() => {
    if($logEntries.children.length >= 4) {
        $logEntries.removeChild($logEntries.firstChild);
    }
}, 30);
