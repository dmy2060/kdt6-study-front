// reduce(callback[, initValue])
// [, initValue] : 초기값 넣을 수 있으나, 보통 넣지 않음, 넣지 않을 경우 자동으로 첫번째꺼부터 시작
// 배열의 각 요소에 주어진 리듀서 함수를 실행하고, 하나의 결과값을 반환
const numbers = [1, 2, 3, 4, 5];

// 1 + 2 + 3 + 4 + 5
const sum = numbers.reduce((acc, currentValue) => {
  return acc + currentValue;
});

console.log(sum); // 15

const sum2 = numbers.reduce((acc, currentValue, idx) => {
  console.log(`====== ${idx} 번째 index ======`);
  console.log(`acc: ${acc}`);
  console.log(`currentValue: ${currentValue}`);
  return acc + currentValue;
});

console.log(sum2); // 15
