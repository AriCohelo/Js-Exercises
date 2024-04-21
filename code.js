'use strict';
// let nums = [1, 2, 3, 4, 5];

// let [one, two, , ...rest] = nums;
// console.log(one, two, rest);

// function destructuring([first, second]) {
// 	return first + second;
// }
// console.log(destructuring(nums));
// let strings = ['Hello', 'World', 'I', 'am', 'learning', 'JavaScript'];
// function stringDesct([first, , ...rest]) {
// 	console.log(first);
// 	console.log(rest);
// }
// console.log(stringDesct(strings));
// 2;
// function stringDesct2([first, ...rest]) {
// 	console.log(first);
// 	console.log(rest.length);
// }
// stringDesct2(nums);

// let salaries = {
// 	John: 100,
// 	Pete: 300,
// 	Mary: 250,
// };

// function sumSalaries(obj) {
// 	let sum = 0;
// 	for (let values of Object.values(obj)) sum += values;
// 	return sum;
// }
// console.log(sumSalaries(salaries));

// function countProperties(obj) {
// 	return Object.entries(obj).length;
// }
// console.log(countProperties(salaries));

// let user = {
// 	name: 'John',
// 	years: 30,
// };

// let { name, years, isAdmin = false } = user;
// console.log(name, years, isAdmin);

//Ejercicios Destructuring

let nums = [1, 2];
let [dos, uno] = nums;
// console.log(`dos es ${dos}`, `uno es ${uno}`);

let colors = ['red', 'green', 'blue', 'yellow', 'orange'];
// let [color1, color2, color3] = colors;
// console.log(color1, color2, color3);

// let [color1, , color3, , color5, color6 = 'no more colors'] = colors;
// console.log(color1, color3, color5, color6);

let person = {
	size: { height: 160, weight: 100 },
	activities: { work: true, sports: 2, hobbies: true },
	alive: true,
};
let {
	size: { height, weight },
	activities: { work, sports, hobbies },
	alive,
} = person;
// console.log(height, weight, work, sports, hobbies, alive);

let [color1, ...rest] = colors;
console.log(color1, [...rest]);
