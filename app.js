'use strict';
function createGreeting(name, age){
  if(age < 0){
    throw new Error('Age can not be negative');
  } 
  if((name === undefined)||(age === undefined)){
    throw new Error('Arugments not valid');
  }
  if(typeof name !== "string"){
    throw new Error('Name should be a string.');
  }
  if(typeof age !== "number"){
    throw new Error('Age should be a number.');
  }
  return `Hi, my name is ${name} and I'm ${age} years old.`;
}
console.log(createGreeting());

function getYearOfBirth(age){
  if(age < 0){
    throw new Error("Age can not be negative")
  }
  if((name === undefined)||(age === undefined)){
    throw new Error('Arugments not valid');
  }
  const yearOfBirth = 2019 - age;
  return `I was born in ${yearOfBirth}`;
}

try{
  const greeting1 = createGreeting('Jonathan',-1);
} catch(e){
  console.error(e);
}