const express = require("express");
const app = express();
const PORT = 8000;

const multer = require("multer");
const path = require("path");

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      // done(null, path.basename(req.body.id, ext) + ext);
      // [유저 아이디값 + 현재시간 + 확장자] 형식
      done(null, req.body.id + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/uploads", express.static(__dirname + "/uploads"));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/result", uploadDetail.single("userfile"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  res.render("result", {
    file: req.file,
    userInfo: req.body,
  });
});

app.listen(PORT, () => {
  console.log("10_file_upload_practice 서버 실행");
  console.log(`http://localhost:${PORT}`);
});
