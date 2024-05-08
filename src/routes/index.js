import { Router } from "express";
import userRoutes from "../modules/users/routes.js";
import productRoutes from "../modules/products/routes.js";
import uploadRoutes from "../modules/upload/routes.js";
const router = Router();



router.use("/user" , userRoutes);
router.use("/products" , productRoutes);
router.use("/upload" , uploadRoutes);

export default router;