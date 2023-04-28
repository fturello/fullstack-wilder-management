"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const wilder_routes_1 = __importDefault(require("./wilder.routes"));
const skill_routes_1 = __importDefault(require("./skill.routes"));
const router = (0, express_1.Router)();
router.use("/wilder", wilder_routes_1.default);
router.use("/skill", skill_routes_1.default);
exports.default = router;
