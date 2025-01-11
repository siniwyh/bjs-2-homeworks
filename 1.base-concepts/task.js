"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let discr = Math.pow(b, 2) - 4 * a * c;
	if (discr < 0) {
		arr = []
	} else if (discr === 0) {
		arr[0] = -b / (2 * a);
	} else {
		arr[0] = (-b + Math.sqrt(discr)) / (2 * a);
		arr[1] = (-b - Math.sqrt(discr)) / (2 * a);
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let percentMounth = parseInt(percent) / 100 / 12;
	let amoutCredit = parseInt(amount) - parseInt(contribution);
	let payment = amoutCredit * (percentMounth + (percentMounth / (((1 + percentMounth) ** parseInt(countMonths)) - 1)));
	let totalAmount = +(payment * parseInt(countMonths)).toFixed(2);
	return totalAmount;
}