const User = require("../model/User");

exports.main = (req, res) => {
  res.render("index");
};

// exports.login = (req, res) => {
//   console.log(req.body);
//   console.log(req.body.id);
// 선택 실습 방법
//   const users = User.users.split("\n");
//   let flag = false;
//   let userInfos;
//   for (let i = 0; i < users.length; i++) {
//     if (
//       users[i].split("//")[0] == req.body.id &&
//       users[i].split("//")[1] == req.body.pw
//     ) {
//       flag = true;
//       userInfos = users[i].split("//")[2];
//       break;
//     } else {
//       flag = false;
//     }
//   }
//   console.log(userInfos);
//   if (flag) {
//     res.send({ isLogin: true, userInfo: req.body, userName: userInfos });
//   } else {
//     res.send({ isLogin: false });
//   }
// 첫번째 실습 방법
// const loginInfo = User.postUesr();
//   // if (loginInfo.loginId == req.body.id && loginInfo.loginPw == req.body.pw) {
//   //   res.send({ isLogin: true, userInfo: req.body });
//   // } else {
//   //   res.send({ isLogin: false });
//   // }
// };

// 첫번째 풀이
// exports.login = (req, res) => {
//   const userData = User.postUesr();
//   console.log(req.body);
//   console.log(userData.loginId);
//   if (userData.loginId === req.body.id && userData.loginPw === req.body.pw) {
//     res.send({ isLogin: true, userInfo: req.body });
//   } else {
//     res.send({ isLogin: false });
//   }
// };

// 선택 실습 풀이(temp/index.js 로직 참고)
exports.login = (req, res) => {
  const userDatas = User.users.split("\n");
  console.log(userDatas);

  const users = []; // 유저 정보 배열
  const userIds = []; // 유저 아이디만 저장 배열

  for (let user of userDatas) {
    console.log(user);
    // apple//1234//사과사과
    // banana//4321//바나나나나
    // happy//qwer1234//해피해피

    users.push({
      realId: user.split("//")[0], // apple -> banana -> happy
      realPw: user.split("//")[1], // 1234 -> 4321 -> qwer1234
      name: user.split("//")[2], // 사과사과 -> 바나나나나 -> 해피해피
    });
    userIds.push(user.split("//")[0]); // apple -> banana -> happy
  }
  console.log(users);
  console.log(userIds);

  // 사용자가 폼에 입력한 값 vs. 정답 배열이랑 비교하는 로직
  // 사용자가 폼에 입력한 아이디: req.body.id
  const idx = userIds.indexOf(req.body.id);
  if (idx >= 0) {
    // 아이디 있음
    console.log(users[idx]);
    // { realId: 'apple', realPw: '1234', name: '사과사과' }
    if (users[idx].realPw === req.body.pw) {
      res.send({ isLogin: true, userInfo: users[idx] });
    } else {
      res.send({ isSuccess: false });
    }
  } else {
    // 아이디 없음
    console.log("아이디 없음");
    res.send({ isSuccess: false });
  }
};
