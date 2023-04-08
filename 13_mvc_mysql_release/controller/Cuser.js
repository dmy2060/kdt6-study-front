// TODO: 컨트롤러 코드
const User = require("../model/User");

exports.main = (req, res) => {
  res.render("index");
};

exports.signup = (req, res) => {
  res.render("signup");
};

exports.postSignup = (req, res) => {
  console.log(req.body);
  User.postSignup(req.body, () => {
    res.send(true);
  });
};

exports.signin = (req, res) => {
  res.render("signin");
};

exports.postSignin = (req, res) => {
  console.log(req.body);
  User.postSignin(req.body, (result) => {
    console.log("$", result);
    if (result.length > 0) {
      res.send({ isLogin: true, result: result[0] });
    } else {
      res.send({ isLogin: false });
    }
  });
};
exports.profile = (req, res) => {
  console.log(req.body);

  User.postProfile(req.body, (result) => {
    res.render("profile", { result: result[0] });
    console.log(result[0]);
  });
};

exports.profileEdit = (req, res) => {
  console.log(req.body);

  User.profileEdit(req.body, (result) => {
    res.send(result);
  });
};

exports.profileDelete = (req, res) => {
  console.log(req.body);

  User.profileDelete(req.body, (result) => {
    res.send(result);
  });
};
