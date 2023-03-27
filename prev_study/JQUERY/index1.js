console.log($("button"));
console.log(document.querySelectorAll("button"));

// 스크립트 사용시 배열 형태로 인덱스로 접근해야되나, 제이쿼리는 배열 형태이나 인덱스로 접근하지 않아도 됨
$("button").css("color", "red");

function submitjs() {
  document.querySelector("#div1").innerHTML = "반갑습니다.";
  document
    .getElementById("div1")
    .setAttribute("style", "border:2px solid #000");
}
function submitjquery() {
  //   $("#div1").html("반갑습니다").css("border", "3px dotted red");
  $("#div1").text("반갑습니다").css("border", "3px dotted red");
}
