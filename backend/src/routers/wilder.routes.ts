import express, { Request, Response } from "express";

import {
	create,
	read,
	readOne,
	update,
	destroy,
	addSkill,
	updateSkill,
} from "../controllers/wilder.controller";

const router = express.Router();

router.post("/", (req: Request, res: Response) => create(req, res));
router.get("/", (req: Request, res: Response) => read(req, res));
router.get("/:id", (req: Request, res: Response) => readOne(req, res));
router.put("/:id", (req: Request, res: Response) => update(req, res));
router.delete("/:id", (req: Request, res: Response) => destroy(req, res));
router.post("/add-skill", (req: Request, res: Response) => addSkill(req, res));
router.post("/update-skill", (req: Request, res: Response) =>
	updateSkill(req, res)
);

export default router;
