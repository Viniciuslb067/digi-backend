import fs from "fs";
import path from "path";
import { Api500Error } from "../../util/errors";
import { Purchase } from "./entities/purchase.entity";

const PURCHASES_PATH = path.join(__dirname, "../../database/purchases.json");

export default class PurchaseRepository {
  public list(): Purchase[] {
    try {
      if (!fs.existsSync(PURCHASES_PATH)) {
        fs.writeFileSync(PURCHASES_PATH, JSON.stringify([]), "utf8");
        return [];
      }

      const purchasesData = fs.readFileSync(PURCHASES_PATH, "utf8");
      const purchases: Purchase[] = JSON.parse(purchasesData);

      return purchases;
    } catch (error: any) {
      throw new Api500Error(
        "Ocorreu um erro inesperado ao tentar recuperar as compras.",
        error.stack
      );
    }
  }

  public add(purchase: Purchase): void {
    try {
      if (!fs.existsSync(PURCHASES_PATH)) {
        fs.writeFileSync(PURCHASES_PATH, JSON.stringify([]), "utf8");
      }

      const purchases = this.list();

      const updatedPurchases = [...purchases, purchase];
      fs.writeFileSync(
        PURCHASES_PATH,
        JSON.stringify(updatedPurchases, null, 2),
        "utf8"
      );
    } catch (error: any) {
      throw new Api500Error(
        "Ocorreu um erro inesperado ao tentar adicionar a compra.",
        error.stack
      );
    }
  }
}
