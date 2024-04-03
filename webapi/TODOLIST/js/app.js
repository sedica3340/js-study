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
    if (value.length === 0) {
        document
            .querySelector("#todo-text")
            .setAttribute("placeholder", "필수 입력 사항입니다.");
        document.querySelector("#todo-text").parentElement.style.background =
            "#ff0355";
        setTimeout(() => {
            document
                .querySelector("#todo-text")
                .setAttribute("placeholder", "할 일을 입력하세요");
            document.querySelector(
                "#todo-text"
            ).parentElement.style.background = "#495057";
        }, 800);
        return;
    }
    listCount++;
    if (!todos.length) {
        const $ul = document.querySelector(".todo-list");
        $ul.textContent = "";
        $ul.style.background = "#fff";
        $ul.style.fontSize = "inherit";
        $ul.style.textAlign = "inherit";
    }
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
document.querySelector("#todo-text").addEventListener("change", (e) => {
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
    if (!todos.length) {
        const $ul = document.querySelector(".todo-list");
        $ul.textContent = "할 일이 없습니다";
        $ul.style.background = "#fbb";
        $ul.style.fontSize = "32px";
        $ul.style.textAlign = "center";
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
        // console.log(e.target.parentElement.parentElement.firstElementChild.lastElementChild);
        const $newInput =
            e.target.parentElement.parentElement.firstElementChild
                .lastElementChild;
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
    const $span = e.target.parentElement.lastElementChild;
    const index = todos.findIndex(
        (todo) => todo.id === +e.target.parentElement.parentElement.dataset.id
    );
    todos[index].done = !todos[index].done;
    // console.log($span);
    if (todos[index].done) {
        $span.style.textDecoration = "line-through";
        $span.style.color = "#888";
    } else if (!todos[index].done) {
        $span.style.textDecoration = "";
        $span.style.color = "inherit";
    }
    // console.log(index);
});

setInterval(() => {
    let complete = 0;
    let yet = 0;
    for (let todo of todos) {
        if (todo.done) complete++;
        else yet++;
    }

    document.querySelector(
        ".counter .complete"
    ).textContent = `완료된 일정: ${complete}개 `;
    document.querySelector(".counter .yet").textContent = `남은 일정: ${yet}개`;
}, 250);
