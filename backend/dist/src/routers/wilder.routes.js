"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const wilder_controller_1 = require("../controllers/wilder.controller");
const router = express_1.default.Router();
router.post("/", (req, res) => (0, wilder_controller_1.create)(req, res));
router.get("/", (req, res) => (0, wilder_controller_1.read)(req, res));
router.get("/:id", (req, res) => (0, wilder_controller_1.readOne)(req, res));
router.put("/:id", (req, res) => (0, wilder_controller_1.update)(req, res));
router.delete("/:id", (req, res) => (0, wilder_controller_1.destroy)(req, res));
router.post("/add-skill", (req, res) => (0, wilder_controller_1.addSkill)(req, res));
router.post("/update-skill", (req, res) => (0, wilder_controller_1.updateSkill)(req, res));
exports.default = router;
