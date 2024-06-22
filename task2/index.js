const input = document.querySelector(".todo-body__input");
const list = document.querySelector(".todo-body__list");
const button = document.querySelector(".todo-body__btn");

function addTodo() {
  const todo = input.value.trim();
  if (todo === "") {
    alert("Вы должны что-нибудь написать!");
  } else {
    let li = document.createElement("li");
    li.textContent = todo;
    list.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  input.value = "";
  saveTodo();
}

list.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("complete");
      saveTodo();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveTodo();
    }
  },
  false
);

function saveTodo() {
  localStorage.setItem("todos", list.innerHTML);
}

function loadTodo() {
  list.innerHTML = localStorage.getItem("todos");
}

button.addEventListener("click", addTodo);

loadTodo();
