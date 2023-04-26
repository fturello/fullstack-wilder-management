import { DataSource, EntitySchema } from "typeorm";
import { Wilder } from "./entities/Wilder";
import { Skill } from "./entities/Skill";

// create data source for SQLite database using TypeORM
const dataSource = new DataSource({
	type: "sqlite",
	database: "./wildersdb.sqlite",
	synchronize: true,
	entities: [Wilder, Skill] as EntitySchema[],
});

export default dataSource;
