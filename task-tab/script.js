'use strict'

var person1 = {
    firstName: 'Zbigniew',
    lastName: 'Nędzi'
}

var person2 = {
    firstName: 'Alicja', 
    lastName: 'Kotowska'
}


var people = [
    person1,
    person2,
    person2,
]

person2.firstName = 'Ala'
people[2].name = people[2].firstName + ' ' + people[2].lastName



console.log(people);
console.log(people);

