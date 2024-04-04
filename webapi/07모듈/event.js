// getDom.js에서 $pText를 가져와야함
import { $pText, $btn } from "./getDom.js";

console.log($pText);
console.log($btn);
// 이벤트 핸들러 함수
export const clickHandler = (e) => {
    $pText.textContent = "안녕?";
};
