"use strict";
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

function decode(word){
    let result = 0;
    if (word[0] === 'a'){
        result = word[1];
    }

    else if (word[0] === 'b'){
        result = word[2];
    }
    else if (word[0] === 'c') {
        result = word[3];
    }
    else if (word[0] === 'd') {
        result = word[4];
    }
    else {
        result = ' ';
    }

return result;
}
console.log(decode('craft'));
console.log(decode('block'));
console.log(decode('argon'));
console.log(decode('meter'));
console.log(decode('bells'));
console.log(decode('brown'));
console.log(decode('croon'));
console.log(decode('droop'));

function howManyDays(month){
    let result = '';
    switch(month){
        case 'April':
        case 'June':
        case 'September':
        case 'November':
            result = `${month} has 30 days`;
            break;
    }
    switch(month){
        case 'January':
        case 'March':
        case 'May':
        case 'July':
        case 'August':
        case 'October':
        case 'December':
            result = `${month} has 31 days`;
            break;
    }
    switch(month){
        case 'February':
            result = `${month} has 28 days`;
            break;
    }
    return result;
}
console.log(howManyDays('March'));
console.log(howManyDays('April'));
console.log(howManyDays('February'));