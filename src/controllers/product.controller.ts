import { injectable, inject } from 'inversify';
import { Request, Response } from 'express';
import { IProductService } from '../types/product';
import { ProductMapper } from '../mappers/product.mapper';
import { TYPES } from '../config/types';
import { controller, httpPost, httpPut, httpGet } from 'inversify-express-utils';
import { createProductValidator, updateProductValidator } from '../validators/product.validator';

@controller('/v1/products')
export class ProductController {
  constructor(
    @inject(TYPES.ProductService) private productService: IProductService,
    @inject(TYPES.ProductMapper) private productMapper: ProductMapper
  ) { }

  @httpPost('/', createProductValidator)
  async createProduct(req: Request, res: Response): Promise<void> {
    try {
      const product = await this.productService.createProduct(req.body);
      const mappedProduct = this.productMapper.mapToDTO(product);
      res.status(201).json({
        status: 'success',
        message: 'Product created successfully',
        data: mappedProduct
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({
          status: 'error',
          message: error.message,
          data: null
        });
      } else {
        res.status(500).json({
          status: 'error',
          message: 'An unknown error occurred',
          data: null
        });
      }
    }
  }

  @httpPut('/:id', updateProductValidator)
  async updateProduct(req: Request, res: Response): Promise<void> {
    try {
      const product = await this.productService.updateProduct(
        parseInt(req.params.id),
        req.body
      );
      const mappedProduct = this.productMapper.mapToDTO(product);
      res.status(200).json({
        status: 'success',
        message: 'Product updated successfully',
        data: mappedProduct
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({
          status: 'error',
          message: error.message,
          data: null
        });
      } else {
        res.status(500).json({
          status: 'error',
          message: 'An unknown error occurred',
          data: null
        });
      }
    }
  }

  @httpGet('/')
  async getProducts(req: Request, res: Response): Promise<void> {
    try {
      const { limit, category, sort } = req.query;
      const products = await this.productService.getProducts(
        limit ? parseInt(limit as string) : undefined,
        category as string,
        sort as string
      );
      const mappedProducts = products.map(p => this.productMapper.mapToDTO(p));
      res.status(201).json({
        status: 'success',
        data: mappedProducts
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({
          status: 'error',
          message: error.message,
          data: null
        });
      } else {
        res.status(500).json({
          status: 'error',
          message: 'An unknown error occurred',
          data: null
        });
      }
    }
  }
}