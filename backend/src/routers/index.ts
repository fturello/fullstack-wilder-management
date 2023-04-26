import express from "express";
import wilderRoutes from "./wilder.routes";
import skillRoutes from "./skill.routes";

const router = express.Router();

router.use("/wilder", wilderRoutes);
router.use("/skill", skillRoutes);

export default router;
