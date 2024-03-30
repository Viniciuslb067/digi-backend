import { Request, Response } from "express";

import PurchaseService from "./purchase-service";

import {
  returnErrorResponse,
  returnSuccessResponse,
} from "../../util/http-response";

class PurchaseController {
  private purchaseService: PurchaseService;

  constructor() {
    this.purchaseService = new PurchaseService();
    this.add = this.add.bind(this);
    this.list = this.list.bind(this);
  }

  public list(_: Request, response: Response) {
    try {
      const products = this.purchaseService.list();

      returnSuccessResponse({ response, data: products });
    } catch (error: any) {
      returnErrorResponse({ response, error });
    }
  }

  public add(request: Request, response: Response) {
    try {
      const purchase = request.body;
      const newPurchase = this.purchaseService.add(purchase);

      returnSuccessResponse({ response, data: newPurchase });
    } catch (error: any) {
      returnErrorResponse({ response, error });
    }
  }
}

export default new PurchaseController();
