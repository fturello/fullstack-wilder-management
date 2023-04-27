import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	ManyToMany,
	JoinTable,
} from "typeorm";

import { Skill } from "./Skill";

@Entity()
export class Wilder {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column({ unique: true })
	email: string;

	@ManyToMany(() => Skill, { eager: true }) // eager allows to get the skills automatically when getting a wilder
	@JoinTable()
	skills: Skill[];
}
