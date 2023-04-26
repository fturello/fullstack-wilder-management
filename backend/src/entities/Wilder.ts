import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";

import { Skill } from "./Skill";

@Entity()
export class Wilder {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	email: string;

	@ManyToMany(() => Skill)
	skills: Skill[];
}
