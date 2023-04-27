import { Request, Response } from "express";

import { dataSource } from "../utils";

import { Skill } from "../entities/Skill";

export const create = async (req: Request, res: Response): Promise<void> => {
	try {
		await dataSource.getRepository(Skill).save(req.body);

		res.status(201).send("Skill created");
	} catch (e) {
		console.error(e);
		res.status(500).send("Error while creating skill");
	}
};

export const read = async (req: Request, res: Response): Promise<void> => {
	try {
		const skills = await dataSource.getRepository(Skill).find();

		res.json(skills);
	} catch (e) {
		console.error(e);
		res.status(500).send("Error while fetching skills");
	}
};

export const update = async (req: Request, res: Response): Promise<void> => {
	try {
		const id = req.params.id;
		const update = req.body;

		await dataSource.getRepository(Skill).update(id, update);

		res.status(200).send("Skill updated");
	} catch (e) {
		console.error(e);
		res.status(500).send("Error while updating skill");
	}
};

export const destroy = async (req: Request, res: Response): Promise<void> => {
	try {
		const id = req.params.id;

		await dataSource.getRepository(Skill).delete(id);

		res.status(200).send("Skill deleted");
	} catch (e) {
		console.error(e);
		res.status(500).send("Error while deleting skill");
	}
};
