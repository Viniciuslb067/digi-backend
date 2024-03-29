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
    this.findBySlug = this.findBySlug.bind(this);
  }

  public async list(_: Request, response: Response) {
    try {
      const products = this.productService.list();

      returnSuccessResponse({ response, data: products });
    } catch (error: any) {
      returnErrorResponse({ response, error });
    }
  }

  public async findBySlug(request: Request, response: Response) {
    try {
      const { slug } = request.params;
      const product = this.productService.findBySlug(slug);

      returnSuccessResponse({ response, data: product });
    } catch (error: any) {
      returnErrorResponse({ response, error });
    }
  }
}

export default new ProductController();
