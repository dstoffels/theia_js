import Attributes from './stats/attributes/attributes.js';
import Skills from './stats/skills/skills.js';

class Entity {
	constructor() {
		this.attributes = new Attributes();
		this.skills = new Skills(this.attributes);
	}
}

export default Entity;
