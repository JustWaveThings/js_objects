// note that the bio property is just the function --- it was changed from:
// bio: function() {
//     console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
// },
// Both are valid, but the one below is more concise... looks to be the generally accepted way.  also called an object literal.

// reviewing the name property -- changing from an array to dot notation

// const person = {
//     name: ['Bob', 'Smith'],
//     age: 32,
//     bio() {
//         console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
//     },
//     introduceSelf: function() {
//         console.log(`Hi! I'm ${this.name[0]}.`);
//     },
// };

const person = {
	name: {
		first: "Bob",
		last: "Smith",
	},
	age: 32,
	bio() {
		console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
	},
	introduceSelf: function () {
		console.log(`Hi! I'm ${this.name[0]}.`);
	},
};

// talk about bracket notation again...

// these are equal

// person.age
// person.name.first

// and

// person['age']
// person['name']['first']

person.age = 45;
person["name"]["last"] = "Cratchit";

person["eyes"] = "hazel";
person.farewell = function () {
	console.log("Bye Everyone!");
};

const myDataName = "height";
const myDataValue = "1.75m";
person[myDataName] = myDataValue;

// bracket notation is useful to set 'member names' or 'property keys' dynamically based on the value of a variable

// const myDataName = nameInput.value;
// const myDataValue = nameValue.value;

// to add to object =>

// person[myDataName] = myDataValue;

// What is 'this'?????

// const person1 = {
//         name: 'Chris',
//         introduceSelf() {
//             console.log(`Hi! I'm ${this.name}.`);
//         }
//     }

// const person2 = {
//     name: 'Deepti',
//     introduceSelf() {
//         console.log(`Hi! I'm ${this.name}.`);
//     }

// the takeaway is that introduceSelf() is identical in each object, but returns the correct value.  Much like i in a for loop.

// constructors CONSTRUCTORS constructors
// Constructors define the shape of an object.

//  VVV this is not a constructor, this is just a function... 
function createPerson(name) {
	const obj = {};
	obj.name = name;
	obj.introduceSelf = function () {	
		console.log(` Hi! I'm ${this.name}`)
	};
	return obj;
}
// what's important to know about this function is that it has two properties name and introduceSelf() and will only take a passed name argument. It creates a new object when we call it.

// reusing createPerson()

const salva = createPerson('Salva'); //salva.introduceSelf() Hi! I'm Salva
const frankie = createPerson('Frankie'); 

// A constructor is just a function called using the new keyword. When called,
// -create a new object !
// -bind 'this' to the new object.
// - run the code in the constructor
// - return new object 

// constructors START WITH A CAPITAL Letter 
// same function as above, just in constructor form:

function Person(name) {
	this.name = name;
	this.introduceSelf = function () {
		console.log(`Hi! I'm ${this.name}.`);
	}
}

// to call Person() as a constructor, we use 'new': 

const david = new Person('David');
const Emmanuel = new Person('Emmanuel');

const myNotification = new Notification("Hello!");
