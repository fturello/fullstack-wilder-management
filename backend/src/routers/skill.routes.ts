import express, { Request, Response } from "express";

import { create, read, update, destroy } from "../controllers/skill.controller";

const router = express.Router();

router.post("/", (req: Request, res: Response) => create(req, res));
router.get("/", (req: Request, res: Response) => read(req, res));
router.put("/:id", (req: Request, res: Response) => update(req, res));
router.delete("/:id", (req: Request, res: Response) => destroy(req, res));

export default router;
