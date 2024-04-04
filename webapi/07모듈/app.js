import { clickHandler } from "./event.js";
import { $btn as $button } from "./getDom.js";
// event.js에서 만든 이벤트 핸들러 등록
const $btn = '123';
console.log($btn,$button);
$button.addEventListener("click", clickHandler);
