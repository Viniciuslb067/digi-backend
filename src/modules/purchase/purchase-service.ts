import BaseError from "../../util/errors/base-error";
import { Purchase } from "./entities/purchase.entity";
import PurchaseRepository from "./purchase-repository";

export default class PurchaseService {
  private purchaseRepository: PurchaseRepository;

  constructor() {
    this.purchaseRepository = new PurchaseRepository();
  }

  public list() {
    try {
      return this.purchaseRepository.list();
    } catch (error: any) {
      throw new BaseError(error.name, error.statusCode);
    }
  }

  public add(purchase: Purchase) {
    try {
      const existingPurchases = this.purchaseRepository.list();

      const lastId = existingPurchases.reduce(
        (maxId, item) => Math.max(item.id || 0, maxId),
        0
      );

      const newPurchase = {
        ...purchase,
        id: lastId + 1,
        createdAt: new Date().toISOString(),
      };

      return this.purchaseRepository.add(newPurchase);
    } catch (error: any) {
      throw new BaseError(error.name, error.statusCode);
    }
  }
}
