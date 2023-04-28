export interface ISkillProps {
	id: number;
	name: string;
}

const Skill = ({ name }: ISkillProps) => {
	return <li>{name}</li>;
};

export default Skill;
