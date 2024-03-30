import { Router } from "express";

const router = Router();

import { returnSuccessResponse } from "../util/http-response";

import productRoutes from "../modules/product/product-routes";
import purchasesRoutes from "../modules/purchase/purchase-routes";

router.get("/", (_, response) =>
  returnSuccessResponse({ response, message: "OK!" })
);

router.use("/products", productRoutes);
router.use("/purchases", purchasesRoutes);

export default router;
