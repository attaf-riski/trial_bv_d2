import { celebrate, Joi, Segments } from 'celebrate';
import { RequestHandler } from 'express';

const categories = ['electronics', 'jewelry', 'men\'s clothing', 'women\'s clothing'];

export const createProductValidator: RequestHandler = celebrate({
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string().required(),
    image: Joi.string().uri().required(),
    category: Joi.string().valid(...categories).required(),
  }),
});

export const updateProductValidator: RequestHandler = celebrate({
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string().required(),
    image: Joi.string().uri().required(),
    category: Joi.string().valid(...categories).required(),
  }),
});