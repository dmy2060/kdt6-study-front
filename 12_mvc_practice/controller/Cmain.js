const postUesr = require("../model/User");

exports.main = (req, res) => {
  res.render("index");
};

exports.login = (req, res) => {
  console.log(req.body);
  console.log(req.body.id);

  // const loginInfo = postUesr.postUesr()[0];
  const users = postUesr.users.split("\n");
  // const users1 = [];
  let flag = false;
  let userInfos;
  for (let i = 0; i < users.length; i++) {
    if (
      users[i].split("//")[0] == req.body.id &&
      users[i].split("//")[1] == req.body.pw
    ) {
      flag = true;
      userInfos = users[i].split("//")[2];
      break;
    } else {
      flag = false;
    }
  }
  console.log(userInfos);
  if (flag) {
    res.send({ isLogin: true, userInfo: req.body, userName: userInfos });
  } else {
    res.send({ isLogin: false });
  }

  // if (loginInfo.loginId == req.body.id && loginInfo.loginPw == req.body.pw) {
  //   res.send({ isLogin: true, userInfo: req.body });
  // } else {
  //   res.send({ isLogin: false });
  // }
};
