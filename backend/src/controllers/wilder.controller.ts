import { Request, Response } from "express";

import dataSource from "../utils";

import { Wilder } from "../entities/Wilder";
import { Skill } from "../entities/Skill";

export const create = async (req: Request, res: Response): Promise<void> => {
	try {
		await dataSource.getRepository(Wilder).save(req.body);

		res.status(201).send("Wilder created");
	} catch (e) {
		console.error(e);
		res.status(500).send("Error while creating wilder");
	}
};

export const read = async (req: Request, res: Response): Promise<void> => {
	try {
		const wilders = await dataSource.getRepository(Wilder).find();

		res.json(wilders);
	} catch (e) {
		console.error(e);
		res.status(500).send("Error while fetching wilders");
	}
};

export const update = async (req: Request, res: Response): Promise<void> => {
	try {
		const id = req.params.id;
		const updates = req.body;

		await dataSource.getRepository(Wilder).update(id, updates);

		res.status(200).send("Wilder updated");
	} catch (e) {
		console.error(e);
		res.status(500).send("Error while updating wilder");
	}
};

export const destroy = async (req: Request, res: Response): Promise<void> => {
	try {
		const id = req.params.id;

		await dataSource.getRepository(Wilder).delete(id);

		res.status(200).send("Wilder deleted");
	} catch (e) {
		console.error(e);
		res.status(500).send("Error while deleting wilder");
	}
};

export const addSkill = async (req: Request, res: Response): Promise<void> => {
	try {
		const wilderToUpdate = await dataSource
			.getRepository(Wilder)
			.findOneBy({ name: req.body.wilderName });

		if (!wilderToUpdate) {
			res.status(404).send("Wilder not found");
			return;
		}

		console.log("wilder to update :", wilderToUpdate);

		const skillsToAdd = await dataSource
			.getRepository(Skill)
			.createQueryBuilder("skill")
			.where("skill.name IN (:...skillNames)", {
				skillNames: req.body.skillName,
			})
			.getMany();

		if (!skillsToAdd.length) {
			throw new Error("Skills not found");
		}

		wilderToUpdate.skills = wilderToUpdate.skills.concat(skillsToAdd);
		await dataSource.getRepository(Wilder).save(wilderToUpdate);

		res.status(201).send("Skill added to wilder");
	} catch (e) {
		console.error(e);
		res.status(500).send("Error while adding skill to wilder");
	}
};

export const updateSkill = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const wilderToUpdate = await dataSource
			.getRepository(Wilder)
			.findOneBy({ name: req.body.wilderName });

		if (!wilderToUpdate) {
			res.status(404).send("Wilder not found");
			return;
		}

		console.log("wilder to update :", wilderToUpdate);

		const skillsToUpdate = await dataSource
			.getRepository(Skill)
			.createQueryBuilder("skill")
			.where("skill.name IN (:...skillNames)", {
				skillNames: req.body.skillName,
			})
			.getMany();

		if (!skillsToUpdate.length) {
			throw new Error("Skills not found");
		}

		wilderToUpdate.skills = skillsToUpdate;
		await dataSource.getRepository(Wilder).save(wilderToUpdate);

		res.status(200).send("Skills updated for wilder");
	} catch (e) {
		console.error(e);
		res.status(500).send("Error while updating skill from wilder");
	}
};
