const express = require("express");
const controller = require("../controller/Cmain");
// controller 구조
// controller = {
//     main : ()=>{}, // 함수
//     comments : ()=>{} // 함수
// }
const router = express.Router();
// router 만들어 주는 아이
// const app = express();
// app.get

// router.post()

router.get("/", controller.main);
router.get("/comments", controller.comments);
router.get("/comment/:id", controller.comment);

module.exports = router;
