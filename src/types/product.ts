export interface IProduct {
    id?: number;
    title: string;
    price: number;
    description: string;
    image: string;
    category: string;
}


export interface IProductRepository {
    create(product: IProduct): Promise<IProduct>;
    update(id: number, product: IProduct): Promise<IProduct>;
    findAll(limit?: number, category?: string, sort?: string): Promise<IProduct[]>;
}


export interface IProductService {
    createProduct(product: IProduct): Promise<IProduct>;
    updateProduct(id: number, product: IProduct): Promise<IProduct>;
    getProducts(limit?: number, category?: string, sort?: string): Promise<IProduct[]>;
}