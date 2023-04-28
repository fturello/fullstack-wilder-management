export interface SkillFromAPI {
	id: number;
	name: string;
}

export interface WilderFromAPI {
	id: number;
	name: string;
	email: string;
	skills: SkillFromAPI[];
}

export interface SkillProps {
	id: number;
	name: string;
}

export interface WilderProps {
	id: number;
	name: string;
	skills: SkillProps[];
}

export interface WilderData {
	name: string;
	email: string;
}

export interface Wilder {
	id: number;
	name: string;
}

export interface Skill {
	id: number;
	name: string;
}

export interface UpdateSkill {
	wilderName: string;
	skillName: Array<string>;
}

export interface UpdateProp {
	update: () => void;
}
