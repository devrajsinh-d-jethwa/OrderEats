import express from "express"
import { addToCart,removeFromCart,getFromCart } from "../controllers/cartController.js"
import authMiddleware from "../middleware/auth.js";

const cartRouter = express.Router();

cartRouter.post("/add",authMiddleware,addToCart);
cartRouter.post("/remove",authMiddleware,removeFromCart);
cartRouter.get("/get",authMiddleware,getFromCart);

export default cartRouter;