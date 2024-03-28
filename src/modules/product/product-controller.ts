import { Request, Response } from "express";

import {
  returnErrorResponse,
  returnSuccessResponse,
} from "../../util/http-response";
import ProductService from "./product-service";

class ProductController {
  private productService: ProductService;

  constructor() {
    this.productService = new ProductService();
    this.list = this.list.bind(this);
  }

  public async list(_: Request, response: Response) {
    try {
      const products = this.productService.list();
      returnSuccessResponse({ response, data: products });
    } catch (error: any) {
      returnErrorResponse({ response, error });
    }
  }
}

export default new ProductController();
