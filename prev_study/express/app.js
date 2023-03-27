const express = require("express");
const app = express();
const port = 8080;
// get 요청에 의해서 반환받게
app.set("view engine", "ejs");
app.set("/views", "views");
app.use("/static", express.static(__dirname + "/static"));
app.get("/", (request, responsive) => {
  // 간단한 문자정도만 가능
  // 페이지 보내려면 rander 사용해야함
  // responsive.send("<h1>sdfsdfd</h1>");
  responsive.render("test");
});
app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/login/register", (req, res) => {
  res.render("register");
});

/*
    - request : 클라이언트가 서버에게 보내는 요청
    - responsive : 서버가 클라이언트에게 보내는 요청
*/

app.listen(port, () => {
  console.log(port + ` is open!`);
});
