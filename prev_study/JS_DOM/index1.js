/* 요소 선택
    - querySelector
    - querySelectorAll
    - getElementById
! getElementsByClassName만 배열 형태로 가지고옴 위 선택자들은 값을 가지고옴
    - getElementsByClassName 
*/

console.log(document);
console.log(document.head);
// console.log(document.body);
// 만약, 스크립트를 head 안에 넣으면 body를 그리기 전에 스크립트가 불러와서 body 불러올 수 없음
// 해결 방법 body 밑에 쓰기!, defer 키워드 추가하면 body 밑에 안 써도 가능
// defer : 백그라운드에서 다운로드 하고 HTML 파싱이 다 되면 스크립트 실행
console.log(document.title);
console.log(document.URL);

// 1.getElementById
console.log(document.getElementById("green"));
console.log(document.getElementById("red"));

// 2. getElementsByClassName(HTMLCollection 형태로 가지고 옴)
// 하나만 가지고 오고 싶은 경우 배열 대괄호 표기법으로 가지고 올 수 있음.
console.log(document.getElementsByClassName("pink"));
console.log(document.getElementsByClassName("others"));
console.log(document.getElementsByClassName("others")[0]);

// 3. getElementsByTagName(HTMLCollection 형태로 가지고 옴)
console.log(document.getElementsByTagName("div"));

// 4. getElementsByName
console.log(document.getElementsByName("id"));

// 5. querySelector
console.log(document.querySelector(".pink"));
console.log(document.querySelector("#green"));
console.log(document.querySelector("#red"));
console.log(document.querySelector(".others"));
console.log(document.querySelector("div"));
console.log(document.querySelector("[name=id]"));

// 6. querySelectorAll
console.log(document.querySelectorAll(".pink"));
// for문, forOf, forEach (map, filter, find 사용불가능 : 배열이 아니라 배열 형태일 뿐)
console.log(document.querySelectorAll(".pink")[0]);
console.log(document.querySelectorAll(".pink")[1]);
console.log(document.querySelectorAll(".pink")[2]);
console.log(document.querySelectorAll(".pink")[3]);
console.log(document.querySelectorAll("input"));
console.log(document.querySelectorAll("#green"));

let pinks = document.querySelectorAll(".pink");
console.log(pinks);
console.log("-------------------------------");
for (let pink of pinks) {
  console.log(pink);
}
