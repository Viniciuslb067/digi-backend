import express, { Router } from "express";

import PurchaseController from "./purchase-controller";

const router: Router = express.Router();

router.get("/", PurchaseController.list);
router.post("/", PurchaseController.add);

export default router;
