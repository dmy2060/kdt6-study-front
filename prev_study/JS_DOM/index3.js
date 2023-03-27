let btn1 = document.querySelector(".btn--black");
let btn2 = document.querySelector(".btn--green");
let btn3 = document.querySelector(".btn--blue");
let btn4 = document.querySelector(".btn--red");
// querySelector로 하나씩 변수에 넣거나, SelectorAll로 해서 배열로 접근할 수 있음

console.log(btn1, btn2, btn3, btn4);

// btn1.addEventListener("동작이름", ()=>{

// })

btn1.addEventListener("click", () => {
  alert("버튼 1을 클릭하셨네요!");
});

btn1.addEventListener("mouseover", () => {
  btn1.style.backgroundColor = "aqua";
  //   console.log(this == btn1);
});

let container = document.getElementById("container");
console.log(container);
btn2.addEventListener("click", () => {
  let div = document.createElement("div");
  div.style.backgroundColor = "pink";
  div.innerHTML = "hi";
  container.append(div);
});
btn3.addEventListener("click", changeColor);
// 다시확인!
// 괄호 쓰면 btn3가 바로 호출이 되기 때문에 없이 써야함
// 함수 선언문은 호이스팅이 가능하기때문에 없어야댐
// 선언문을 통해서 호출해서 사용하면 재사용 가능!

// btn3.addEventListener("click", () => {
//   changeColor();
// });

function changeColor() {
  let divs = document.querySelectorAll("#container > div");
  for (let div of divs) {
    div.style.backgroundColor = "green";
  }

  divs[divs.length - 1].style.backgroundColor = "yellow";
}

btn4.addEventListener("click", changeBtnColor);
function changeBtnColor() {
  //   btn4.style.backgroundColor = "yellow";
  //   btn4.style.color = "#000";
  this.style.backgroundColor = "yellow";
  this.style.color = "#000";
}

console.log(window);
window.addEventListener("scroll", (event) => {
  console.log(event);
  console.log(scrollY);
  let pos = document.querySelector(".pos");
  if (this.scrollY > 700) {
    pos.style.opacity = "1";
  } else {
    pos.style.opacity = "0";
  }
});

const btn = document.querySelector("button");
const input = document.querySelector("input");
// console.log(btn, input);

btn.addEventListener("click", (e) => {
  console.log(e);
});

input.addEventListener("keydown", (e) => {
  console.log(e.code);
  console.log(e.key);
  //   console.log(e.keyCode);
  //   요샌 잘 쓰지 않는 추세
  if (e.code === "ArrowUp") {
    console.log("위쪽 방향키를 누르셨군요");
  } else if (e.code === "ArrowDown") {
    console.log("아래 방향키를 누르셨군요");
  } else if (e.code === "ArrowLeft") {
    console.log("왼쪽 방향키를 누르셨군요");
  } else if (e.code === "ArrowRight") {
    console.log("오른쪽 방향키를 누르셨군요");
  } else {
    console.log("others");
  }
});

const todoForm = document.getElementById("todo-form");
const todos = document.querySelector(".todos");
// console.log(todoForm, todos);
// submit 쓰면 기본적으로 새로고침이 진행됨
// 막기 위해 e.preventDefault();를 통해 실제로 폼이 제출되는것을 막음
// 이벤트 전달을 막는 방법
todoForm.addEventListener("submit", (e) => {
  console.log("submit");
  e.preventDefault();

  const todoInput = document.querySelector("[name='todo']");
  //   console.log(todoInput);
  //   console.dir(todoInput);
  //   console.log(todoInput.value);

  //   input의 문자열 저장
  //   const todo = todoInput.value;

  //   const newTodo = document.createElement("li");
  //   newTodo.append(todo);
  //   todos.append(newTodo);
  const todo = todoInput.value.trim();
  if (todo !== "") {
    const newTodo = document.createElement("li");
    newTodo.append(todo);
    todos.append(newTodo);
  }
  todoInput.value = "";
});

const chgInput = document.querySelector("#change-input");
// change : 변경이 되고 focus가 없어지면 그때 적용
chgInput.addEventListener("change", () => {
  console.log("change!!");
});

chgInput.addEventListener("input", () => {
  let div = document.querySelector(".intro");
  //   innerHtml로 하면 태그까지 같이 적용이됨
  div.innerHTML = chgInput.value;
});
