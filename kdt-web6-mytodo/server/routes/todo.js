const express = require("express");
const controller = require("../controller/Ctodo");
const router = express.Router();

router.get("/", controller.todos);
router.post("/todo", controller.todo);
router.patch("/todo/:todoId", controller.todoId);
router.delete("/todo/:todoId", controller.todoDelete);

module.exports = router;
