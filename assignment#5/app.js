//1. Declare an empty array using JS literal notation to store student names in future.
var studentName=[];


//2. Declare an empty array using JS object notation to store student names in future.
var emptyArray = new Array(100);

//3.Declare and initialize a strings array.
var strName=["Aaisha","Abdullah","Ahshm","Arwa"]





//4.Declare and initialize a numbers array.,
var inNum=[17,11,26,4]
//5. Declare and initialize a boolean array.

var boolArray=[true,false,null,undefined,"",0]

//6. Declare and initialize a mixed array.


var mixArray=["Aamir",27,"hina","34",true,false]
//7.  Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS,
  //  BS, BCOM, MS, M. Phil., PhD). Show the listed
    //qualifications in your browser like:
     
var eduQualification=["SSC"," HSC"," BCS","BS", "BCOM", "MS", "M. Phil.", "PhD"]
    alert(eduQualification);

/*
document.write("Qualifications\n");
document.write("1) \n"+eduQualification[0]);
document.write("2) \n"+eduQualification[1]);
document.write("3) "+eduQualification[2]);
document.write("\n4) "+eduQualification[3]);
document.write("\n5) "+eduQualification[4]);
document.write("\n6) "+eduQualification[5]);
document.write("\n7) "+eduQualification[6]);
document.write("\n8) "+eduQualification[7]);*/


//8.8. Write a program to store 3 student names in an array.Take
//another array to store score of these three students.
//Assume that total marks are 500 for each student, display
//the scores & percentages of students like:

/*
studentName=["AAISHA","ABDULLAH","AHSHM"  ];
var mark=[230,320,400];
total=500;
document.write("score of "+studentName[0]+ " is "+mark[0]+". Percentage "+ (mark[0]/total*100)+"%\n");
document.write("\n\n\n");
document.write("<br>");
document.write("score of "+studentName[1] +" is "+mark[1]+". Percentage "+ (mark[1]/total*100)+"%\n");
document.write("\n\n\n");
document.write("<br>");
document.write("score of "+studentName[2] +" is "+mark[2]+". Percentage "+ (mark[2]/total*100)+"%\n");
*/
/*9. Initialize an array with color names. Display the array
elements in your browser.
a. Ask the user what color he/she wants to add to the
beginning & add that color to the beginning of the array.
Display the updated array in your browser.
b. Ask the user what color he/she wants to add to the end
& add that color to the end of the array. Display the
updated array in your browser.
c. Add two more color to the beginning of the array.
Display the updated array in your browser.
d. Delete the first color in the array. Display the updated
array in your browser.
e. Delete the last color in the array. Display the updated
array in your browser.
f. Ask the user at which index he/she wants to add a color
& color name. Then add the color to desired
position/index. . Display the updated array in your
browser.
g. Ask the user at which index he/she wants to delete
color(s) & how many colors he/she wants to delete. Then
remove the same number of color(s) from user-defined
position/index. . Display the updated array in your
browser.*/





/*10. Write a program to store student scores in an array &
sort the array in ascending order using Array’s sort
method.*/

var studentScore=[20,25,16,5,81,19,1];
document.write("STUDENT SCORE:"+studentScore);
studentScore.sort();
document.write=("<br>SORTED STUDENT SCORE:"+ studentScore); 


/*11. Write a program to initialize an array with city names.
Copy 3 array elements from cities array to selectedCities
array.*/
/*
var cityName=["karachi","lahore","sialkot","islamabad","peshawar"];
document.write("City Name: ");
document.write(cityName);
document.write("<br>");
var selectedName=[];
document.write("Selected Name: ");
selectedName[0]=cityName[0];
selectedName[1]=cityName[3];
selectedName[2]=cityName[4];
document.write(selectedName);
document.write("<br>");*/





/*12. Write a program to create a single string from the
below mentioned array:
var arr = [“This ”, “ is ”, “ my ”, “ cat”];
(Use array’s join method)*/

/*
var arr = ["This","is","my","cat"];
document.write("ARRAY:<br>");
document.write(arr);
document.write("<br>String:<br>");
var text = arr.join("  ");
document.write(text);*/



/*13. Create a new array. Store values one by one in such a way
that you can access the values in the order in which they
were stored. (FIFO-First In First Out)*/


/*14. Create a new array. Store values one by one in such a way

that you can access the values in reverse order. (Last In-
First Out)*/


/*15. Write a program to store phone manufacturers (Apple,
Samsung, Motorola, Nokia, Sony & Haier) in an array.
Display the following dropdown/select menu in your
browser using document.write() method:*/