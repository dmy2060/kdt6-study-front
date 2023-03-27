/* 문자영 관련 함수 + 속성(length) */
/* 
    -toUpperCase(), toLowerCase()
    -trim()
    -indexOf()
    -slice()
    -replace(), replaceAll()
    -repeat()
*/

let str1 = "Strawberry Moon";
let str2 = "    Strawberry Moon    ";
// 문자열 인덱싱
console.log(str1[0]);
console.log(str1[0] + str1[12]);

// Sonny
console.log(str1[0] + str1[12] + str1[14] + str1[14] + str1[9]);
console.log(str1.length);
console.log(str2.length);

// 매개변수 없는 함수
let msg = "Happy Birthday!";
console.log(msg.toUpperCase(), msg.toLowerCase());
console.log(str2.trim());
console.log(str2.trim().length);

let msg2 = "  hello world!!  ";
console.log(msg2.toUpperCase().trim(), msg2.toUpperCase().trim().length);

// 매개변수 있는 함수
let fruit = "applemango";
console.log(fruit.indexOf("a"));
// 여러개 쓸 경우. 문자가 시작하는 인덱스를 반환
// 없는 문자 적을 경우 -1 반환
console.log(fruit.indexOf("apple"));

// charAt 인덱스 문자에 값을 반환
console.log(fruit.charAt(3));
/*  
    매개변수 한개 또는 두개 작성 가능,
    - 두개일때 첫번째 인덱스 부터 두번째인덱스 -1까지
    - - 값은 뒤에서 부터 반환
*/
console.log(fruit.slice(2));
console.log(fruit.slice(2, 5));

let msg3 = "Wow! It is so amazing!!";
console.log(msg3.replace("Wow", "Hey"));
console.log(msg3.replaceAll("o", "a"));
console.log(msg3.replace("o", "a"));

let date = "23.03.10";
console.log(date.split(""));
console.log(date.split("."));

console.log("hi".repeat(5));

// =========================== 배열!!
// push, pop, unshift, shift -> 원본 배열 변화
// indexOf, join, reverse

let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["quakka", "rabbit", "puppy", "hamster"];
arr1[5] = 6;
console.log(arr1);
arr1[8] = 6; // 중간에 빈 값이 생길 수 있음
console.log(arr1);

arr1 = [1, 2, 3, 4, 5];
arr1.push(6);
arr1.push(8);
console.log(arr1);

console.log(arr1.pop());
console.log(arr1);

arr2.unshift("cat");
console.log(arr2);
arr2.shift();
console.log(arr2);

// 배열.includes(요소) 요소가 있는지 없는지 검사
// true false 반환
console.log(arr2.includes("quakka"));
console.log(arr2.includes("cat"));
// type 까지 맞아야 반환 가능
console.log(arr2.indexOf("quakka"));

/* reverse */
console.log(arr1.reverse());
console.log(arr1); // 기존의 배열을 변경

/* 
    join 
    - 원래의 배열을 건드리지 않음
*/
str1 = arr1.join("");
console.log(str1);

/* 배열에서의 for */
// 기본 for 문
// for of 문
// for랑 for of랑 다르게 forEach는 함수 > 매개변수로 익명함수가 들어감

let arr3 = [1, 3, 5, 4, 6];
let alphabets = ["a", "b", "c", "d", "e"];

for (let i = 0; i < arr3.length; i++) {
  console.log(arr3[i]);
  //   console.log(alphabets[i]);
}

for (let number of arr3) {
  console.log(number);
}
for (let alphabet of alphabets) {
  console.log(alphabet);
}

arr3.forEach(function (num, i, arry) {
  console.log(num, i, arry);
});

arr3.forEach((num, i) => {
  console.log(num, i);
});

arr3.forEach((num) => {
  console.log(num);
});

/* 
    filter : 배열에 대한 함수
    기존 배열 변경 안시킴, 저장해야함
*/

console.log("-----");
arr3 = arr3.filter(function (num) {
  return num > 3;
});
console.log(arr3);

arr2 = arr2.filter((el) => {
  return el.length >= 6;
});
console.log(arr2);

/* map, find */
// map : 배열내의 모든 원소에 대해 연산한 결과를 모아서 새로운 배열 반환
// 기존 배열 변화 없음
// [1,2,3].map((number, index, array)=>{})
let arr4 = [1, 2, 3].map((el) => {
  return el * 3;
});
console.log(arr4);

arr4 = [1, 2, 3, 4, 5];
arr4 = arr4.map((num) => num * 10); //중괄호 안쓰고 return 안적어도 화살표 함수에서는 사용가능
console.log(arr4);

// arr4=[10,20,30,40,50]
// find : 특정 조건을 만족하는 첫번째 요소 반환
let findResult = arr4.find((num) => num >= 30);
console.log(findResult);

// 실습 1
let arr5 = [];
for (let i = 1; i <= 100; i++) {
  arr5.push(i);
}
console.log(arr5);

let sum0 = 0;
let sum1 = 0;
let sum2 = 0;
for (let i = 0; i < arr5.length; i++) {
  sum0 += arr5[i];
}
console.log(sum0);
for (let number of arr5) {
  sum1 += number;
}
console.log(sum1);
arr5.forEach((num) => {
  sum2 += num;
});
console.log(sum2);

// 실습2
let fruits1 = [
  "사과",
  "딸기",
  "파인애플",
  "수박",
  "참외",
  "오렌지",
  "자두",
  "망고",
];
let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];

let same = [];
let diff = [];
for (let i = 0; i < fruits1.length; i++) {
  if (fruits2.includes(fruits1[i])) {
    same.push(fruits1[i]);
  } else {
    diff.push(fruits1[i]);
  }
}
console.log(same);
console.log(diff);

// fillter 이용
let same2 = fruits1.filter((fruit) => fruits2.includes(fruit));
let diff2 = fruits1.filter((fruit) => !fruits2.includes(fruit));

console.log(same2);
console.log(diff2);
