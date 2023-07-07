// 10 Questions
    // Question 1
function printName() {
    return 'Chris Vasquez';
}
console.log(printName());
console.log(' ');
    // Question 2
function greetUser(name) {
    return 'Welcome to my website ' + name + '!';
}
console.log(greetUser('Chris'));
console.log(' ');
    // Question 3
function buyCoffee(dollars) {
    const coffeePrice = 1.00;
    let totalPrice = dollars - coffeePrice;
    return totalPrice;
}
console.log(buyCoffee(10.00));
console.log(buyCoffee(8.50));
console.log(' ');
    // Question 4
function checkWeather(condition, temperature) {
    if (condition === 'sunny' && temperature > 80) {
        return 'It is nice and hot outside.';
    } else if (condition === 'windy' && temperature < 50) {
        return 'Bring a coat, It is windy outside.';
    } else {
        return 'Cannot compute condition nor temperature!';
    }
}
console.log(checkWeather('sunny', 90));
console.log(' ');
    // Question 5
function areaOfTriangle(base, height) {
    const area = (base * height) / 2;
    return area;
}
console.log(areaOfTriangle(10, 8));
console.log(' ');
    // Question 6
function diceRoller() {
    const random = Math.ceil(Math.random() * 6);
    switch(random) {
        case 1:
            console.log('You rolled a 1');
            break;
        case 2:
            console.log('You rolled a 2');
            break;
        case 3:
            console.log('You rolled a 3');
            break;
        case 4:
            console.log('You rolled a 4');
            break;
        case 5:
            console.log('You rolled a 5');
            break;
        case 6:
            console.log('You rolled a 6');
            break;
    }
}
diceRoller();
console.log(' ');
    // Question 7
function helloAliyahOrHakeem() {
    let username = prompt('Please enter username');
    if (username === 'Aliyah' || username === 'Hakeem') {
        console.log('Hello ' + username + '!');
    } else {
        console.log('Invalid username!');
    }
}
helloAliyahOrHakeem();
console.log(' ');
    // Question 8
function getInitials(fullName) {
    let firstInitial = fullName.substring(0, 1);
    let lastInitial = fullName.substring(fullName.indexOf(' ') + 1, fullName.indexOf(' ') + 2);
    return firstInitial + lastInitial;
}
console.log(getInitials('Chris Vasquez'));
console.log(' ');
    // Question 9
function myHobbies(hobbies) {
    console.log(hobbies);
}
const hobby = ['Walking', 'Gaming', 'Cooking'];
myHobbies(hobby);
console.log(' ');
    // Question 10
function containedInStringArray(array, name) {
    return array.includes(name);
}
const names = ['Dave', 'Jane', 'Mark', 'Bill'];
const findName = 'Bill';
console.log(containedInStringArray(names, findName));
console.log(' ');
    // Question 11
function wordsInString(name) {
    name = name.trim();
    if (name === '') {
        return 0;
    }
    const words = name.split(/\s+/);
    return words.length;
}
console.log(wordsInString('Who is this'));