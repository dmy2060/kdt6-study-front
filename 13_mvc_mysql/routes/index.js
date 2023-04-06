const express = require("express");
const controller = require("../controller/Cvisitor");
const router = express.Router();

router.get("/", controller.main);
router.get("/Visitor", controller.getVisitors); // 전체 조회

// POST /visitor/write
router.post("/visitor/write", controller.postVisitor); // 하나 추가
module.exports = router;
