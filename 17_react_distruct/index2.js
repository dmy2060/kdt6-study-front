// 1. 클래스
// -> 객체 생성 템플릿 => 객체를 만들기 위해 사용

class Cat {
  // 생성자
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // 메소드
  mew() {
    console.log(`${this.name} 야옹`);
  }
  // 메소드2
  eat() {
    console.log("냠냠");
  }
}

let yull = new Cat("율무", "3");
let tong = new Cat("통키", "4");

yull.mew();
yull.eat();
tong.mew();
tong.eat();

// class가 없던 시절

let tv1 = {
  name: "aaa tv",
  price: 2000,
  size: "56inch",
};

let tv2 = {
  name: "bbb tv",
  price: 3000,
  size: "27inch",
};

let tv3 = {
  name: "ccc tv",
  size: "55inch",
  // 전달이 잘못되어 객체가 잘못 정의될 수 있음
};

console.log(tv1.price, tv2.price, tv3.price);

// 클래스 등장 = 일종의 작업지시서
class TV {
  name = "";
  price = 0;
  size = "";

  constructor(name, price, size) {
    // this: 여기 클래스 안에 있는 속성
    // this.name : 이 클래스 안에 있는 name!
    this.name = name;
    this.price = price;
    this.size = size;
  }

  getPrice() {
    return this.price + "만원";
  }

  setPrice(price) {
    this.price = price;
  }
}

const newTv1 = new TV("aaa tv", 2000, "56inch");
// const newTv2 = new TV("aaa tv", 2000, "56inch");
console.log(newTv1.getPrice());
newTv1.setPrice(4000);
console.log(newTv1.getPrice());

// 2. 하위클래스
class Products {
  name = "";
  price = 0;

  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getPrice() {
    return this.price + "만원";
  }
}

// 상속의 의미 : 부모클래스(product)로부터 변수, 메소드를 가져와서 사용하는 개념
// -> [사용방법] class 상속받을 클래스 네임 extends 상속받고 싶은 클래스 네임
// 상속받으면 부모클래스의 메소드는 그냥 사용 가능함. 단, 부모클래스는 자식 클래스의 값을 사용하지 못함.
class Laptop extends Products {
  weight = "";
  constructor(name, price, weight) {
    // 상속받는 부모 클래스 값을 불러옴
    super(name, price);
    this.weight = weight;
  }
}
let laptop = new Laptop("삼성", 5000, "30kg");
console.log(laptop.price);
console.log(laptop.getPrice());
