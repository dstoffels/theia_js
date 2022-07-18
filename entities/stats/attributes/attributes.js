import Stats from '../stats.js';
import Attribute from './attribute.js';
import { ATTRIBUTES } from './constants.js';

class Attributes extends Stats {
	constructor() {
		super();
		ATTRIBUTES.forEach(name => {
			const prop_name = name.toLowerCase();
			this[prop_name] = new Attribute(name);
			this.all.push(this[prop_name]);
		});
	}

	setStartingValues = levels => {
		this.all.forEach((att, i) => {
			att.setStartingLevel(levels[i]);
		});
	};

	update = (skills = []) => {
		this.all.forEach(att => {
			let sp = 0;
			skills.forEach(skill => {
				sp += skill.primary == att ? skill.level * 2 : skill.secondary == att ? skill.level : 0;
			});

			att.setSkillBonus(sp);
		});
	};
}

export default Attributes;
