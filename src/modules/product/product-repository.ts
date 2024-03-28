import { Api500Error } from "../../util/errors";

import products from "../../database/products.json";
import { Product } from "./entities/product.entity";

export default class ProductRepository {
  public list(): Product[] {
    try {
      const productsList: Product[] = products as Product[];
      return productsList;
    } catch (error: any) {
      throw new Api500Error(
        "Ocorreu um erro inesperado ao tentar recuperar os produtos.",
        error.stack
      );
    }
  }
}
