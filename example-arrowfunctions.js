var names = ['Andrew', 'Julie', 'Jen'];

// names.forEach(function(name){
// 	console.log('forEach', name);
// });

// names.forEach((name) => {
// 	console.log('arrowFunc', name);
// })

// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';

// console.log(returnMe('Alex'));

// console.log("here");
// var person = {
// 	name: 'Alex',
// 	greet: function () {
// 		names.forEach((name)  =>{
// 							console.log(this.name + ' says hi to ' + name)
// 										}
// 					)
// 	}
// };

// person.greet();

//challenge

function add(a,b){
	return a + b;
}

//addstatement
var addexpression = (a,b) =>  {return a+b};
//addexpression
var addStatement = (a,b) =>  a+b;


console.log(addexpression(1,3));

console.log(addexpression(9,0));

