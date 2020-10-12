const createHttpError = require('http-errors');
const { Todo } = require('./../models');

exports.createTodo = async (req, res, next) => {
  const { body } = req;
  try {
    const newTodoInstance = await Todo.create(body);
    if (newTodoInstance) {
      return res.status(201).send({
        data: newTodoInstance,
      });
    }
    next(createHttpError(400));
  } catch (err) {
    next(err);
  }
};

exports.getTodos = async (req, res, next) => {
  const {
    pagination: { results, page },
  } = req;
  try {
    const todos = await Todo.findAll({
      limit: results,
      offset: results * (page - 1),
    });

    res.send({ data: todos });
  } catch (err) {
    next(err);
  }
};

exports.getTodoById = async (req, res, next) => {
  const {
    params: { todoId },
  } = req;
  try {
    const todoInstance = await Todo.findByPk(todoId);
    if (todoInstance) {
      return res.send({
        data: todoInstance,
      });
    }
    next(createHttpError(404));
  } catch (err) {
    next(err);
  }
};

exports.updateTodoById = async (req, res, next) => {
  const {
    params: { todoId },
    body,
  } = req;
  try {
    const [numberOfAffectedRows, [updatedTodo]] = await Todo.update(body, {
      where: {
        id: todoId,
      },
      returning: true,
    });
    if (numberOfAffectedRows) {
      return res.send({
        data: updatedTodo,
      });
    }
    next(createHttpError(404));
  } catch (err) {
    next(err);
  }
};

exports.deleteTotoById = async (req, res, next) => {
  const {
    params: { todoId },
  } = req;
  try {
    const numberOfDestroyedRows = await Todo.destroy({
      where: {
        id: todoId,
      },
    });
    if (numberOfDestroyedRows) {
      return res.status(204).send({
        data: null,
      });
    }
    next(createHttpError(404));
  } catch (err) {
    next(err);
  }
};
