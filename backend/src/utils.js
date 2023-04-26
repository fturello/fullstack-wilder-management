const typeorm = require("typeorm");

// create data source for SQLite database using TypeORM

const dataSource = new typeorm.DataSource({
	type: "sqlite",
	database: "./wildersdb.sqlite",
	synchronize: true,
	entities: [require("./entities/Wilder"), require("./entities/Skill")],
});

module.exports = dataSource;
