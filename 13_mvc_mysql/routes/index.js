const express = require("express");
const controller = require("../controller/Cvisitor");
const router = express.Router();

router.get("/", controller.main);
router.get("/Visitor", controller.getVisitors);

module.exports = router;
