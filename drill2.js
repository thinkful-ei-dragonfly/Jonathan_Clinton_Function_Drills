function jediName(firstName, lastName){
    let jedi = lastName.substring(0, 3).concat(firstName.substring(0, 2))
    return jedi;
}
console.log(jediName('Clinton', 'Carter'));

