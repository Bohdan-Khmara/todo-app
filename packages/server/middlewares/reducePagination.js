const _ = require('lodash');
const { validate, paginationSchema } = require('../validation');

const reducePagination = async (req, res, next) => {
  const { query } = req;

  const pagination = {
    page: 1,
    results: 40,
    ..._.pick(query, ['page', 'results']),
  };

  try {
    req.pagination = await validate(paginationSchema)(pagination);
    return next();
  } catch (err) {
    next(err);
  }
};

module.exports = reducePagination;
