const express = require("express");
const app = express();
const session = require("express-session");
// socket.io 불러오는 기본 셋팅
const http = require("http").Server(app);
const io = require("socket.io")(http);
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  console.log("client connected");
  res.render("chat", {
    session: req.sessionID,
  });
});

// multer 미들웨어 사용하기
const multer = require("multer"); // multer 불러오기
const path = require("path"); // path 불러오기 (내장 모듈) => 파일, 폴더 경로를 쉽게 설정
// const upload = multer({
//   dest: "uploads/", // dest: 업로드할 파일 경로 지정
// });
// multer 세부 설정
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      // destination: 경로 설정
      // done: callback 함수
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB로 파일 크기 제한
});

app.post("/upload", uploadDetail.single("userfile"), (req, res) => {
  console.log(req.file); // 업로드한 파일 정보는 여기 존재

  console.log(req.body); // 폼에 입력한 정보 (파일은 없음)

  res.send(req.file);
});

app.use(
  session({
    secret: "sucssecs", // 필수 옵션 (세선 암호화 할 때 쓰이는 키)
    resave: false,
    saveUninitialized: false, // 일반적으로 false 지정
  })
);

app.post("/pofileSet", (req, res) => {
  req.session.name = req.body.nick;
  console.log(req.sessionID);
  const userInfo = {
    name: req.session.name,
    sessionId: req.sessionID,
    fileInfo: req.body.fileInfo.path,
  };
  res.send(userInfo);
});

// 닉네임을 저장할 객체
// : 닉네임이 겹치지 않도록 객체({})를 사용함
// { 소켓_아이디: 닉네임, ...}
const nickObj = {};
// [!!보충] js object에 key, value 추가하는 방법
// const nickObj = {};

// nickObj.hello = '안녕'; // 방법1
// nickObj['apple'] = '사과'; // 방법2
// 한번더 value에 접근해서 key를 설장해야 하는 경우 방법 1은 사용하기 어려움
// nickObj[socket.id] = 'sean'

// console.log(nickObj)

// [실습 3-2]
// 닉네임 리스트 객체 업데이트
// 유저가 들어오거나 퇴장할 때 내역 업데이트
function updateNickList() {
  io.emit("updateNicks", nickObj);
  // 서버에 접속한 클라이언트들에게 nickObj에 변경이 일어났음을 알리는 이벤트
}

