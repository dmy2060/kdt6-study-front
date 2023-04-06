const Visitor = require("../model/Visitor");

exports.main = (req, res) => {
  res.render("index");
};

exports.getVisitors = (req, res) => {
  // [before]
  // console.log(Visitor.getVisitors());
  // res.render("visitor", { data: Visitor.getVisitors() });

  // [after] mysql db 연결!
  // callback(rows) 콜백함수에서 던져준게 result
  Visitor.getVisitors((result) => {
    console.log("Cvisitor.js >>", result);
    // => [ {}, {}, {} ]
    res.render("visitor", { data: result });
  });
};

// (3) POST /visitor/wirte
exports.postVisitor = (req, res) => {
  console.log(req.body);

  // 첫번째 인자에는 정보 보내주고, 두번째 인자는 보내주고 난 응답 다시 받아서 처리할 콜백 함수
  Visitor.postVisitor(req.body, (result) => {
    console.log("Cvisitor.js >>", result); // model 코드에서 데이터를 추가한 결과 rows.inserId
    res.send({ id: result, name: req.body.name, comment: req.body.comment });
  });
};
