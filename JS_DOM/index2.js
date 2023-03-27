let div1 = document.getElementById("div1");
console.log(div1);

div1.innerHTML = "여기는 <b>첫번째</b> 태그입니다. &hearts;";
console.log(div1.innerHTML);

div1.innerText = "   여기는 <b>첫번째</b> 태그입니다.     &hearts;";
console.log(div1.innerText);
div1.textContent = "     여기는 <b>첫번째</b> 태그입니다.     &hearts;";
console.log(div1.textContent);
// innetText vs textContent => 태그가 그대로 보임
// - textContent
//  - 공백문자 그대로 반환
//  - ie 버전 9 이하 사용 불가 (textContent)
// - innerText
//  - 공백문자 제거
div1.innerHTML = "<ul><li>1</li><li>2</li></ul>";

/* 속성 변경 */
let naver = document.getElementById("naver");
// console.log(naver);
naver.setAttribute("href", "https://www.google.com");
console.log(document.getElementById("pooh").getAttribute("src"));

// 직접 접근법
console.log(document.getElementById("pooh").id);
console.log(document.getElementById("pooh").src);
naver.href = "#";

/* css 지정 */
let h1 = document.querySelector("h1");
let list = document.querySelectorAll("#friends li");
console.log(h1);
console.log(list);
// 1. style 속성 사용
list[0].style.backgroundColor = "blue";

for (let li of list) {
  li.style.backgroundColor = "blue";
  li.style.color = "#fff";
  li.style.fontSize = "1.5rem";
}

// 2. classList 사용
console.log(h1.classList);
h1.classList.add("add-h1");
// classList.add : 클래스 추가
// classList.remove : 클레스 제거
// classList.contains : 있는지 없는지 확인, true/false 반환
// classList.toggle : 해당 클래스가 있으면 제거, 없으면 추가

/* 노드찾기 */
let friends = document.getElementById("friends");
let tigger = document.querySelector("#tigger");
console.log(friends);
console.log(tigger);

console.log("==자식 노드");
// 자식은 여러개 일 수 있기 때문에 배열 형태로 나오게됨
console.log(friends.children);
console.log(friends.children[0]);

console.log("==부모 노드");
console.log(tigger.parentNode);

console.log("==형제 노드");
console.log(tigger.previousElementSibling);
console.log(tigger.nextElementSibling);
// 쭉쭉 이어서 사용할 수 있음
console.log(tigger.nextElementSibling.nextElementSibling);

/* 요소 생성, 추가, 삭제 */
let container = document.querySelector(".container");
console.log(container);

let p = document.createElement("p");
p.innerText = "새로 추가된 p";
p.style.fontWeight = "700";
p.style.backgroundColor = "red";

// 요소.append : 선택된 요소의 맨 마지막 자식으로 추가됨
container.append(p);

let p2 = document.createElement("p");
let p3 = document.createElement("p");
p2.innerHTML = "p2";
p2.classList.add("p-2");
p3.textContent = "p3";
p3.classList.add("p-3");

// container.append(p3, p2);
// append는 두개 가능하지만, child는 한개만 추가 가능
container.appendChild(p2);

// 요소.prepend : 선택된 요소의 맨 첫번째 자식으로 추가됨
let li1 = document.createElement("li");
li1.textContent = "캉가";
friends.prepend(li1);

// 요소.before & 요소.after
/* 
    - before : 선택된 요소의 앞으로 추가
    - after : 선택된 요소의 뒤로 추가
*/

let h3 = document.createElement("h3");
h3.innerText = "h3 태그";

h1.after(h3);

let h2 = document.createElement("h2");
h2.innerText = "h2 태그";

h1.before(h2);

// 요소 삭제
/* 
- 요소.remove() : 선택된 요소 삭제
- 요소.removeChild(자식 요소) : 요소의 '자식요소'가 삭제됨
*/
let firstli = document.querySelector("li");
console.log(firstli);
let ul = firstli.parentNode;
console.log(ul);

// firstli.remove();
ul.removeChild(firstli);

// 이미지 태그 만들어서 추가
// let container2 = document.createElement("div");
let img = document.createElement("img");
// img.src = "./img/pooh.png";
img.alt = "푸 사진";

img.setAttribute("src", "./img/pooh.png");
container.append(img);
