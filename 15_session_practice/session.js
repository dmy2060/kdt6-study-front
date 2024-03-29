const express = require("express");
const session = require("express-session");
const dotenv = require("dotenv");
// dotenv : 환경변수를 파일에 저장해놓고 접근할 수 있게 돕는 모듈
const app = express();
const PORT = 8000;

dotenv.config();
console.log("dotenv >>>", process.env.SECRET_KEY);
// process.env.XXX

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// session( { 세션모듈_옵션 } )
// - secret: 세션을 발급할 때 사용되는 키 (임의로 변조하는 것을 방지)
// - resave: 세선에 수정사항이 생기지 않더라도 매 요청(request)마다 다시 저장할 건지
// - saveUninitialized: 세션에 저장할 내역에 없더라도 처음부터 세션 생성할지
// - secure: https 프로토콜에서만 세션을 주고 받을 건지
app.use(
  session({
    secret: process.env.SECRET_KEY, // 필수 옵션 (세선 암호화 할 때 쓰이는 키)
    resave: false,
    saveUninitialized: false, // 일반적으로 false 지정
  })
);

// 세션 설정
// req.session.키 = 값

// 세션 읽기(사용)
// req.session.키

// 세션 삭제
// req.session.destroy(callback_함수)

app.get("/", (req, res) => {
  res.render("session", { session: req.session.userid });
});
app.get("/login", (req, res) => {
  res.render("login");
});

const userID = "banana";
const pw = "1234";

app.post("/login", (req, res) => {
  console.log(req.body);

  if (userID === req.body.userid && pw === req.body.userpw) {
    req.session.userid = req.body.userid;
    res.send({ isLogin: true, sessionid: req.session.userid });
  } else {
    res.send({ isLogin: false });
  }
});

app.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      throw err;
    }

    res.send(true);
  });
});

app.listen(PORT, () => {
  console.log("15_session_cookie(session) 실행");
  console.log(`http://localhost:${PORT}`);
});
