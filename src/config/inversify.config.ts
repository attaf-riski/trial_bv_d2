import { Container } from 'inversify';
import { TYPES } from './types';
import { IProductService, IProductRepository } from '../types/product';
import { ProductService } from '../services/product.service';
import { ProductRepository } from '../repositories/product.repository';
import { ProductMapper } from '../mappers/product.mapper';
import { ProductController } from '../controllers/product.controller';

const container = new Container();

container.bind<IProductService>(TYPES.ProductService).to(ProductService);
container.bind<IProductRepository>(TYPES.ProductRepository).to(ProductRepository);
container.bind<ProductMapper>(TYPES.ProductMapper).to(ProductMapper);
container.bind<ProductController>(TYPES.ProductController).to(ProductController); // Add this line

export default container;