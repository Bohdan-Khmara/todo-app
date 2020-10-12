const router = require('express').Router();
const todosRouter = require('./routes/todos');

router.use('/todos', todosRouter);

module.exports = router;
