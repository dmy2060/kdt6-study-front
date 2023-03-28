const express = require("express"); // node 모듈에 있는 express 가져온다
const app = express(); // app에 담아 express 실행
const PORT = 8000;

app.set("view engine", "ejs"); // view engine 등록
app.use("/views", express.static(__dirname + "/views")); // ejs를 담을 views 폴더 경로 설정

// 라우팅(routing): 경로 설정
// 브라우저에서 어떤 url로 접속했을 때 어떤 페이지를 보여줄 것인가!!!

// localhost:PORT/ 접속했을 때, index.ejs를 보여주겠다
// 포트 번호까지는 쓸 필요없고 /를 첫번째 인자로 작성 해주면 됨
// ex:www.naver.com/ -> 네이버 메인화면 이 경우에도 "/"만 입력해주면됨
// www.naver.com/login -> "/login"
app.get("/", (req, res) => {
  // views/index,ejs 파일을 찾아서 응답
  res.render("index");
});

app.listen(PORT, () => {
  console.log("웹 서버 실행!!");
  console.log(`http://localhost:${PORT}`);
});
