function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
const sum = addTwoNumbers(2, 2);
console.log('sum:', sum);
/////
function convertHoursToMinutes(hours) {
  const minutes = hours * 60;
  return minutes;
}
const minutes = convertHoursToMinutes(2);
console.log(minutes);
/////
function getGreeting(name) {
  return 'Hello World!';
}
const greeting = getGreeting('World');
console.log(greeting);
/////
function addAndMultiplyBy5(num1, num2) {
  const sumTimesFive = (num1 + num2) * 5;
  return sumTimesFive;
}
const sumTimesFive = addAndMultiplyBy5(10, 5);
console.log(sumTimesFive);
/////

function multiplyAndDivideBy5(num1, num2) {
  const productDividedByFive = (num1 * num2) / 5;
  return productDividedByFive;
}
const productDividedByFive = multiplyAndDivideBy5(35, 10);
console.log(productDividedByFive);
/////

function subtractTwoNumbers(num1, num2) {
  const difference = num1 - num2;
  return difference;
}
const difference = subtractTwoNumbers(22, 7);
console.log(difference);
/////

function getCircleCircumference(radius) {
  const circumference = radius * 2 * 3.14;
  return circumference;
}
const circumference = getCircleCircumference(5);
console.log(circumference);
/////

function getFullName(firstName, lastName) {
  const fullName = firstName + ' ' + lastName;
  return fullName;
}
const fullName = getFullName('Juan', 'Ramirez');
console.log(fullName);
/////

function cube(number) {
  const cubed = number * number * number;
  return cubed;
}
const cubed = cube(5);
console.log(cubed);
