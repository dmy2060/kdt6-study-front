// function call(name) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       console.log(name);
//       resolve(name);
//     }, 1000);
//   });
// }

// function back() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       console.log("back");
//       resolve("back");
//     }, 1000);
//   });
// }

// function hell() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       console.log("callback hell");
//       resolve("callback hell");
//     }, 1000);
//   });
// }

// call("kim")
//   .then(function (name) {
//     console.log(name + "반가워");
//     return back();
//   })
//   .then(function (result) {
//     console.log(result + "를 실행했구나");
//     return hell();
//   })
//   .then(function (result) {
//     console.log("여기는" + result);
//   });

// setTimeout(() => {
//   document.querySelector("body").style.backgroundColor = "red";
//   setTimeout(() => {
//     document.querySelector("body").style.backgroundColor = "orange";
//     setTimeout(() => {
//       document.querySelector("body").style.backgroundColor = "yellow";
//       setTimeout(() => {
//         document.querySelector("body").style.backgroundColor = "green";
//         setTimeout(() => {
//           document.querySelector("body").style.backgroundColor = "blue";
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// function redColor() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       resolve("red");
//     }, 1000);
//   });
// }
// function orangeColor() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       resolve("orange");
//     }, 1000);
//   });
// }
// function yellowColor() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       resolve("yellow");
//     }, 1000);
//   });
// }
// function greenColor() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       resolve("green");
//     }, 1000);
//   });
// }
// function blueColor() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       resolve("blue");
//     }, 1000);
//   });
// }

// redColor()
//   .then(function (n) {
//     document.body.style.backgroundColor = n;
//     return orangeColor();
//   })
//   .then(function (n) {
//     document.body.style.backgroundColor = n;
//     return yellowColor();
//   })
//   .then(function (n) {
//     document.body.style.backgroundColor = n;
//     return greenColor();
//   })
//   .then(function (n) {
//     document.body.style.backgroundColor = n;
//     return blueColor();
//   })
//   .then(function (n) {
//     document.body.style.backgroundColor = n;
//   });

// function cahColor(color) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       document.body.style.backgroundColor = `${color}`;
//       resolve(`${color}`);
//     }, 1000);
//   });
// }
// cahColor("red")
//   .then(function () {
//     return cahColor("orange");
//   })
//   .then(function () {
//     return cahColor("yellow");
//   })
//   .then(function () {
//     return cahColor("green");
//   })
//   .then(function () {
//     return cahColor("blue");
//   });

// 실습1 풀이

// 기존 코드
/*
function call(name, cb) {
  setTimeout(function () {
    console.log(name);
    cb(name);
  }, 1000);
}

function back(cb) {
  setTimeout(function () {
    console.log('back');
    cb('back');
  }, 1000);
}

function hell(cb) {
  setTimeout(function () {
    cb('callback hell');
  }, 1000);
}

// call -> back -> hell 순서로 실행
call('kim', function (name) {
  console.log(name + '반가워');
  back(function (txt) {
    console.log(txt + '을 실행했구나');
    hell(function (message) {
      console.log('여기는 ' + message);
    });
  });
});
*/

// 풀이 코드
// callback -> promise 변경
// 실습1 풀이
// function call(name) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log(name);
//       resolve(name); // 작업 성공시 then(name)
//     }, 1000);
//   });
// }

// function back() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log("back");
//       resolve("back"); // 작업 성공시 then('back')
//     }, 1000);
//   });
// }

// function hell() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve("callback hell");
//     }, 1000);
//   });
// }

// call -> back -> hell
// call('kim')
//   .then(function (name) {
//     console.log(`${name} 반가워`);
//     return back();
//   })
//   .then(function (txt) {
//     console.log(`${txt}을 실행했구나`);
//     return hell();
//   })
//   .then(function (msg) {
//     console.log(msg);
//   });

// 화살표 함수 버전
// call('kim')
//   .then((name) => {
//     console.log(`${name} 반가워`);
//     return back();
//   })
//   .then((txt) => {
//     console.log(`${txt}을 실행했구나`);
//     return hell();
//   })
//   .then((msg) => {
//     console.log(msg);
//   });

function changeBgColor(newColor) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = newColor;
      resolve(); // 성공하면 다음으로 넘어가기!
    }, 1000);
  });
}

changeBgColor("red")
  .then(() => {
    return changeBgColor("orange");
  })
  .then(() => {
    return changeBgColor("yellow");
  })
  .then(() => {
    return changeBgColor("green");
  })
  .then(() => {
    return changeBgColor("blue");
  });
