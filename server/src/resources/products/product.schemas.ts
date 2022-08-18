import Joi from "joi";

const scemas = {
  createProduct: Joi.object().keys({
    name: Joi.string().required(),
    price: Joi.number().required().min(0),
    description: Joi.string().optional(),
    stock: Joi.number().required().min(0),
  }),

  updateProduct: Joi.object().keys({
    id: Joi.number().required(),
    name: Joi.string().optional(),
    price: Joi.number().optional().min(0),
    description: Joi.string().optional(),
    stock: Joi.number().required().min(0),
  }),

  deleteProduct: Joi.object().keys({
    id: Joi.number().required(),
  }),
};

export default scemas;
