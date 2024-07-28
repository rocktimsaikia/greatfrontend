"use strict";

Function.prototype.myBind = function (thisArg, ...argArray) {
	let funcThis = this;
	return function (...args) {
		return funcThis.apply(thisArg, [...argArray, ...args]);
	};
};

// Test
const person = {
	name: "rocktim",
	getName(lastName, age) {
		return `${this.name} ${lastName} | ${age}`;
	},
};

const unboundGetName = person.getName;

const getName = unboundGetName.myBind(person, "saikia");
console.log(getName(25));
