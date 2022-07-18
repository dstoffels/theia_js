import Attributes from '../attributes/attributes.js';
import Stats from '../stats.js';
import Skill from './skill.js';
import SKILLS from './skillData.js';

class Skills extends Stats {
	constructor(attributes) {
		super();

		SKILLS.forEach(skill => {
			const name = skill[0];
			const pri = attributes[skill[1].toLowerCase()];
			const sec = attributes[skill[2].toLowerCase()];
			const domain = skill[3];

			const updateAttributes = () => attributes.update(this.all);

			const prop_name = name.toLowerCase();
			this[prop_name] = new Skill(name, pri, sec, updateAttributes, domain);
			this.all.push(this[prop_name]);
		});
	}
}

export default Skills;
