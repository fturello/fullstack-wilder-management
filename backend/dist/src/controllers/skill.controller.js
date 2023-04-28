"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroy = exports.update = exports.read = exports.create = void 0;
const utils_1 = require("../utils");
const Skill_1 = require("../entities/Skill");
const create = async (req, res) => {
    try {
        await utils_1.dataSource.getRepository(Skill_1.Skill).save(req.body);
        res.status(201).send("Skill created");
    }
    catch (e) {
        console.error(e);
        res.status(500).send("Error while creating skill");
    }
};
exports.create = create;
const read = async (req, res) => {
    try {
        const skills = await utils_1.dataSource.getRepository(Skill_1.Skill).find();
        res.json(skills);
    }
    catch (e) {
        console.error(e);
        res.status(500).send("Error while fetching skills");
    }
};
exports.read = read;
const update = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        const update = req.body;
        await utils_1.dataSource.getRepository(Skill_1.Skill).update(id, update);
        res.status(200).send("Skill updated");
    }
    catch (e) {
        console.error(e);
        res.status(500).send("Error while updating skill");
    }
};
exports.update = update;
const destroy = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        await utils_1.dataSource.getRepository(Skill_1.Skill).delete(id);
        res.status(200).send("Skill deleted");
    }
    catch (e) {
        console.error(e);
        res.status(500).send("Error while deleting skill");
    }
};
exports.destroy = destroy;
