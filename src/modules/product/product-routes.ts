import express, { Router } from "express";

import ProductController from "./product-controller";

const router: Router = express.Router();

router.get("/", ProductController.list);
router.get("/:slug", ProductController.findBySlug);

export default router;
