import { DataSource } from "typeorm";
import { Wilder } from "../src/entities/Wilder";
import { Skill } from "../src/entities/Skill";

// create data source for SQLite database using TypeORM
export const dataSource = new DataSource({
	type: "sqlite",
	database: "./wildersdb.sqlite",
	synchronize: true,
	entities: [Wilder, Skill],
});
