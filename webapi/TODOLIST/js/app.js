//=======================함수 선언================//
let listCount = 3;
function addPlan() {
    let value = document.querySelector("#todo-text").value;
    if (value.length === 0) return;
    listCount++;
    const $newLi = document.createElement("li");
    $newLi.dataset.id = `${listCount}`;
    $newLi.classList.add("todo-list-item");
    $newLi.innerHTML = `<label class="checkbox">
    <input type="checkbox">
    <span class="text">${value}</span>
</label>
<div class="modify">
    <span class="lnr lnr-undo"></span>
</div>
<div class="remove">
    <span class="lnr lnr-cross-circle"></span>
</div>`;
    document.querySelector(".todo-list").appendChild($newLi);
    document.querySelector("#todo-text").value = "";
}
//=======================함수 실행================//
// const $todoList = document.querySelector('.todo-list');
document.querySelector("#add").addEventListener("click", (e) => {
    e.preventDefault();
    addPlan();
});
document.querySelector("#todo-text").addEventListener("keyup", (e) => {
    e.preventDefault();
    if (e.key === "Enter") document.querySelector("#add").click();
});
document.querySelector(".todo-template").addEventListener("click", (e) => {
    if (!e.target.matches("div.remove span")) return;
    document.querySelector('.todo-list').removeChild(e.target.parentElement.parentElement);
});
document.querySelector(".todo-template").addEventListener('click', e => {
    console.log(e.target.parentElement.parentElement.firstElementChild.lastElementChild.textContent);
    if (!e.target.matches("div.modify span")) return;
    e.target.parentElement.parentElement.firstElementChild.lastElementChild.textContent = 
    
})