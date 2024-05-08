import { Router } from "express";
import getController from "./controllers/get.js";
import postController from "./controllers/post.js";
import deleteController from "./controllers/delete.js";
import UpdateController from "./controllers/update.js";
const router = Router();
router.get("/" ,  getController)
router.post("/" ,  postController)
router.delete("/:id" , deleteController)
router.put("/:id" , UpdateController)

export default router
