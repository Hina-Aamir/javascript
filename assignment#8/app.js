//1. write a program that displays current date and time in your browser.

// var today = new Date();
// console.log(today);

//2.write a program that alerts the current month in words.

// var today =new Date();
// var month=today.getMonth();

// console.log("CURRENT MONTH:");

// if (month==0){
//     console.log("JANUARY");
// }
// else if (month==1){
//     console.log("FEBRUARY");
// }
// else if (month==2){
//     console.log("MARCH");
// }
// else if (month==3){
//     console.log("APRIL");
// }
// else if (month==4){
//     console.log("MAY");
// }
// else if (month==5){
//     console.log("JUNE");
// }
// else if (month==6){
//     console.log("JULY");
// }
// else if (month==7){
//     console.log("AUGUST");
// }
// else if (month==8){
//     console.log("SEPTEMBER");
// }
// else if (month==9){
//     console.log("OCTOBER");
// }
// else if (month==10){
//     console.log("NOVEMBER");
// }
// else if (month==11){
//     console.log("DECEMBER");
// }
//. 3WRite aprogram that alerts the first 3 letters of the current day .
//var today =new Date();
// var day=today.getDay();
// console.log(day);
// if (day==0)
// {
//     console.log("Today is  Sun")
// }
// else if (day==1)
// {
//     console.log("Today is  Mon")
// }
// else if (day==2)
// {
//     console.log("Today is  Tue")
// }
// else if (day==3)
// {
//     console.log("Today is  Wed")
// }
// else if (day==4)
// {
//     console.log("Today is  Thu")
// }
// else if (day==5)
// {
//     console.log("Today is  Fri")
// }
// else if (day==6)
// {
//     console.log("Today is  Sat")
// }

//4. Write a program that displays  a message :its funday" if its saturday or sunday today.

// var today =new Date();
// var day=today.getDay();
// if (day==0||day==6){
//     console.log("It's FUN Day");
// }

//5. write a program that shows the message "first fifteen days of the month"
// if the date is less than 16th of themonth else shows "last days of the month"

// var today =new Date();
// var date=today.getDate();
// console.log(date);
// if (date<16){
//     console.log("FIRST FIFTEEN DAYS OF THE MONTH");
// }
// else {
//     console.log("LAST DAYS OF THE MONTH")
// }
//6.Write a program that determines the minutes since midnight 
//,Jan 1,1970 and assigns it to a variable that hasn't been declared before hand .
//use any variable you like to represent the date object

//7/Write a program that tests whether its before noon and alert its AM else its PM

// var today =new Date();
// var time=today.getHours();
// console.log(time);
// if(time<12){
//     alert("Its AM");
// }
// else{
//     alert("Its PM");
// }
//8. Write a program that creates a DAte object  for the last day of the last month of 2020 
//and assigns it to variable named later Date.





//9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan?
//Note: 1st Ramadan was on June 18, 2015




//10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015./






//11. Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and
//finally display the date object in your browser.





//12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?





//13. Write a program to ask the user about his age. Calculateand s how his birth year in your browser.
// var age =+prompt("enter your age");

// var today= new Date();
// var year=today.getFullYear();
// console.log("the current year is "+year);
// console.log("the user age is "+ age);
// var birthYear=year-age;
// console.log("the user birth year is   "+ birthYear);


//14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month

// DATE METHODS | JAVASCRIPT

// Page 5 of 5

// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,

// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

var customerName="ABC CUSTOMER"
var currentMonth="february"
var numberUnit=410
var charges=16
var netAmount=charges*numberUnit
var late =350
var gross=netAmount+late

document.write("<h1>K_ELECTRIC BILL</h1>");
document.write("<br/>Customer Name: "+customerName);
document.write("<br/>Month        :  "+currentMonth);
document.write("<br/><br/>Number of Units: "+numberUnit);
document.write("<br/>Charges per unit :  "+charges);
document.write("<br/><br/><br/>Net Amount Payable(within due date) :  "+netAmount);
document.write("<br/>Late Payment Surcharge :  "+late);

document.write("<br/>Gross Amount Payable(after due date) :"+gross);