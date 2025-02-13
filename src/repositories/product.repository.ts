// src/repositories/product.repository.ts
import { injectable } from 'inversify';
import axios from 'axios';
import { IProduct, IProductRepository } from '../types/product';
import Product from '../models/product.model';

@injectable()
export class ProductRepository implements IProductRepository {
  async create(product: IProduct): Promise<IProduct> {
    const productData = {
      title: product.title,
      price: product.price,
      description: product.description,
      image: product.image,
      category: product.category
    };

    await Product.create(productData);
    const result = await axios.post('https://fakestoreapi.com/products', product);
    return result.data;
  }

  async update(id: number, product: IProduct): Promise<IProduct> {
    const productData = {
      title: product.title,
      price: product.price,
      description: product.description,
      image: product.image,
      category: product.category
    };

    const [_, updatedProducts] = await Product.update(productData, {
      where: { id },
      returning: true,
    });
    const result = await axios.put(`https://fakestoreapi.com/products/${id}`, product);
    return result.data;
  }

  async findAll(limit?: number, category?: string, sort?: string): Promise<IProduct[]> {
    const query: any = {};
    if (category) {
      query.where = { category };
    }
    if (limit) {
      query.limit = limit;
    }
    if (sort) {
      query.order = [['price', sort.toUpperCase()]];
    }
    const products = await Product.findAll(query);
    return products.map(p => p.toJSON());
  }
}