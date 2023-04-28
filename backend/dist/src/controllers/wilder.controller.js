"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSkill = exports.addSkill = exports.destroy = exports.update = exports.readOne = exports.read = exports.create = void 0;
const utils_1 = require("../utils");
const Wilder_1 = require("../entities/Wilder");
const Skill_1 = require("../entities/Skill");
const create = async (req, res) => {
    try {
        await utils_1.dataSource.getRepository(Wilder_1.Wilder).save(req.body);
        res.status(201).send("Wilder created");
    }
    catch (e) {
        console.error(e);
        res.status(500).send("Error while creating wilder");
    }
};
exports.create = create;
const read = async (req, res) => {
    try {
        const wilders = await utils_1.dataSource.getRepository(Wilder_1.Wilder).find();
        res.json(wilders);
    }
    catch (e) {
        console.error(e);
        res.status(500).send("Error while fetching wilders");
    }
};
exports.read = read;
const readOne = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        const wilder = await utils_1.dataSource.getRepository(Wilder_1.Wilder).findOne({
            where: {
                id: id,
            },
        });
        if (!wilder) {
            res.status(404).send("Wilder not found");
            return;
        }
        res.json(wilder);
    }
    catch (e) {
        console.error(e);
        res.status(500).send("Error while fetching wilder");
    }
};
exports.readOne = readOne;
const update = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        const updates = req.body;
        await utils_1.dataSource.getRepository(Wilder_1.Wilder).update(id, updates);
        res.status(200).send("Wilder updated");
    }
    catch (e) {
        console.error(e);
        res.status(500).send("Error while updating wilder");
    }
};
exports.update = update;
const destroy = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        await utils_1.dataSource.getRepository(Wilder_1.Wilder).delete(id);
        res.status(200).send("Wilder deleted");
    }
    catch (e) {
        console.error(e);
        res.status(500).send("Error while deleting wilder");
    }
};
exports.destroy = destroy;
const addSkill = async (req, res) => {
    try {
        const wilderToUpdate = await utils_1.dataSource
            .getRepository(Wilder_1.Wilder)
            .findOneBy({ name: req.body.wilderName });
        if (!wilderToUpdate) {
            res.status(404).send("Wilder not found");
            return;
        }
        console.log("wilder to update :", wilderToUpdate);
        const skillsToAdd = await utils_1.dataSource
            .getRepository(Skill_1.Skill)
            .createQueryBuilder("skill")
            .where("skill.name IN (:...skillNames)", {
            skillNames: req.body.skillName,
        })
            .getMany();
        console.log("skills to add :", skillsToAdd);
        if (!skillsToAdd.length) {
            throw new Error("Skills not found");
        }
        wilderToUpdate.skills = wilderToUpdate.skills || [];
        wilderToUpdate.skills = wilderToUpdate.skills.concat(skillsToAdd);
        await utils_1.dataSource.getRepository(Wilder_1.Wilder).save(wilderToUpdate);
        console.log("wilder updated :", wilderToUpdate);
        res.status(201).send("Skill added to wilder");
    }
    catch (e) {
        console.error(e);
        res.status(500).send("Error while adding skill to wilder");
    }
};
exports.addSkill = addSkill;
const updateSkill = async (req, res) => {
    try {
        const wilderToUpdate = await utils_1.dataSource
            .getRepository(Wilder_1.Wilder)
            .findOneBy({ name: req.body.wilderName });
        if (!wilderToUpdate) {
            res.status(404).send("Wilder not found");
            return;
        }
        console.log("wilder to update :", wilderToUpdate);
        const skillsToUpdate = await utils_1.dataSource
            .getRepository(Skill_1.Skill)
            .createQueryBuilder("skill")
            .where("skill.name IN (:...skillNames)", {
            skillNames: req.body.skillName,
        })
            .getMany();
        if (!skillsToUpdate.length) {
            throw new Error("Skills not found");
        }
        console.log("skills to update:", skillsToUpdate);
        wilderToUpdate.skills = skillsToUpdate;
        await utils_1.dataSource.getRepository(Wilder_1.Wilder).save(wilderToUpdate);
        console.log("wilder updated :", wilderToUpdate);
        res.status(200).send("Skills updated for wilder");
    }
    catch (e) {
        console.error(e);
        res.status(500).send("Error while updating skill from wilder");
    }
};
exports.updateSkill = updateSkill;
