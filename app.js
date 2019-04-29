"use strict";

function createGreeting(name, age){
    if(age < 0){
        throw new Error("Age can not be negative");
    } 
 return `Hi, my name is ${name} and I'm ${age} years old.`;
}
console.log(createGreeting());

function getYearOfBirth(age){
    if(age < 0){
        throw new Error("Age can not be negative")
    }
    const yearOfBirth = 2019 - age;
    return `I was born in ${yearOfBirth}`;
}

try{
    const greeting1 = createGreeting('Jonathan',-1);
} catch(e){
    console.error(e);
}