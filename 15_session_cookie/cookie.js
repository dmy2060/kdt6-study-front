const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// cookie-parser 모듈 불러오기
// : 요청의 쿠키를 해석해서 req.cookies 객체로 만듦
// ex. name=hello 라는 쿠키를 보내면, req.cookies => { name:'hello' }
const cookieParser = require("cookie-parser");

// cookieParser(secretKey, optionObj);
// - secretKey: 비밀키
// - optionObj: 쿠키에서 사용할 옵션 값
app.use(cookieParser()); // req.cookies 가능 해짐

// res.cookie(key, value, options)
// : 쿠키 "설정"

// res.clearCookie(key, value, options)
// : 쿠키 "삭제"

const cookieConfing = {
  httpOnlu: true, // 웹 서버를 통해서만 쿠키 접근 가능
  maxAge: 60 * 1000, // 유효시간 1분 (쿠키 수명:단위 ms)
  // expires: 만료 날짜 설정
  // secure: https 에서만 쿠키 접근
  // signed: 쿠키 암호화
};

app.get("/", (req, res) => {
  res.render("index");
});

// 1. 쿠키 설정
app.get("/setCookie", (req, res) => {
  // 쿠키 설정하는 코드
  res.cookie("my first cookie", "cookie value test", cookieConfing);
  // 클라이언트한테 응답 보내는 코드
  res.send("쿠키 설정 완료");
});

app.get("/getCookie", (req, res) => {
  // req.cookies
  // cookie-parser 모듈이 만든 요청의 쿠키를 읽어옴
  res.send(req.cookies);
});

app.get("/clearCookie", (req, res) => {
  // 쿠키 삭제(응답 보내는건 아님)
  // clearCookie 할 때, res.cookie() 설정했던 key & value & option 일치해야 함
  // (단, option에서 expires, maxAge 옵션은 일치하지 않아도 괜찮! 그치만 보통은 옵션을 config에 담아서 보관하므로 거의 일치해서 보냄!)
  res.clearCookie("my first cookie", "cookie value test", cookieConfing);

  // 클라이언트 응답
  res.send("쿠키 삭제 응답!!");
});

app.listen(PORT, () => {
  console.log("15_session_cookie_practice 실행");
  console.log(`http://localhost:${PORT}`);
});
