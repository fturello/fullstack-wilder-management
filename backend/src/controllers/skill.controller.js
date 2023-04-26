const dataSource = require("../utils.js");

const Skill = require("../entities/Skill.js");

const create = async (req, res) => {
	try {
		await dataSource.getRepository(Skill).save(req.body);

		res.status(201).send("Skill created");
	} catch (e) {
		console.error(e);
		res.status(500).send("Error while creating skill");
	}
};

const read = async (req, res) => {
	try {
		const skills = await dataSource.getRepository(Skill).find();

		res.json(skills);
	} catch (e) {
		console.error(e);
		res.status(500).send("Error while fetching skills");
	}
};

const update = async (req, res) => {
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

const destroy = async (req, res) => {
	try {
		const id = req.params.id;

		await dataSource.getRepository(Skill).delete(id);

		res.status(200).send("Skill deleted");
	} catch (e) {
		console.error(e);
		res.status(500).send("Error while deleting skill");
	}
};

module.exports = { create, read, update, destroy };
