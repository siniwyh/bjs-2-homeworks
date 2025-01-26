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

const people = [
    {firstName: "Александр", secondName: "Карпов", age: 17, gender: "мужской"},
    {firstName: "Егор", secondName: "Морозов", age: 21, gender: "мужской"},
    {firstName: "Мелисса", secondName: "Леонова", age: 40, gender: "женский"},
    {firstName: "Мелания", secondName: "Савельева", age: 37, gender: "женский"},
    {firstName: "Мария", secondName: "Овчинникова", age: 18, gender: "женский"},
    {firstName: "Марьяна", secondName: "Котова", age: 17, gender: "женский"},
    {firstName: "Фёдор", secondName: "Селезнев", age: 50, gender: "мужской"},
    {firstName: "Георгий", secondName: "Петров", age: 35, gender: "мужской"},
    {firstName: "Даниил", secondName: "Андреев", age: 49, gender: "мужской"},
    {firstName: "Дарья", secondName: "Савельева", age: 25, gender: "женский"},
    {firstName: "Михаил", secondName: "Шаров", age: 22, gender: "мужской"},
    {firstName: "Владислав", secondName: "Давыдов", age: 40, gender: "мужской"},
    {firstName: "Илья", secondName: "Казаков", age: 35, gender: "мужской"},
    {firstName: "Евгений", secondName: "Кузьмин", age: 19, gender: "мужской"},
  ];
console.log(getUsersNamesInAgeRange(people, "мужской"))