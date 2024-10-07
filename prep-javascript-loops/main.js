// create your loops here.
function whileLoop1() {
  let newArray1 = [];
  let i = 0;
  while (i < 10) {
    newArray1.push(i);
    i++;
  }
  return newArray1;
}
const whileLoop1Result = whileLoop1();
console.log(whileLoop1Result);

function whileLoop2() {
  let evenArray = [];
  let i = 0;
  while (i < 20) {
    evenArray.push(i);
    i += 2;
  }
  return evenArray;
}
let whileLoop2Result = whileLoop2();
console.log(whileLoop2Result);

function forLoop1() {
  const newArray2 = [];
  for (let i = 0; i <= 9; i++) {
    newArray2.push(i);
  }
  return newArray2;
}
let forLoop1Result = forLoop1();
console.log(forLoop1Result);

function forLoop2() {
  for (let i = 100; i > 0; i--) {
    console.log('Time till explosion ' + i + '!');
  }
}
forLoop2();

const person = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

function forInLoop1(object) {
  const newArray3 = [];
  for (const key in object) {
    newArray3.push(object[key]);
  }
  return newArray3;
}
const forInLoop1Result = forInLoop1(person);
console.log(forInLoop1Result);

function forInLoop2(object) {
  const newArray4 = [];
  for (const key in object) {
    newArray4.push(object[key]);
  }
  return newArray4;
}
const forInLoop2Result = forInLoop2(person);
console.log(forInLoop1Result);
