// TODO: 라우트 설정
const express = require("express");
const controller = require("../controller/Cuser");
const router = express.Router();

router.get("/", controller.main);
router.get("/signup", controller.signup);
router.post("/signup", controller.postSignup);
router.get("/signin", controller.signin);
router.post("/signin", controller.postSignin);
router.post("/profile", controller.profile);
router.post("/profile/edit", controller.profileEdit);
router.post("/profile/delete", controller.profileDelete);

module.exports = router;
