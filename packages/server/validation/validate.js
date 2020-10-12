const { isSchema } = require('yup');

const validate = schema => value => {
  if (isSchema(schema)) {
    return schema.validate(value);
  }
  return Promise.reject(new Error('Schema must be an "yup" schema.'));
};

module.exports = validate;
