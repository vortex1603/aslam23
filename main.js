let arr = ["Alex", "John", "Bob", "Amir", "Azizbek", "Tyler"];
let arr2 = ["Davlat", "Arslan", "Steve", 32, true, 45];

let combinedArr = arr.concat(arr2);

let namesOnly = combinedArr.filter(item => typeof item === 'string');

let newArr = namesOnly.filter(name => name.startsWith("A"));

console.log(newArr);

// Объединить массивы arr и arr2
// Вырезать все имена с объединенного массива
// Отфильтровать имена, начинающиеся на букву "A"   