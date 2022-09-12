const Joi = require('joi');

const productDTO = Joi.object({
  name: Joi.string().min(5).required(),
});

const validateProductMiddleware = (req, res, next) => {
  const { error } = productDTO.validate(req.body, { abortEarly: false });
  if (error) {
    if (error.message === '"name" is required') {
      return res.status(400).json({ message: error.message });
    }
    return res.status(422).json({ message: error.message });
  }
  next();
};

module.exports = validateProductMiddleware;