const Joi = require('joi');

const salesDTO = Joi.object({
  productId: Joi.number().required(),
  quantity: Joi.number().required().min(1),
});

const validateSales = (s) => {
  if (s.length > 0) {
    s.forEach((sales) => {
      const { error } = salesDTO.validate(sales, { abortEarly: false });
      if (error) throw error;
    });
  } else {
    throw new Error('"productId" is required"');
  }
};

const validateSalesMiddleware = (req, res, next) => {
  const stringsErros = ['"productId" is required', '"quantity" is required'];
  try {
    if (req.body) {
      validateSales(req.body);
      next();
    }
  } catch (err) {
    if (stringsErros.includes(err.message)) {
      return res.status(400).json({ message: err.message });
    }
      if (err.message === '"quantity" must be greater than or equal to 1') {
      return res.status(422).json({ message: err.message });
      }
    return res.status(500).json({ message: err.message });
  }
};

module.exports = validateSalesMiddleware;