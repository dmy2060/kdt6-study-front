const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routing 주소 설정
app.get("/", (req, res) => {
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
  // loginId === req.body.id && loginPw === req.body.pw
  //   ? res.send(req.body)
  //   : res.send("오류");

  // 풀이

  // 성공과 오류의 키값을 따로 보내서 if문으로 판단
  if (loginId == req.body.id && loginPw == req.body.pw) {
    res.send({ isLogin: true, userInfo: req.body });
  } else {
    res.send({ isLogin: false });
  }
});
app.listen(PORT, () => {
  console.log("09_form_dynamic_practice 서버 실행");
  console.log(`http://localhost:${PORT}`);
});
