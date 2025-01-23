function getArrayParams(...arr) {
	if (arr.length === 0) {
		return 0; // Если массив пустой, возвращаем 0
	}
	let min = arr[0]
	let max = arr[0]
	let sum = 0

	for (let i of arr) {
		if (i > max) {
			max = i;
		} else if (i < min) {
			min = i;
		}
		sum += i;
	}
	const avg = +(sum / arr.length).toFixed(2);

	return {
		min: min,
		max: max,
		avg: avg
	};
}

console.log(getArrayParams(-99, 99, 10))

function summElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0; // Если массив пустой, возвращаем 0
	}
	let sum = 0
	for (let i of arr) {
		sum += i;
	}
	return sum
}

console.log(summElementsWorker(10, 10, 11, 20, 10))

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0; // Если массив пустой, возвращаем 0
	}
	let min = arr[0]
	let max = arr[0]

	for (let i of arr) {
		if (i > max) {
			max = i;
		} else if (i < min) {
			min = i;
		}
	}
	return (max - min)
}

console.log(differenceMaxMinWorker(10, 10, 11, 20, 10))

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) {
		return 0; // Если массив пустой, возвращаем 0
	}
	let sumEvenElement = 0
	let sumOddElement = 0
	for (let i of arr) {
		if (Math.floor(i / 2) == i / 2) {
			sumEvenElement += i;
		} else {
			sumOddElement += i;
		}
	}
	return sumEvenElement - sumOddElement
}

console.log(differenceEvenOddWorker(4, 4, 4, 4))

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0; // Если массив пустой, возвращаем 0
	}
	let countEvenElement = 0
	let sumEvenElement = 0
	for (let i of arr) {
		if (Math.floor(i / 2) == i / 2) {
			sumEvenElement += i;
			countEvenElement += 1;
		}
	}
	if (countEvenElement === 0) {
		return 0;
	}
	return sumEvenElement / countEvenElement
}

console.log(averageEvenElementsWorker(4, 16))

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity
	for (let i of arrOfArr) {
		const result = func(...i);
		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}
	return maxWorkerResult
}

console.log(makeWork([
	[10, 10, 11, 20, 10],
	[67, 10, 2, 39, 88],
	[72, 75, 51, 87, 43],
	[30, 41, 55, 96, 62]
], differenceEvenOddWorker))
console.log(makeWork([
	[],
	[],
	[],
	[]
], differenceEvenOddWorker))