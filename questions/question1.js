const d = {
	'project A': {'hours': 7, 'capex': true},
	'project B': {'hours': 3, 'capex': false},
	'project C': {'hours': 6, 'capex': true}
};

const trueCapex = (obj) => {

	let sumArr = [];

	for (let projectKey in obj) {
		const eachProject = obj[projectKey];
		if (eachProject.capex === true) sumArr.push(eachProject.hours);
	}

	return sumArr.reduce((acc, curr) => {
		return acc + curr;
	});

};

console.log(trueCapex(d));
