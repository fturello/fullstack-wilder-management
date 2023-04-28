"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const skill_controller_1 = require("../controllers/skill.controller");
const router = express_1.default.Router();
router.post("/", (req, res) => (0, skill_controller_1.create)(req, res));
router.get("/", (req, res) => (0, skill_controller_1.read)(req, res));
router.put("/:id", (req, res) => (0, skill_controller_1.update)(req, res));
router.delete("/:id", (req, res) => (0, skill_controller_1.destroy)(req, res));
exports.default = router;
