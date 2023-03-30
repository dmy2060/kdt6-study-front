const express = require("express"); // node 모듈에 있는 express 가져온다
const app = express(); // app에 담아 express 실행
const PORT = 8000;

app.set("view engine", "ejs"); // view engine 등록
app.use("/views", express.static(__dirname + "/views")); // ejs를 담을 views 폴더 경로 설정
// 아래 두개는 꼭 써줘야함
app.use(express.urlencoded({ extended: true })); // post 요청으로 들어오는 모든 형식의 데이터를 파싱(분석)/ 보통 라우팅 이전에 선언
app.use(express.json()); // json(확장자 중 하나) 형태로 데이터를 주고 받음

// 라우팅(routing): 경로 설정
// 브라우저에서 어떤 url로 접속했을 때 어떤 페이지를 보여줄 것인가!!!

// localhost:PORT/ 접속했을 때, index.ejs를 보여주겠다
// 포트 번호까지는 쓸 필요없고 /를 첫번째 인자로 작성 해주면 됨
// ex:www.naver.com/ -> 네이버 메인화면 이 경우에도 "/"만 입력해주면됨
// www.naver.com/login -> "/login"
app.get("/", (req, res) => {
  // views/index,ejs 파일을 찾아서 응답
  const myTitle = "폼 실습을 합시다~~";
  res.render("index", { title: myTitle });
});
// 객체를 객체로 보내줌
// 키 값은 변수로 받아서도 사용 가능함

app.get("/practice1", (req, res) => {
  res.render("practice1");
});

app.get("/practice2", (req, res) => {
  res.render("practice2");
});

app.get("/result1", function (req, res) {
  console.log(req.query);
  res.render("result1", { title: "실습 1", info: req.query });
});

app.post("/result2", function (req, res) {
  console.log(req.body);
  res.render("result1", { title: "실습 2", info: req.body });
});

app.listen(PORT, () => {
  console.log("웹 서버 실행!!");
  console.log(`http://localhost:${PORT}`);
});
