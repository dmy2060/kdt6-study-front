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
  maxAge: 1000 * 60 * 60 * 24, // 유효시간 1일 (쿠키 수명:단위 ms)
};

app.get("/", (req, res) => {
  res.render("index", { popup: req.cookies.popup });
});

app.post("/cookie", (req, res) => {
  res.cookie("popup", "hide", cookieConfing);
  res.end();
});

app.listen(PORT, () => {
  console.log("15_session_cookie_practice 실행");
  console.log(`http://localhost:${PORT}`);
});

// cookie 정리!

// req 객체
// req.cookies: cookie-parser가 만드는 요청의 쿠키를 해석한 객체

// res 객체
// res.cookie(key, value, option): 쿠키 설정 메서드
// res.clearCookie(key, value, option): 쿠키 삭제 메서드
