function produceDrivingRange(drivingRange) {
	return function produceBlockRange(block1, block2) {
		const num1 = block1.split("th")[0]
		const num2 = block2.split("th")[0]
		const num = Math.abs(num1 - num2)
		const range = Math.abs(drivingRange - num)
		if (num <= drivingRange) {
			 return `within range by ${range}`;
		} else {
			return `${range} blocks out of range`;
		}
	}
}

function produceTipCalculator(tipPercentage) {
	return function produceBill(bill) {
		return bill * tipPercentage;
	}
}

function createDriver() {
	let driverId = 0;

	return class {
		constructor(name) {
			this.name = name;
			this.id = ++driverId;
		}
	}
}