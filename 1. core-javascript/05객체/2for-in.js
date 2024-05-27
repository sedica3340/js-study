let phone = {
    company: "삼성",
    color: "펄 화이트",
    model: "갤럭시 S24 Ultra",
    price: 1200000,
};
let phoneValue;
for (let key in phone) {
    phoneValue = phone[key];

    console.log(`${key}: ${phoneValue}`);
}
if (!("memory" in phone)) {
    phone.memory = "32GB";
}
console.log(phone);