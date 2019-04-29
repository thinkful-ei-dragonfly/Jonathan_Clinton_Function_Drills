function jediName(firstName, lastName){
    let jedi = lastName.substring(0, 3).concat(firstName.substring(0, 2))
    return jedi;
}
console.log(jediName('Clinton', 'Carter'));

function beyond(num){
    if (num === infinity){
        console.log('and beyond');
    }
    
    else if (num > 0){
        console.log('To infinity');
    }
    
    else if(num < 0){
        console.log('To negative infinity');
    }

    else {
        console.log('Staying home');
    }
}