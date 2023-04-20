// frontend js

// const session = require("express-session");

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
    dm: document.querySelector("#nick-list").value, // select 에서 선택한 option 태그의 value 값
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
  // let chatList = document.querySelector("#chat-list");

  // if (myNick == data.nick) {
  //   chatList.insertAdjacentHTML(
  //     "beforeend",
  //     `
  //   <div class="my-chat">
  //     <div>${data.nick}: ${data.msg}</div>
  // </div>`
  //   );
  // } else {
  //   chatList.insertAdjacentHTML(
  //     "beforeend",
  //     `
  //   <div class="other-chat">
  //     <div>${data.nick}: ${data.msg}</div>
  // </div>`
  //   );
  // }

  // chatList.scrollTop = chatList.scrollHeight - chatList.clientHeight;

  // [!!미션 풀이]
  // 미션!!

  // #chat-list 요소 선택 (파란색 박스 = 메세지 상자)
  let chatList = document.querySelector("#chat-list");

  // // my-chat or .other-chat 요소 생성
  let div = document.createElement("div");
  let divNick = document.createElement("div");

  // // 가장 안쪽 div 요소 생성
  let divChat = document.createElement("div");
  let divChatBg = document.createElement("img");
  // 새 메세지가 도착했는데, myNick에 저장된 현재 내 닉네임과
  // data 의 닉네임이 같다면, 내 채팅으로 보이게 (오른쪽 배치 == .my-chat)
  // data 의 닉네임이 다르다면, 상대방 채팅으로 보이게 (왼쪽 배치 == .other-chat)
  if (myNick === data.nick) {
    div.classList.add("my-chat");
    divNick.classList.add("name");
    divChatBg.classList.add("my-bg");
    divChatBg.src = "/static/img.png";
  } else {
    div.classList.add("other-chat");
    divNick.classList.add("name");
  }

  // [실습5] DM 기능 추가
  if (data.dm) {
    div.classList.add("secret-chat");
    divChat.textContent = data.dm;
  }
  divNick.textContent = `${data.nick}`;
  // divChat의 textContent/innerText 값을 적질히 변경
  // ex. nick : msg 형태로 보이게 했음
  // divChat.textContent = `${data.nick} : ${data.msg}`; [실습 4]
  divChat.textContent = divChat.textContent + `${data.msg}`; // [실습5]
  // dm: divChat.textContent = '(속닥속닥)' + 누가 : 메세지
  // not dm: divChat.textContent = '' + 누가 : 메세지

  // divChat 을 div 요소에 추가
  div.append(divNick);
  divNick.append(divChatBg);
  div.append(divChat);
  // div를 chatList 에 추가
  chatList.append(div);

  // (선택) 메세지가 많아져서 스크롤이 생기더라도 하단 고정
  chatList.scrollTop = chatList.scrollHeight - chatList.clientHeight;
});

let fileInfo;
function fileUpload() {
  console.log("click upload btn!!!");
  const formData = new FormData();
  // FormData란?
  // form 태그의 데이터를 동적으로 제어할 수 있는 기능, 보통 axios/ajax... 함께 사용함
  // 페이지 전환 없이 '현재 페이지'에서 동적으로 파일 업로드하고 싶을 때 사용함
  const fileInput = document.querySelector("#userfile"); // querySelector('#dynamic-file')
  console.dir(fileInput);
  console.log(fileInput.files);
  console.log(fileInput.files[0]);

  formData.append("userfile", fileInput.files[0]);

  axios({
    url: "/upload",
    method: "POST",
    data: formData,
    headers: {
      "Content-Type": "multipart/form-date",
    },
  }).then((response) => {
    console.log(response.data.path);
    document.querySelector(".profile-img img").src = `/${response.data.path}`;
    fileInfo = response;
  });
}

let sessionId;
function profileSet() {
  console.log(fileInfo);
  console.log(document.querySelector("#nickname").value);

  const profileData = {
    nick: document.querySelector("#nickname").value,
    fileInfo: fileInfo.data,
  };
  // console.log(docu);
  axios({
    url: "/pofileSet",
    method: "POST",
    data: profileData,
  }).then((res) => {
    console.log(res);
    document.querySelector(".dim-layer").style.display = "none";
    document.querySelector(".pofile img").src = `${res.data.fileInfo}`;
    document.querySelector(".nic").innerHTML = `${res.data.name}`;
    sessionId = `${res.data.sessionId}`;
    console.log(sessionId);
  });
}
