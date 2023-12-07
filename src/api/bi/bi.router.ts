import express from "express";
import biController from "./bi.controller";
const router = express.Router();


router.get("/",  biController.handelBi);
router.get("/completedOrders",  biController.handelGetOrdersPlacedPerDate);
router.get("/profitsAndRevenue",  biController.handelGetProfitsPerDate);
router.get("/topProducts",  biController.handelGetTopProfitableProducts);


export default router;