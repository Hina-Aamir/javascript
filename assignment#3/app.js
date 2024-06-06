// // // //1. Write a program to take “city” name as input from user. If
// // // user enters “Karachi”, welcome the user like this:
// // // “Welcome to city of lights”



// // // var city = prompt("Enter City Name");
// // // if(city=="Karachi"||city=="karachi"||city=="KARACHI"){
// // //     alert("Welcome To City Lights");
// // // }

// // // 2. Write a program to take “gender” as input from user. If the
// // // user is male, give the message: Good Morning Sir. If the
// // // user is female, give the message: Good Morning Ma’am.


// // // var gender=prompt("Enter GENDER ")
// // // if(gender=="male"||gender=="Male"||gender=="MALE")
// // //     {
// // //         alert("GOOD MORNING SIR");
// // //     }
// // // if(gender=="female"||gender=="Female"|| gender=="FEMALE")
// // //     {
// // //         alert("GOOD MORNING MA'AM")';
// // //     } 
// // //3.Write a program tto take input color of road traffic signal  from the user & show the 
// // //message according to this table.

// // var color = prompt("ENTER ANY COLOR")
// // if(color=="RED"||color=="Red"||color=="red")
// //     {
// //         alert("Must Stop") 
// //     }
// // else if(color=="yellow"||color=="Yellow"||color=="YELLOW")
// //         {
// //             alert("READY TO MOVE")
// //         }
// // else if(color=="green"||color=="Green"||color=="Green"){
// //             alert("MOVE NOW")
// //         }

// // else {
// //     alert("This color is not included in traffic signal")
// // }


// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”
 
// var carfuel=+prompt("ENTER remaining fuel in car in litres")
// if(carfuel<=.25){
//     alert("Please refill the fuel in your car")
// }

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.


//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");// displayed
// }

//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");//not
// }
//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");//not
// }
// if (c === 13){
// alert("condition 2 is true");//displayed
// }
// if (++c < 14){
// alert("condition 3 is true");//not
// }
// if(c === 14){
// alert("condition 4 is true");//displayed
// }
//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");//displayed
// }
//  if (true){//displayed
// alert("True");
// }
// if (false){//not
// alert("False");
// }

//  if("car" < "cat"){//displayed
// alert("car is smaller than cat");
// }

//6. Write a program to take input the marks obtained in three subjects & total marks.
// Compute & show the resulting percentage on your page.
// Take percentage & compute  grade as per following table: 

//Show the total marks, marks obtained, percentage, grade & remarks like:

// var sub1=+prompt("ENTER YOUR SUBJECT 1 MARKS")
// var sub2=+prompt("ENTER YOUR SUBJECT 2 MARKS")
// var sub3=+prompt("ENTER YOUR SUBJECT 3 MARKS")

// var  total=+prompt("ENTER YOUR TOTAL MARKS")
// var marksobt=sub1+sub2+sub3;
// var per=marksobt/total*100;

// document.write("MARKSHEET<br><br><br><br>");
// document.write("Total Marks: "+total);
// document.write("<br>Marks Obtained: "+marksobt);
// document.write("<br>Percentage: "+per);
// if (per>=80){
//     document.write("<br>Grade: A-ONE");
//     document.write("<br>Excellent")  ;
// }
// else if(per>=70&&per<80){    
// document.write("<br>Grade: A");
// document.write("<br>GOOD");}
// else if(per>=60&&per<70)
//     {
//         document.write("<br>Grade: B");
//         document.write("<br>YOU NEED TO IMPROVE");
//     }
// else {
//     document.write("<br>Grade: FAIL");
//     document.write("<br>SORRY");
// }


// 7. Guess game: 
// Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number. 
// a. If user guesses the same number, show “Bingo! Correct answer”. 
// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”. 

// var secretNum=5;
// var guess=+prompt("ENTER THE GUESS SECRET NUMBER");
// if(guess==secretNum){
//     alert("Bingo ! Correct answer");
// }
// else if(guess<secretNum&&guess>0){
//     alert("CLOSE enough to the correct answer");

// }
// else if (guess> secretNum &&guess<10){
//     alert("not close enough to the correct answer");
// }
// else {
//     alert("not in the range");
// }
//Write a program to check whether the given number is divisible by 3. Show the message to the user if the number  is divisible by 3. 

// var givenNum=+prompt("ENTER ANY NUMBER");
// var remainder=givenNum%3
// if(remainder==0){
//     document.write("the given number is divisible by 3");
// }
// else {
//     document.write("the given number is not divisible by 3");

// }


//9. Write a program that checks whether the given input is an even number or an odd number. 

// var num=+prompt("Enter any NUMBER")
// var remainder=num%2;
// if(remainder==0){
//     document.write("the given number is even")

// }
// else{
//     document.write("the given number is odd")
// }

// 10. Write a program that takes temperature as input and  shows a message based on following criteria 
// a. T > 40 then “It is too hot outside.” 
// b. T > 30 then “The Weather today is Normal.” c. T > 20 then “Today’s Weather is cool.” 
// d. T > 10 then “OMG! Today’s weather is so Cool.” 


// var temp=+prompt("Enter temperature as input")
//     if(temp>=40){
//         document.write("IT IS TOO HOT OUTSIDE")
//     }
//     else if(temp>=30&&temp<40){
//         document.write("THE WEATHER TODAY IS NORMAL")
//     }
// else if (temp>=20&&temp<30){
//     document.write("TODAY WEATHER IS COOL")

// }
// else if (temp>=10&&temp<20)
//     {
//         document.write("OMG! Today's weather is so Cool")

//     }

//     else{
//         document.write("extreme cool weather")
//     }
// // 11. Write a program to create a calculator for +,-,*, / & %  using if statements. Take the following input: 
// a. First number 
// b. Second number 
// c. Operation (+, -, *, /, %) 
// Compute & show the calculated result to user.


var first=+prompt("ENTER THE FIRST NUMBER");
var second=+prompt("ENTER THE SECOND NUMBER")
var operat=prompt("PLEASE ENTER ANY OPRATOR FROM THE LIST +,-,*,/%")
var result=0;

if(operat==="+"){
    result=first+second
}
else if(operat=="-"){
    result=first-second
}
else if(operat=="*"){
    result=first*second
}
else if(operat=="/"){
    result=first/second
}
else if(operat=="%"){
    result=first%second
}

document.write("the first number is "+ first + " operation performed "+operat +
" and the second number is "+second+ " then the result is "+ result );

