import { injectable, inject } from 'inversify';
import { IProduct, IProductService, IProductRepository } from '../types/product';
import { TYPES } from '../config/types';

@injectable()
export class ProductService implements IProductService {
  constructor(
    @inject(TYPES.ProductRepository) private productRepository: IProductRepository
  ) {}

  async createProduct(product: IProduct): Promise<IProduct> {
    return this.productRepository.create(product);
  }

  async updateProduct(id: number, product: IProduct): Promise<IProduct> {
    return this.productRepository.update(id, product);
  }

  async getProducts(limit?: number, category?: string, sort?: string): Promise<IProduct[]> {
    return this.productRepository.findAll(limit, category, sort);
  }
}