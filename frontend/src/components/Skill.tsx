import { SkillProps } from "../interfaces.ts";

const Skill = ({ name }: SkillProps): JSX.Element => {
	return <li>{name}</li>;
};

export default Skill;
