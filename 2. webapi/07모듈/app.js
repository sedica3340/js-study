import { clickHandler } from "./event.js";
import { $btn as $button } from "./getDom.js";
import hahahoho from "./pow.js";
// event.js에서 만든 이벤트 핸들러 등록
const $btn = "123";
console.log($btn, $button);
console.log(hahahoho.pow(5));
console.log(hahahoho.add(5, 7));
$button.addEventListener("click", clickHandler);
