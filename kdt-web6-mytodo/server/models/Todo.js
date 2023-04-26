// const { Sequelize } = require(".");

// const { DataTypes } = require("sequelize");

const Todo = (Sequelize, DataTypes) => {
  const model = Sequelize.define(
    "todo",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      done: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: "0",
      },
    },
    {
      tableName: "todo",
      freezeTableName: true,
      // 데이터 수정하고 변환할때 시간 저장하는 셀을 추가해주는 옵션
      // 여기서는 딱히 필요하지 않아서 false로 지정
      timestamps: false,
    }
  );
  return model;
};

module.exports = Todo;
