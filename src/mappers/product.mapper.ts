import { injectable } from 'inversify';
import { IProduct } from '../types/product';
import 'automapper-ts';

@injectable()
export class ProductMapper {
  constructor() {
    automapper
      .createMap('Product', 'ProductDTO')
      .forMember('id', (opts: any) => opts.sourceObject.id)
      .forMember('title', (opts: any) => opts.sourceObject.title)
      .forMember('price', (opts: any) => opts.sourceObject.price)
      .forMember('description', (opts: any) => opts.sourceObject.description)
      .forMember('image', (opts: any) => opts.sourceObject.image)
      .forMember('category', (opts: any) => opts.sourceObject.category);
  }

  mapToDTO(product: IProduct): any {
    return automapper.map('Product', 'ProductDTO', product);
  }
}