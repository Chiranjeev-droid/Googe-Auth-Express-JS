import express from "express";
import { placeOrder } from "../controllers/order.js";
import { isAuthenticated } from "../middlewares/auth.js";
const router = express.Router();

router.post("/createorder", isAuthenticated, placeOrder);
export default router;
