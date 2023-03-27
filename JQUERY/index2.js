// console.log("dsdd");
function getValue() {
  let value = $("input").val();
  //   let value = document.querySelector("input").value;
  alert(value);
}
function setValue() {
  let value1 = $("input").val();
  //   $("input").val("설정!!");
  $("input").val(value1);
  console.log(value1);
}
/* css */
function changeCsaJs() {
  let span = document.querySelector("span");
  span.style = "font-size:20px;color:red;";
}
function changeCsaJquery() {
  $("span").css("font-size", "40px");
  $("span").css("color", "blue");
  console.log($("span").css("color"));
}
/* attr */
function changeAttrjs() {
  let a = document.querySelector("a");
  a.setAttribute("href", "https://www.naver.com");
}
function changeAttrjquery() {
  $("a").attr("href", "https://www.daum.net");
}

/* text (text로 바꿀 경우 태그 반영 안됨)*/
function changeTextJs() {
  let p = document.querySelector(".p-text");
  p.innerText = "<b>js</b>로 바꿨습니다.";
}
function changeTextjquery() {
  $(".p-text").text("<b>jquery</b>로 바꿨습니다.");
}

/* html (html로 바꿀 경우 태그 반영됨) */
function changeHtmljs() {
  let p = document.querySelector(".p-html");
  p.innerHTML = "<b>js</b>로 바꿨습니다.";
}
function changeHtmljquery() {
  $(".p-html").html("<b>jquery</b>로 바꿨습니다.");
}

/* 요소 추가 */
/* append() */
function appendJs() {
  let li = document.createElement("li");
  li.innerText = "append()로 추가된 js";
  let ul = document.querySelector(".colors");
  ul.append(li);
}
// jquery에서는 태그를 넣어도 태그로 인식됨 구지 createelement로 안만들어도됨
function appendJquery() {
  $(".colors").append("<li>append()로 추가된 jquery</li>");
}
/* prepend() */
function prependJs() {
  let li = document.createElement("li");
  li.innerText = "prepend()로 추가된 js";
  let ul = document.querySelector(".colors");
  ul.prepend(li);
}
function prependJquery() {
  $(".colors").prepend("<li>prepend()로 추가된 jquery</li>");
}
/* after() */
function afterJs() {
  let green = document.querySelector(".green");
  let li = document.createElement("li");
  li.innerText = "after() 형제요소 js";
  green.after(li);
}
function afterJquery() {
  $(".green").after("<li>after() 형제요소 jquery</li>");
}
/* before() */
function beforeJs() {
  let green = document.querySelector(".green");
  let li = document.createElement("li");
  li.innerText = "before() 형제요소 js";
  green.before(li);
}
function beforeJquery() {
  $(".green").before("<li>before() 형제요소 jquery</li>");
}
/* remove() */
function removeJs() {
  let li = document.querySelector("#li2");
  li.remove();
}
function removeJquery() {
  $("#li2").remove();
}
/* empty() */
function emptyJs() {
  let ul = document.querySelector(".nums");
  ul.innerHTML = "";
}
function emptyJquery() {
  $(".nums").empty();
}

function findParent() {
  console.log($(".child2").parent());
}
function findParents() {
  console.log($(".child2").parents());
  // js는 없는 메소드
}
function findNext() {
  console.log($(".child2").next());
  // next() : nextSibling
}
function findPrev() {
  console.log($(".child2").prev());
  // prev() : previousSibling
}
function findChildren() {
  console.log($(".parent").children());
  console.log(document.querySelector(".parent").children);
  // children() :자식 요소 모두 반환, js에서의 children()과 동일
}

/* 클래스 조작 */
function addClass() {
  $("#hi").addClass("fs-50");
}
function removeClass() {
  // $("#hi").removeClass("fs-50"); // 특정 클래스 제거
  $("#hi").removeClass(); // 빈값으로 두면 hi 클래스 모두 제거
}
function hasClass() {
  // js : classList 메소드 contains()이랑 같음
  // true나 false로 반환
  console.log($("#h1").hasClass("fs-50"));
}
function toggleClass() {
  // js에 toggle이랑 같음
  $("#hi").toggleClass("bg-pink");
}
