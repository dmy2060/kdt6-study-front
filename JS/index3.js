var name = "홍길동";
console.log(name);

var name = "이몽룡";
console.log(name);

/* let
1. 재선언 불가, 재할당 가능
2. 선언과 동시에 초기화하지 않아도 됨
*/

let a = 1;
a = 2;
console.log(a);

let aa;
aa = 123;
console.log(aa);

/* const
1. 재선언 불가, 재할당 불가
2. 선언과 동시에 초기화헤야 함 
*/

const b = 3;
console.log(3);

let q1 = 2;
q1 = q1 - 2;
console.log(q1);

const q2 = 5;
// q2 = q2 - 5; (x)

// 식별자(변수, 함수)이름 규칙
// 1. 특수문자는 $ _ 만 가능
// 2. 숫자가 맨 처음에는 안됨
// 3. 예약어 금지 (let, const, var, if, for, ...)
let $ = 5;

let _ = 4;
console.log(_);

let s_t = 1;
