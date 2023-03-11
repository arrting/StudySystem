const Joi = require("joi");

//註冊資料驗證
const registerValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(2).max(50).required(),
    email: Joi.string().min(5).max(100).required(),
    password: Joi.string().min(5).max(255).required(),
    role: Joi.string().required().valid("學生", "教師"),
  });

  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(5).max(100).required(),
    password: Joi.string().min(5).max(255).required(),
  });
  return schema.validate(data);
};

const courseValidation = (data) => {
  const schema = Joi.object({
    title: Joi.string().min(5).max(50).required(),
    description: Joi.string().min(5).max(100).required(),
    price: Joi.number().min(10).max(10000).required(),
  });
  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.courseValidation = courseValidation;
