"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = void 0;
const typeorm_1 = require("typeorm");
const Wilder_1 = require("../src/entities/Wilder");
const Skill_1 = require("../src/entities/Skill");
// create data source for SQLite database using TypeORM
exports.dataSource = new typeorm_1.DataSource({
    type: "sqlite",
    database: "./wildersdb.sqlite",
    synchronize: true,
    entities: [Wilder_1.Wilder, Skill_1.Skill],
});
