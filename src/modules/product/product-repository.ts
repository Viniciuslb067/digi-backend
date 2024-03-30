import { Api500Error } from "../../util/errors";

import products from "../../database/products.json";
import { Product } from "./entities/product.entity";
import { generateSlug } from "../../util";

export default class ProductRepository {
  public list(): Product[] {
    try {
      const productsList: Product[] = products.map((product) => ({
        ...product,
        slug: generateSlug(product.name),
      })) as Product[];

      return productsList;
    } catch (error: any) {
      throw new Api500Error(
        "Ocorreu um erro inesperado ao tentar recuperar os produtos.",
        error.stack
      );
    }
  }

  public findBySlug(slug: string): Partial<Product> {
    try {
      const product = products.find(
        (product) => generateSlug(product.name) === slug
      );

      return {
        ...product,
        slug: generateSlug(product?.name || ""),
      };
    } catch (error: any) {
      throw new Api500Error(
        "Ocorreu um erro inesperado ao tentar recuperar o produto.",
        error.stack
      );
    }
  }
}
