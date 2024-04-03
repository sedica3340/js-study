//==============서버 통신 데이터=====//
const todos = [
    {
        id: 1,
        text: "할 일 1",
        done: false,
    },
    {
        id: 2,
        text: "할 일 2",
        done: false,
    },
    {
        id: 3,
        text: "할 일 3",
        done: false,
    },
];

//=======================함수 선언================//
let listCount = 3;
function addPlan() {
    let value = document.querySelector("#todo-text").value;
    if (value.length === 0) return;
    listCount++;
    const $newLi = document.createElement("li");
    $newLi.dataset.id = `${listCount}`;
    $newLi.classList.add("todo-list-item");
    $newLi.innerHTML = `
    <label class="checkbox">
        <input type="checkbox">
            <span class="text">${value}</span>
    </label>
    <div class="modify">
        <span class="lnr lnr-undo"></span>
    </div>
    <div class="remove">
        <span class="lnr lnr-cross-circle"></span>
    </div>`;
    const todo = {};
    todo.id = listCount;
    todo.text = value;
    todo.done = false;
    todos.push(todo);
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
    document
        .querySelector(".todo-list")
        .removeChild(e.target.parentElement.parentElement);
    const index = todos.findIndex(
        (todo) => todo.id === +e.target.parentElement.parentElement.dataset.id
    );
    if (index !== -1) {
        todos.splice(index, 1);
    }
});
document.querySelector(".todo-template").addEventListener("click", (e) => {
    // console.log(e.target.parentElement.parentElement.firstElementChild);
    const $label = e.target.parentElement.parentElement.firstElementChild;
    // const $input = e.target.parentElement.parentElement.firstElementChild.firstElementChild;
    // let newValue = "";
    if (!e.target.matches("div.modify span")) return;
    if (e.target.classList.contains("lnr-undo")) {
        const $span =
            e.target.parentElement.parentElement.firstElementChild
                .lastElementChild;
        const value = $span.textContent;
        const $newInput = document.createElement("input");
        $newInput.style.border = "1px solid gray";
        $newInput.style.borderRadius = "6px";
        $newInput.style.marginLeft = "60px";
        $newInput.value = value;
        $newInput.classList.add("modi");
        // $input.style.display = 'none';
        $label.replaceChild($newInput, $span);
        e.target.classList.remove("lnr-undo");
        e.target.classList.add("lnr-checkmark-circle");
    } else if (e.target.classList.contains("lnr-checkmark-circle")) {
        const $newInput = document.querySelector(".modi");
        const value = $newInput.value;
        if (value.length === 0) return;
        const $newSpan = document.createElement("span");
        $newSpan.classList.add("text");
        $newSpan.textContent = value;
        $label.replaceChild($newSpan, $newInput);
        e.target.classList.remove("lnr-checkmark-circle");
        e.target.classList.add("lnr-undo");
        // $label.replaceChild($span, $newInput);
    }
});
document.querySelector(".todo-template").addEventListener("change", (e) => {
    if (!e.target.matches("label.checkbox input")) return;
    // console.log(+e.target.parentElement.parentElement.dataset.id);
    const index = todos.findIndex(
        (todo) => todo.id === +e.target.parentElement.parentElement.dataset.id
    );
    todos[index].done = !todos[index].done;
    // console.log(index);
});
