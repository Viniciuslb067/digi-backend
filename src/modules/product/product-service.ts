import BaseError from "../../util/errors/base-error";
import ProductRepository from "./product-repository";

import { Product } from "./entities/product.entity";

export default class ProductService {
  private productRepository: ProductRepository;

  constructor() {
    this.productRepository = new ProductRepository();
  }

  public list(): Product[] {
    try {
      return this.productRepository.list();
    } catch (error: any) {
      throw new BaseError(error.name, error.statusCode);
    }
  }

  public findBySlug(slug: string): Product | undefined {
    try {
      const product = this.productRepository.findBySlug(slug);

      if (!product) {
        throw new BaseError("Product not found", 404);
      }

      return product;
    } catch (error: any) {
      throw new BaseError(error.name, error.statusCode);
    }
  }
}
