import Joi from "joi";
import { ProductTag } from "./types";

const scemas = {
  createProduct: Joi.object().keys({
    name: Joi.string().required(),
    price: Joi.number().required().min(0),
    description: Joi.string().optional(),
    tags: Joi.array()
      .items(
        Joi.string().regex(
          /^(Fruit|Vegetable|Meat|Fish|Dairy|Frozen|Fresh|Organic)$/
        )
      )
      .optional(),
  }),

  updateProduct: Joi.object().keys({
    id: Joi.number().required(),
    name: Joi.string().optional(),
    price: Joi.number().optional().min(0),
    description: Joi.string().optional(),
    tags: Joi.array()
      .items(
        Joi.string().regex(
          /^(Fruit|Vegetable|Meat|Fish|Dairy|Frozen|Fresh|Organic)$/
        )
      )
      .optional(),
  }),

  deleteProduct: Joi.object().keys({
    id: Joi.number().required(),
  }),
};

export default scemas;
