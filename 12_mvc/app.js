const express = require("express");
const app = express();
const PORT = 8000;

app.listen(PORT, () => {
  console.log("12_mvc 서버 실행");
  console.log(`http://localhost:${PORT}`);
});
