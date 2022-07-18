class Attribute {
	constructor(name) {
		this.name = name;
		this.startingLevel = 50;
		this.sp;
	}

	#skillBonus = 0;
	setSkillBonus = sp => {
		this.#skillBonus = 0;
		const levelup = 20;
		let nextLevelupAt = levelup;

		while (sp >= nextLevelupAt) {
			this.#skillBonus++;
			nextLevelupAt += levelup;
		}

		console.log(`${this.name} sb:  ${this.#skillBonus}`);
	};

	setStartinglevel = level => {
		this.startingLevel = level;
	};

	get level() {
		return this.startingLevel;
	}

	update = () => {
		console.log('update attributes');
	};
}

export default Attribute;
