// frontend js

// socket 사용을 위해서 객체 생성
let socket = io.connect();

// 나의 닉네임
let myNick;
socket.on("connect", () => {
  console.log("🍕 Client Socket Connected >>", socket.id);
});

// [실습1]
// function sayHello() {
//   // clinet -> server 정보 보내기
//   // socket.emit(event, data): 데이터 "전송"
//   // => event 라는 이름으로 data 를 전송
//   // => event 이름은 아무렇게나 정할 수 있음
//   socket.emit("hello", { who: "client", msg: "hello" });

//   // socket.on(event, callbak): 데이터 "받음"
//   // event에 대해서 정보를 받아 callback 함수 실행
//   socket.on("helloKr", (data) => {
//     document.getElementById(
//       "form-server"
//     ).textContent = `${data.who} : ${data.msg}`;
//   });
// }
// function sayStudy() {
//   socket.emit("study", { who: "client", msg: "study" });
//   socket.on("studyKr", (data) => {
//     document.getElementById(
//       "form-server"
//     ).textContent = `${data.who} : ${data.msg}`;
//   });
// }
// function sayBye() {
//   socket.emit("bye", { who: "client", msg: "bye" });
//   socket.on("byeKr", (data) => {
//     document.getElementById(
//       "form-server"
//     ).textContent = `${data.who} : ${data.msg}`;
//   });
// }

// [실습3] 채팅창 입장 안내 문구
socket.on("notice", (msg) => {
  document
    .querySelector("#chat-list")
    .insertAdjacentHTML("beforeend", `<div class="notice">${msg}</div>`);
});

// [실습3-2]
function entry() {
  console.log(document.querySelector("#nickname").value);
  socket.emit("setNick", document.querySelector("#nickname").value);
}

socket.on("entrySuccess", (nick) => {
  // 1. 내 닉네임 저장
  myNick = nick;
  // 2. 닉네임 입력창 & 버튼 비활성화
  document.querySelector("#nickname").disabled = true; // 입력창 비활성화 (클릭 막기)
  document.querySelector(".entry-box > button").disabled = true; // 버튼 비활성화 (클릭 막기)

  // 3. div.chat-box 요소 보이기
  document.querySelector(".chat-box").classList.remove("d-none");
});

// [실습3-2]
// 닉네임 중복 -> alert 띄우기
socket.on("error", (msg) => {
  alert(msg);
});

// [실습3-2]
// 닉네임 리스트 객체 업데이트하는 이벤트를 받음
socket.on("updateNicks", (obj) => {
  let options = `<option value="all">전체</option>`;
  console.log(obj);
  // select#nick-list 요소의 option 추가
  for (let key in obj) {
    // obj[key] : 유저가 인풋에 입력한 닉네임
    // key : 소켓 아이디
    options += `<option value="${key}">${obj[key]}</option>`;
  }

  // select 요소에 options 덮어쓰기
  document.querySelector("#nick-list").innerHTML = options;
});
// [!!보충]
// const nickObj = { hello: '안녕', apple: '사과' };

// // for in 반복문
// for (let key in nickObj) {
//   console.log(key, nickObj[key]);
// }

// [실습4] 채팅창 메세지 전송 step1
// "send" 이벤트 전송 { 닉네임, 입력메세지 }
function send() {
  const data = {
    myNick: myNick,
    msg: document.querySelector("#message").value,
  };
  socket.emit("send", data);

  document.querySelector("#message").value = ""; // 인풋 초기화
}

// [실습4] 채팅창 메세지 전송 step2
// 서버에 접속한 모든 클라이언트한테 "누가 뭐라고 말했는지" 이벤트 보내기
socket.on("newMessage", (data) => {
  console.log("socket on newMessage >> ", data);

  // 생성해야할 채팅 구조
  // <div class="my-chat">
  //   <div>user1: msg1</div>
  // </div>
  // <div class="other-chat">
  //   <div>user2: msg2</div>
  // </div>

  // #chat-list 요소 선택 (파란색 박스 = 메세지 상자)
  let chatList = document.querySelector("#chat-list");

  // // my-chat or .other-chat 요소 생성
  // let div = document.createElement("div");

  // // 가장 안쪽 div 요소 생성
  // let divChat = document.createElement("div");

  if (myNick == data.nick) {
    chatList.insertAdjacentHTML(
      "beforeend",
      `
    <div class="my-chat">
      <div>${data.nick}: ${data.msg}</div>
  </div>`
    );
  } else {
    chatList.insertAdjacentHTML(
      "beforeend",
      `
    <div class="other-chat">
      <div>${data.nick}: ${data.msg}</div>
  </div>`
    );
  }
  chatList.scrollTop = chatList.scrollHeight - chatList.clientHeight;
});
