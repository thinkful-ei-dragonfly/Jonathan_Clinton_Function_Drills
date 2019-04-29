function createGreeting(name, age){
const yearOfBirth = 2019 - age;
 return `Hi, my name is ${name} and I'm ${age} years old.`;
 return `I was born in ${yearOfBirth}`;
}
console.log(createGreeting());