const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routing 주소 설정
app.get("/", (req, res) => {
  res.render("index");
});

// 1-1. /ajax get 요청
app.get("/ajax", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

// 1-2 /ajax post 요청
app.post("/ajax", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});
// 2-1 /axios get 요청(경로에 오타내서 확인할 경우 에러일 경우도 확인 가능함)
app.get("/axios", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

// 2-2 /axios post 요청(경로에 오타내서 확인할 경우 에러일 경우도 확인 가능함)
app.post("/axios", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.get("/practice1", (req, res) => {
  res.render("practice1");
});

app.get("/axiosTest", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

const loginId = "banana";
const loginPw = "4321";

app.post("/axiosTest", (req, res) => {
  console.log(req.body);
  console.log(req.body.id);

  // if (loginId == req.body.id && loginPw == req.body.pw) {
  //   res.send(req.body);
  // } else {
  //   res.send("오류");
  // }
  loginId == req.body.id && loginPw == req.body.pw
    ? res.send(req.body)
    : res.send("오류");
});
app.listen(PORT, () => {
  console.log("09_form_dynamic 서버 실행");
  console.log(`http://localhost:${PORT}`);
});
