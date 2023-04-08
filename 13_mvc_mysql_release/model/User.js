// TODO: DB(mysql) 연결
// TODO: 모델 코드

const mysql = require("mysql");

const conn = mysql.createConnection({
  hose: "localhost",
  user: "user",
  password: "1234",
  database: "codingon",
});

exports.postSignup = (data, callback) => {
  console.log(data);
  const sql = `INSERT INTO user (userid, name, pw) VALUES ('${data.userId}', '${data.nickname}', '${data.pw}');`;

  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }

    callback();
  });
};

exports.postSignin = (data, callback) => {
  console.log(data);
  const sql = `select * from user where userid=${data.userId} AND pw=${data.pw}`;

  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    callback(rows);
  });
};

exports.postProfile = (data, callback) => {
  console.log(data);
  const sql = `select * from user where userid=${data.userid} LIMIT 1`;

  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    callback(rows);
  });
};

exports.profileEdit = (data, callback) => {
  console.log(data);
  const sql = `UPDATE user SET userid='${data.userid}', name='${data.name}', pw='${data.pw}' WHERE id='${data.id}' `;

  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    callback(true);
  });
};

exports.profileDelete = (data, callback) => {
  console.log(data);
  const sql = `delete from user WHERE id='${data.id}' `;

  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    callback(true);
  });
};
