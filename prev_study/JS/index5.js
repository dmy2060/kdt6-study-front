helloWorld1();
function helloWorld1() {
  console.log("helloWorld1");
}
helloWorld1();

function helloWorld2() {
  return "helloworld2";
}
console.log(helloWorld2());
function add(num1, num2) {
  console.log("안뇽");
  return num1 + num2;
  // return 만나면 실행 중단
}

function add2(num1, num2) {
  console.log(num1 + num2);
}

let result = add(5, 5);
let result2 = add2(5, 5);

console.log(result, result2);
// 값을 저장해서 사용해야할땐 return 사용

// 함수 표현식, 화살표 함수 호이스팅 불가
// 함수 표현식
let helloworld3 = function () {
  console.log("helloworld3");
};
helloworld3();

// 화살표 함수
let helloworld4 = () => {
  console.log("helloworld4");
};
helloworld4();

// 매개 변수 있는 version!
function sayHello1(text) {
  return text;
}
console.log(sayHello1("yul"));

function sayHello2(text, name) {
  return `${text} ${name}`;
}
console.log(sayHello2("tong", "yul"));

let sayHello3 = function (text) {
  console.log(text);
};

sayHello3("안녕");

let sayHello4 = function (text, name) {
  console.log(`${text} ${name}`);
};

sayHello4("tong", "yul");

let sayHello5 = (text) => {
  console.log(text);
};
sayHello5("안녕");
let sayHello6 = (text, name) => {
  console.log(`${text} ${name}`);
};
sayHello6("tong", "yul");

let multifly = (a, b) => {
  return a * b;
};

console.log(multifly(3, 7));
console.log(multifly(2, 2));

let square = (a) => {
  console.log(a ** 2);
};

square(4);
square(11);
square(5);
