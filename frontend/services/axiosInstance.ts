import axios, { AxiosResponse } from "axios";

interface Skill {
	id: number;
	name: string;
}

interface Wilder {
	id: number;
	name: string;
	email: string;
	skills: Skill[];
}

export const wilderApi = axios.create({
	baseURL: `${import.meta.env.VITE_BACKEND_URL}/api/wilder`,
});

export const skillApi = axios.create({
	baseURL: `${import.meta.env.VITE_BACKEND_URL}/api/skill`,
});

export type WilderResponse = AxiosResponse<Wilder>;
export type SkillResponse = AxiosResponse<Skill>;
