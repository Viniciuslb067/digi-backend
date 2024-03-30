import { Product } from "../../product/entities/product.entity";

export type Purchase = {
  id: number;
  total: number;
  createdAt: string;
  products: Product[];
};
