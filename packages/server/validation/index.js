const yup = require('yup');

exports.validate = require('./validate');

exports.paginationSchema = yup.object({
  results: yup.number().integer().positive(),
  page: yup.number().integer().positive(),
});
