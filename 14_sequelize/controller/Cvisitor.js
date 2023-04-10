// [before]
// const Visitor = require('../model/Visitor');
// [after]
// models 변수 값 = models/index.js에서 export 한 db 객체
const models = require("../models"); // models/index.js 내보내는 값
// console.log(models);

// (1) GET / => localhost:PORT/
exports.main = (req, res) => {
  res.render("index");
};

// (2) GET /visitor => localhost:PORT/visitor
exports.getVisitors = async (req, res) => {
  // ver2. async/await 사용
  const result = await models.Visitor.findAll();
  console.log("findAll >> ", result); // [ {}, {}, {}, {} ]
  res.render("visitor", { data: result });
};

// (3) POST /visitor/write
exports.postVisitor = async (req, res) => {
  const result = await models.Visitor.create({
    name: req.body.name,
    comment: req.body.comment,
  });
  console.log("create >> ", result);
  res.send(result);
};

// (5) DELETE /visitor/delete
exports.deleteVisitor = async (req, res) => {
  await models.Visitor.destroy({
    where: { id: req.body.id },
  });
  res.end();
};

exports.getVisitor = async (req, res) => {
  const result = await models.Visitor.findOne({
    where: { id: req.query.id },
  });
  console.log("findOne >> ", result);
  res.send(result);
};

exports.patchVisitor = (req, res) => {
  console.log(req.body);

  Visitor.patchVisitor(req.body, () => {
    res.send("수정 성공!");
  });
};

exports.signup = (req, res) => {
  res.render("signup");
};

exports.post_signup = (req, res) => {
  console.log(req.body);
  models.User.create({
    userid: req.body.userid,
    name: req.body.name,
    pw: req.body.pw,
  }).then(() => {
    // res.send(true);
    res.end(); // 데이터 없이 응답할때 사용
  });
};

exports.signin = (req, res) => {
  res.render("signin");
};

exports.post_signin = (req, res) => {
  console.log(req.body);
  models.User.findAll({
    where: {
      userid: req.body.userid,
      pw: req.body.pw,
    },
  }).then((result) => {
    console.log(result);
    if (result.length > 0) {
      res.send(true);
    } else {
      res.send(false);
    }
  });
};

exports.post_profile = (req, res) => {
  console.log(req.body);

  models.User.findOne({
    where: {
      userid: req.body.userid,
    },
  }).then((result) => {
    console.log(result);
    if (result.dataValues != "") {
      res.render("profile", { data: result.dataValues });
    } else {
      res.send(false);
    }
  });
};

exports.edit_profile = async (req, res) => {
  console.log(req.body);

  // models.User.findOne({
  //   where: {
  //     id: req.body.id,
  //   },
  // }).then((result) => {
  //   // console.log("dfkld", result);
  //   result.update({ name: req.body.name, pw: req.body.pw }).then(() => {
  //     res.send("회원정보 수정 성공!");
  //   });
  // });

  await models.User.update(
    {
      userid: req.body.userid,
      name: req.body.name,
      pw: req.body.pw,
    },
    { where: { id: req.body.id } }
  );
  res.end();
};

exports.delete_profile = (req, res) => {
  console.log(req.body);

  models.User.destroy({
    where: { id: req.body.id },
  }).then(() => {
    red.end();
  });
};
