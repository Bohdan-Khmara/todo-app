'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Todo.init(
    {
      text: {
        allowNull: false,
        type: DataTypes.TEXT,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      isCompleted: {
        field: 'is_completed',
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      deadline: {
        allowNull: false,
        type: DataTypes.DATE,
        validate: {
          notNull: true,
          isDate: true,
        },
      },
    },
    {
      sequelize,
      modelName: 'Todo',
      underscored: true,
      tableName: 'todos',
    }
  );
  return Todo;
};
