const { EntitySchema } = require("typeorm");

const entitySchema = new EntitySchema({
	name: "Skill",
	columns: {
		id: {
			primary: true,
			type: "int",
			generated: true,
		},
		name: {
			type: "text",
			unique: true,
		},
	},
});

module.exports = entitySchema;
