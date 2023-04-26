const { EntitySchema } = require("typeorm");

const Skill = require("./Skill");

// create entity schema for Wilder entity

const entitySchema = new EntitySchema({
	name: "Wilder",
	columns: {
		id: {
			primary: true,
			type: "int",
			generated: true,
		},
		name: {
			type: "text",
		},
		email: {
			type: "text",
		},
	},
	relations: {
		skills: {
			type: "many-to-many",
			target: Skill, // The entity object or name of the entity to be used as the many-to-many target
			joinTable: {
				name: "wilders_skills", // The table name for the join table
				joinColumn: {
					name: "wilder_id",
				},
				inverseJoinColumn: {
					name: "skill_id",
				},
			},
			eager: true,
		},
	},
});

module.exports = entitySchema;