// io.on()
// : socket과 관련된 통신 작업 처리 (이벤트 이름, 콜백함수)
// : 이벤트이름은 정해져있음
io.on("connection", (socket) => {
  // "connection" event
  // - 클라이언트가 접속했을 때 발생하는 이벤트
  // - 콜백으로 socket 객체를 제공

  // 🍕 최초 입장시 (연결 성공)
  // socket.id: 소켓 고유 아이디 -> socket 은 웹 페이지별로 id 생성!
  // => 크롬에서 탭 2개 띄우면 socket.id 는 각각 생김 (2개)
  console.log("🍕 Sever Socket Connected >> ", socket.id);

  // [실습 1]
  // socket.on("hello", (data) => {
  //   console.log(`${data.who} : ${data.msg}`);
  //   // server -> client 보낼 때
  //   socket.emit("helloKr", { who: "hello", msg: "안녕~~~" });
  // });

  // socket.on("study", (data) => {
  //   console.log(`${data.who} : ${data.msg}`);
  //   socket.emit("studyKr", { who: "study", msg: "공부합시다!" });
  // });
  // socket.on("bye", (data) => {
  //   console.log(`${data.who} : ${data.msg}`);
  //   socket.emit("byeKr", { who: "bye", msg: "잘가~" });
  // });

  // [실습3] 채팅창 안내 문구
  // io.emit("notice", `${socket.id.slice(0, 5)}님이 입장하셨습니다.`);

  // [실습3-2] 채팅창 입장 안내 문구 socket.id -> nickname
  socket.on("setNick", (nick) => {
    console.log("socket on setNick >>", nick); // 프론트에서 입력한 닉네임 값
    // 닉네임 중복 여부
    if (Object.values(nickObj).indexOf(nick) > -1) {
      // 아이디 중복
      socket.emit("error", "이미 존재하는 닉네임입니다. 다시 입력해주세요!!");
    } else {
      // 아이디 통과
      nickObj[socket.id] = nick; // nickObj 객체에 "소켓_아이디: 닉네임" 추가
      io.emit("notice", `${nick}님이 입장하셨습니다.`); // 입장 메세지 "전체 공지"
      // => 서버에 접속한 모든 클라이언트에게 이벤트 전송
      socket.emit("entrySuccess", nick); // 입장 성공시
      updateNickList(); // 닉네임 리스트 객체 업데이트
    }

    // [!!보충]
    // const nickObj = {hello: '안녕', apple: '사과'}
    // const nick1 = '안녕'
    // const nick2 = '사과'
    // const nick3 = '오렌지'

    // // Object.values : obj의 value만 뽑아서 배열로
    // console.log(Object.values(nickObj))
    // console.log(Object.values(nickObj).indexOf(nick1))
    // console.log(Object.values(nickObj).indexOf(nick2))
    // console.log(Object.values(nickObj).indexOf(nick3))
  });

  // let userNickname;
  // [실습3-3] 접속자 퇴장
  // disconnect event : 클라이언트가 연결을 끊었을 때 발생 (브라우저 탭 닫음)
  socket.on("disconnect", () => {
    console.log("💔 Server Socket Disconnected >>", socket.id);
    // if (nickObj[socket.id]) {

    // }
    // 미션!!
    // 1. xx님 퇴장하셨습니다. 메세지 출력
    io.emit("notice", `${nickObj[socket.id]}님이 퇴장하셨습니다.`);
    // 2. nickObj에서 닫은 탭의 socket.id 를 삭제
    delete nickObj[socket.id];

    //[!!보충]
    // const nickObj = {hello: '안녕', apple: '사과'}

    // console.log(nickObj)
    // delete nickObj['hello']
    // console.log(nickObj)
    // 3. 리스트 업데이트
    updateNickList();

    // userNickname = nickObj[socket.id];
    // delete nickObj[socket.id];
    // io.emit("notice", `${iddd}님이 퇴장하셨습니다.`);
    // updateNickList();
  });

  // [실습4] 채팅창 메세지 전송 step1
  socket.on("send", (obj) => {
    console.log(obj);

    // [실습4] 채팅창 메세지 전송 step2
    // 서버에 접속한 모든 클라이언트한테 "누가 뭐라고 말했는지" 이벤트 보내기
    // const sendData = {
    //   nick: obj.myNick,
    //   msg: obj.msg,
    // };
    // io.emit("newMessage", sendData);

    // [실습5] DM 기능 구현
    // 만약에 dm 메세지라면: 그 특정 socket.id 에게만 메세지 전달
    // { nick, dm, msg }
    // 만약에 dm 메세지가 아니면: 전체 공지
    // { nick, msg }

    if (obj.dm !== "all") {
      // dm 전송
      let dmSocketId = obj.dm; // 각 닉네임에 해당하는 socket.id
      const sendData = { nick: obj.myNick, dm: "(속닥속닥)", msg: obj.msg };

      // 1. dm을 보내고자하는 그 socket.id 한테 메세지 전송
      io.to(dmSocketId).emit("newMessage", sendData);
      // 2. dm을 보내고 있는 자기자신 메세지 전송
      socket.emit("newMessage", sendData);
    } else {
      // all 전송 (전체 공지)
      const sendData = {
        nick: obj.myNick,
        msg: obj.msg,
      };
      io.emit("newMessage", sendData);
    }
  });
});

// 주의) socket을 사용할 때는 http.listen으로 PORT 열어야 함!!!
http.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
