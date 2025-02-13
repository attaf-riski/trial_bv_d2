import 'reflect-metadata';
import express from 'express';
import { InversifyExpressServer } from 'inversify-express-utils';
import { errors } from 'celebrate';
import container from './config/inversify.config';
import { createProductValidator, updateProductValidator } from './validators/product.validator';
import { ProductController } from './controllers/product.controller';
import { TYPES } from './config/types';

const server = new InversifyExpressServer(container);

server.setConfig((app) => {
  app.use(express.json());
  
  const productController = container.get<ProductController>(TYPES.ProductController);
  
  app.post('/v1/products', createProductValidator, productController.createProduct.bind(productController));
  app.put('/v1/products/:id', updateProductValidator, productController.updateProduct.bind(productController));
  app.get('/v1/products', productController.getProducts.bind(productController));
  
  app.use(errors());
});

export default server.build();