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

// async function exec() {
//   let user = await call("kim");
//   console.log(`${user} 반가워`);
//   let backTxt = await back();
//   console.log(`${backTxt} 을 실행했구나`);
//   let hellTxt = await hell();
//   console.log(`여기는 ${hellTxt}`);
// }

// exec();

function changeBgColor(newColor) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = newColor;
      resolve();
    }, 1000);
  });
}

// async function changeColor() {
//   await changeBgColor("red");
//   await changeBgColor("orange");
//   await changeBgColor("yellow");
//   await changeBgColor("green");
//   await changeBgColor("blue");
// }
// changeColor();

const colorBg = ["red", "orange", "yellow", "green", "blue"];
async function changeColor() {
  for (let color of colorBg) {
    await changeBgColor(color);
  }
}
changeColor();
