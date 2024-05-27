//=====================전역 변수 정의 영역==========//
const gameData = {
    secret: Math.floor(Math.random() * 100) + 1,
    answer: null,
    min: 0,
    max: 101,
};
//=====================함수 정의 영역===============//
function makeNewIcon($container, i) {
    const $newDiv = document.createElement("div");
    $newDiv.classList.add("icon");
    $newDiv.textContent = i;
    $container.appendChild($newDiv);
}

function createNumberIcons() {
    const $numbersContainer = document.querySelector("#numbers");
    for (let i = gameData.min + 1; i <= gameData.max - 1; i++) {
        makeNewIcon($numbersContainer, i);
    }
}
function handleCorrectAnswer($target) {
    document.querySelector('#finish').classList.add('show');
    $target.setAttribute('id', 'move');
    // console.log($target);
}
function verifyAnswer($target) {
    // const $up = document.querySelector('.result #up');
    // const $down = document.querySelector('.result #down');
    if(gameData.answer === gameData.secret) {
        handleCorrectAnswer($target);
        //정답 출력
        
    } else {
        const isUp = gameData.secret > gameData.answer;
        const $begin = document.querySelector('#begin');
        const $end = document.querySelector('#end');
        document.querySelector(isUp ? '#up' : '#down').classList.add('selected');
        document.querySelector(isUp ? '#down' : '#up').classList.remove('selected');
        isUp ? gameData.min = gameData.answer : gameData.max = gameData.answer;
        $begin.textContent = gameData.min + 1;
        $end.textContent = gameData.max - 1;
    }
    resetNumberIcons();
}
function resetNumberIcons() {
    const $numbersContainer = document.querySelector("#numbers");
    $numbersContainer.replaceChildren();
    createNumberIcons();
}
//=====================함수 실행 영역===============//
createNumberIcons();

document.querySelector("#numbers").addEventListener("click", (e) => {
    if (!e.target.matches("#numbers .icon")) return;
    gameData.answer = +e.target.textContent;
    console.log(gameData);
    verifyAnswer(e.target);
    // console.log(e.target);
    //클릭한 구슬 의 숫자가 정답과 비교해서 up인지 down인지 정답인지 판별해야함..!
});