const express = require('express');
const TodoController = require('../controllers/todo');
const reducePagination = require('../middlewares/reducePagination');
/*
const upload = require('../middlewares/uploadImages');
const uploadImages = upload.array('images', 10);
*/
const router = express.Router();

router
  .route('/')
  .post(TodoController.createTodo)
  .get(reducePagination, TodoController.getTodos);

router
  .route('/:todoId')
  .get(TodoController.getTodoById)
  .patch(TodoController.updateTodoById)
  .delete(TodoController.deleteTotoById);

module.exports = router;
