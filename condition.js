// Task-01
// let burger = prompt(parseFloat());
// if (burger > 100) {
//  console.log('I will eat it')   
// } else{
//    console.log('I will drink juice');
// }

// let burger =100
// if (burger > 100) {
//  console.log('I will eat it')   
// } else{
//    console.log('I will drink juice');
// }


// Task-02

// BMI calculator

// let height = prompt(parseFloat('Enter your height :'))
// let weight = prompt(parseFloat('Enter your weight :'));
// let bmiCount = weight / (height * height);
// if (bmiCount < 18.5) {
//     console.log('Your are under weight');  
// } else if(bmiCount >= 18.5 && bmiCount <=24.9){
//     console.log('You are normal')
// } else if(bmiCount >= 25){
//     console.log('You are over weight')
// } else{
//     console.log('You are obese');
// }

// task-03

// grade point calculate

// let score = 70;
//  if(score >= 80){
//     console.log('Your score is : A+');
// } else if(score >= 70){
//     console.log('Your score is A');
// } else if(score >= 60){
//     console.log('Your score is B');
// } else if(score >= 50 ){
//     console.log('Your score is C');
// } else if(score >= 40){
//     console.log('Your score is D');
// } else {
//     console.log('You failed')
// }

// Task -03
// Nested condition
// score = 20;
//  if (score > 80) {
//    console.log('You will be rewarded');  
//  } else{
//     if(score >= 70){
//         console.log('You will get chocolate')
//     } else if(score >= 60){
//         console.log('You wil get a book')
//     } else if(score >= 50){
//         console.log('You will get scolded');
//     } else {
//         console.log('You will not promote in the next class')
//     }
//  }

// Task -05

// Ternary condition

// num1 = 90;
// num2 = 10;
// num1 < num2 ? console.log('congratulations') : console.log('Sorry');

// Task - 06

// Ticket fare 
let age = 50;
let ticketPrice = 500;
if(age <= 10){
    console.log('You are free to go');
} else if(age <= 20){
    discount = ticketPrice * 50/100;
    amount = ticketPrice - discount;
    console.log('You have to pay ' + amount + ' taka');
} else if(age <= 40){
    discount = ticketPrice * 25/100;
    amount = ticketPrice - discount;
    console.log('You have to pay ' + amount + ' taka');
} else {
    console.log('You have to pay full');
}