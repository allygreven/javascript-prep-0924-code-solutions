const person = {
  firstName: 'Ally',
  lastName: 'Greven',
  hobby: 'reading',
};
console.log(person);

const fullName = {
  firstName: 'Ally',
  lastName: 'Greven',
};
console.log('The persons name is: ', ' ', fullName);

person.job = 'developer';
console.log('The persons job is: ', person.job);

person['previousJob'] = 'costumer';
console.log('The persons previous job was: ', person['previousJob']);
