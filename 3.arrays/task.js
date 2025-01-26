// function compareArrays(arr1, arr2) {
//     let check = arr1.every(function(elem, index) {
//         if (elem === arr2[index]) {
//             return true;
//         } else {
//             return false;
//         }
//     });
//     return check
// }

// console.log(compareArrays([1, 2, 3], [1, 2, 3]))

function compareArrays(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}
	return arr1.every((elem, index) => elem === arr2[index]);
}

console.log(compareArrays([1, 2, 3], [1, 2, 3]))
console.log(compareArrays([1, 2], [1, 2, 3]))

function getUsersNamesInAgeRange(users, gender) {
	const filteredUsers = users.filter(user => user.gender === gender);
	if (filteredUsers.length === 0) {
		return 0
	}
	const totalAge = filteredUsers.reduce((sum, user) => sum + user.age, 0);
	return totalAge / filteredUsers.length
}