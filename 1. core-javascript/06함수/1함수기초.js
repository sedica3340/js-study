let makeLine = function() {
    console.log('=============================================================');
}
let helloCount = true;
function sayHello(name) {
    console.log(`${name}님 안녕하세요. Hello!!`);
    console.log(`오늘도 즐거운 하루 되세요.`);
}

let sayBye = function (name) {
    console.log(`안녕히가세요 ${name}님. Bye!!`)
}

function say(name) {
    if (helloCount) {
        sayHello(name);
        helloCount = false;
    } else if (!helloCount) {
        sayBye(name);
        makeLine();
        helloCount = true;
    }
}

say('박성진');
say('박성진');

const PI = 3.141592;

function circleArea(r) {
    return PI * (r ** 2);
}
console.log(circleArea(5));
makeLine();