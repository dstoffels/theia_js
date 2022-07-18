class Stats {
	constructor() {
		this.all = [];
	}

	update = () => {
		this.all.forEach(e => {
			e.update();
		});
	};
}

export default Stats;
