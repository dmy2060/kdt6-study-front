const models = require("../models");
exports.todos = async (req, res) => {
  const result = await models.Todo.findAll();
  // console.log(result);
  res.send(result);
};

exports.todo = async (req, res) => {
  const result = await models.Todo.create({
    title: req.body.title,
    done: req.body.done,
  });
  res.send(result);
};

exports.todoId = async (req, res) => {
  // console.log(req.params.todoId);
  await models.Todo.update(
    {
      title: req.body.title,
      done: req.body.done,
    },
    { where: { id: req.params.todoId } }
  );

  res.send(true);
};

exports.todoDelete = (req, res) => {
  console.log(req);
  models.Todo.destroy({
    where: { id: req.params.todoId },
  }).then(() => {
    res.end();
  });
};
