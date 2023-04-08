const express = require("express");
const controller = require("../controller/Cvisitor");
const router = express.Router();

// GET / => localhost:PORT/
router.get("/", controller.main);

// GET /visitor => localhost:PORT/visitor
router.get("/Visitor", controller.getVisitors); // 전체 조회

// POST /visitor/write
router.post("/visitor/write", controller.postVisitor); // 하나 추가

// GET /visitor/get
router.get("/visitor/get", controller.getVisitor); // 하나 조회

// FETCH /visitor/edit
router.patch("/visitor/edit", controller.patchVisitor); // 하나 수정

// DELETE /visitor/delete
router.delete("/visitor/delete", controller.deleteVisitor); // 하나 삭제

router.get("/user/signup", controller.signup);
router.post("/user/signup", controller.post_signup);

router.get("/user/signin", controller.signin);
router.post("/user/signin", controller.post_signin);

router.post("/user/profile", controller.post_profile);
router.post("/user/profile/edit", controller.edit_profile);
router.post("/user/profile/delete", controller.delete_profile);

module.exports = router;
