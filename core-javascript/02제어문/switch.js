let season = prompt('계절을 입력하세요');

// 조건을 판별할 변수 (비교식x, 문자값 or 숫자값만 써야함)
switch (season) {
    case '봄', 'spring' :
        alert('봄에는 여의도나 가세요');
        break;
    case '여름', 'summer':
        alert('여름에는 해수욕장이나 가세요');
        break;
    case '가을', 'fall':
        alert('가을에는 낙엽이나 드세요');
        break;
    case '겨울', 'winter':
        alert('겨울에는 집에나 계세요');
        break;
    default:
        alert('계절만 입력하세요!');
}