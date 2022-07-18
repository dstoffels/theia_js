class Skill {
	constructor(name, primaryAttribute, secondaryAttribute, updateAttributes, domain, spec) {
		this.name = name;
		this.primary = primaryAttribute;
		this.secondary = secondaryAttribute;
		this.updateAttributes = updateAttributes;
		this.domain = domain;
		this.spec = spec;
	}

	#xp = 0;
	get xp() {
		return this.#xp;
	}

	addXp = amount => {
		this.#xp = Math.max(0, this.#xp + amount);
		this.update();
	};

	#level = 0;
	get level() {
		return this.#level;
	}

	update = () => {
		this.#level = 0;
		let requiredXp = 100;
		let next_level_at = requiredXp;
		const modifier = 1.02;

		while (this.xp >= next_level_at) {
			Math.floor((requiredXp *= modifier));
			next_level_at += requiredXp;
			this.#level++;
		}

		this.updateAttributes();
	};

	get aptitude() {
		return Math.floor(this.primary.level + this.secondary.level / 2);
	}

	get proficiency() {
		return this.level + this.aptitude;
	}
}

export default Skill;
