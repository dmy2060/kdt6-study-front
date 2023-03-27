console.log(window);
console.log(document);

console.log($(window));
console.log($(document));

// mouse event
// click(function(){}), moseover(function(){})
// hover(function () {}, function () {})
// hover(마우스를 올렸을 때의 동작, 마우스를 떼었을때의 동작)

// 1. click : 클릭이 일어났을 때!!
$(".p-psg").click(function () {
  $(this).css("color", "red");
});

// on() == addEventListener()
$(".numbers").on("click", function () {
  $(this).css("color", "blue");
});

$(".div-hover").hover(
  function () {
    $(this).addClass("hover1");
  },
  function () {
    $(this).removeClass("hover1");
  }
);

// scroll
$(window).scroll(function () {
  console.log("scroll");
});

// 선택요소.addEventListener('keyDown',function(){})
$(".input-key").keydown(function (e) {
  //   console.log(e.code);
  //   console.log(e.key);
  if (e.code === "ArrowUp") {
    console.log("up");
  } else if (e.code === "ArrowDown") {
    console.log("down");
  } else if (e.code === "ArrowLeft") {
    console.log("left");
  } else if (e.code === "ArrowRight") {
    console.log("right");
  } else {
    console.log("others");
  }
});

$("#todo-form").on("submit", function (e) {
  e.preventDefault();
  let value = $("[name='todo']").val();
  console.log(value);
  $(".todos").append(`<li>${value}</li>`);
  $("[name='todo']").val("");
});
