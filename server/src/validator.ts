import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const validator = (schema: Joi.ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const error = validateBySchema(schema, req.body);
    const valid = error == null;
    if (valid) {
      next();
    } else {
      const { details } = error;
      const message = details.map((i) => i.message).join(",");

      console.log("error", message);
      res.status(422).json({ error: message });
    }
  };
};

function validateBySchema(schema: Joi.ObjectSchema, object: any) {
  const { error } = schema.validate(object);
  return error;
}

const schem = Joi.object().keys({
  name: Joi.string().required(),
  price: Joi.number().required(),
});

export default validator;
