const dataSource = require("../utils.js");

const Wilder = require("../entities/Wilder.js");
const Skill = require("../entities/Skill.js");

const create = async (req, res) => {
	try {
		await dataSource.getRepository(Wilder).save(req.body);

		res.status(201).send("Wilder created");
	} catch (e) {
		console.error(e);
		res.status(500).send("Error while creating wilder");
	}
};

const read = async (req, res) => {
	try {
		const wilders = await dataSource.getRepository(Wilder).find();

		res.json(wilders);
	} catch (e) {
		console.error(e);
		res.status(500).send("Error while fetching wilders");
	}
};

const update = async (req, res) => {
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

const destroy = async (req, res) => {
	try {
		const id = req.params.id;

		await dataSource.getRepository(Wilder).delete(id);

		res.status(200).send("Wilder deleted");
	} catch (e) {
		console.error(e);
		res.status(500).send("Error while deleting wilder");
	}
};

const addSkill = async (req, res) => {
	try {
		const wilderToUpdate = await dataSource
			.getRepository(Wilder)
			.findOneBy({ name: req.body.wilderName });

		if (!wilderToUpdate) {
			return res.status(404).send("Wilder not found");
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

const updateSkill = async (req, res) => {
	try {
		const wilderToUpdate = await dataSource
			.getRepository(Wilder)
			.findOneBy({ name: req.body.wilderName });

		if (!wilderToUpdate) {
			return res.status(404).send("Wilder not found");
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

module.exports = { create, read, update, destroy, addSkill, updateSkill };
