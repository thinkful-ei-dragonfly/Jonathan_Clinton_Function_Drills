function createGreeting(name, age){
 return `Hi, my name is ${name} and I'm ${age} years old.`;
}
console.log(createGreeting());

function getYearOfBirth(age){
    const yearOfBirth = 2019 - age;
    return `I was born in ${yearOfBirth}`;
}