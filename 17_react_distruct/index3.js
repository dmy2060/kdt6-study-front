const list = ["a", "b", "c", "d", "f"];

// 일반 for문으로 배열의 각 원소를 출력
for (let i = 0; i < list.length; i++) {
  console.log(list[i]);
}

// map()
const items = list.map((txt, id, arr) => {
  console.log("txt :", txt); // 원소값
  console.log("id :", id); // 인덱스 위치
  console.log("arr :", arr); // 현재 순회하고 있는 배열 전체

  return `${id} 위치에  ${txt} 원소가 있음`;
});

console.log("items >>>", items);

// filter()
// - js 배열 내장 함수
// - 주어진 함수의 테스트를 통과하는 모든 요소를 모아서
//   (true면 요소 유지, false면 버림) "❗새로운 배열"을 반환

const animals = ["dog", "cat", "rabbit"];
const newAnimals = animals.filter((animal) => {
  return animal.length > 3;
});
console.log(newAnimals); // [ 'rabbit' ]

const newAnimals2 = animals.filter((animal) => {
  return animal.includes("a");
});
console.log(newAnimals2); // [ 'cat', 'rabbit' ]

// ====================================================
// 퀴즈
const nums = [1, 2, 3, 4, 5];
const words = ["dog", "cat", "rabbit", "apple", "wow"];

// 1. map()를 이용해서 dobbleNums 배열에 [2, 4, 6, 8, 10]이 반환되도록 코드 작성
// const dobbleNums = nums.map((num) => {
//   return num * 2;
// });
// 1-1 축약 버전
const dobbleNums = nums.map((num) => num * 2);
console.log("dobbleNums:", dobbleNums);

// 2. filter() 이용해서 글자에 t 포함 필터링하는 newWords 배열 작성
// const newWords = words.filter((word) => {
//   return word.includes("t");
// });
// 2-1 축약 버전
const newWords = words.filter((word) => word.includes("t"));
console.log("newWords:", newWords);

////////////////////////////////////////////////////////
const tripleNums = nums.map((num) => num * 3);
console.log("tripleNums:", tripleNums);
console.log("tripleNums boolean:", tripleNums.includes(3)); // 3 원소가 있는가? => true
console.log("tripleNums boolean:", tripleNums.includes(7)); // 3 원소가 있는가? => false
console.log("tripleNums number:", tripleNums.indexOf(9)); // 9 원소의 인덱스 위치는? => 2
console.log("tripleNums number:", tripleNums.indexOf(7)); // 9 원소의 인덱스 위치는? => -1

const aaa = ["a", "b", "c"];
const bbb = ["d", "e", "f"];

// concat() : 배열 합치기
console.log(aaa.concat(bbb)); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]

const arr1 = [
  { name: "a", id: 1 },
  { name: "b", id: 2 },
  { name: "c", id: 3 },
];
const arr2 = [
  { name: "d", id: 4 },
  { name: "e", id: 5 },
  { name: "f", id: 6 },
];

console.log(arr1.concat(arr2));

// [
//    { name: 'a', id: 1 },
//    { name: 'b', id: 2 },
//    { name: 'c', id: 3 },
//    { name: 'd', id: 4 },
//    { name: 'e', id: 5 },
//    { name: 'f', id: 6 }
// ]
