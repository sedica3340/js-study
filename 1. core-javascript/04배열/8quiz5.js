let tvxq = ["유노윤호", "최강창민", "영웅재중", "믹키유천", "시아준수"];
let TVXQ = tvxq.slice();
for (let firstInput = 0, secondInput = ""; true; ) {
  firstInput = +prompt(
    `현재 멤버:${tvxq} \n메뉴를 선택하세요\n1. 새로운 멤버 추가 \n2. 기존 멤버 제거 \n3. 멤버 초기화 \n4. 프로그램 종료`
  );
  if (
    !(
      firstInput === 1 ||
      firstInput === 2 ||
      firstInput === 3 ||
      firstInput === 4
    )
  ) {
    alert(`1, 2, 3, 4중에 골라주십시오`);
    continue;
  }
  if (firstInput === 4) {
    alert(`현재 멤버 : ${tvxq}\n프로그램을 종료합니다.`);
    break;
  } else if (firstInput === 1) {
    secondInput = prompt(`1번 새 멤버 추가하기를 선택하셨습니다.
        \n새로 추가할 멤버 이름을 입력해주세요.
        \n'!나가기'를 입력하시면 초기화면으로 돌아갑니다.`);
    if (secondInput === "!나가기") continue;
    tvxq.push(secondInput);
    alert(`새 멤버 \'${secondInput}\'이(가) 추가 되었습니다.`);
  } else if (firstInput === 2) {
    for (; true; ) {
      secondInput = prompt(`2번 기존 멤버 제거하기를 선택하셨습니다.
            \n제거할 멤버의 이름을 입력해주세요.
            \n현재 멤버 : ${tvxq}
            \n\'!나가기\'를 입력하시면 초기화면으로 돌아갑니다.`);
      if (secondInput === "!나가기") {
        break;
      }
      if (!tvxq.includes(secondInput)) {
        alert(`${secondInput}은(는) 잘못된 이름입니다.`);
        continue;
      } else {
        tvxq.splice(tvxq.indexOf(secondInput), 1);
        alert(`${secondInput}이(가) 제거 되었습니다.`);
        break;
      }
    }
  } else if (firstInput === 3) {
    tvxq = TVXQ.slice();
  }
}
