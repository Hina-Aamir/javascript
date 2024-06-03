//Declare and initialize an empty multidimensional array. (Array of arrays)

var arr=[[[]],[[]],[],[],[]];

//2. Declare and initialize a multidimensional array representing the following matrix:

var matrix=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];

/*for(var i=0; i<4;i++){
    for (var j=0;j<4;j++){
        document.write(matrix[i][j]+"   ");

}
document.write("<br>");
}*/

//3.Write a program to print numeric counting from 1 to 10.


/*for (var i=1; i<=10;i++){
    document.write(i+"<br>");
}*/


//4 .Write a program to print multiplication table of any number using for loop. Table number & length should be
//taken as an input from user.


//var tableNum=+prompt("Enter a number to show its multiplication table" );
//var tableLen=+prompt("Enter A length MULTIPLICATION tABLE");


/*document.write("MULTIPLICATION TABLE OF "+tableNum +"<br>"+"LENGTH   "+ tableLen+"<br><br><br>")

for(i=1;i<=tableLen;i++){
    document.write(tableNum +" * "+i +" = " +  tableNum*i + "<br>");

}*/


//5. Write a program to print items of the following array using for loop:
//fruits = [“apple”, “banana”, “mango”, “orange”,“strawberry”]

var fruits = ["apple", "banana", "mango", "orange","strawberry"]

/*document.write("OUTPUT WITHOUT LOOP<br>")
document.write(fruits+"<br>");

document.write("OUTPUT USING LOOP<br>")
for(var i=0 ;i<fruits.length;i++){
    document.write(fruits[i]+"<br>")
}


for (var j=0;j<fruits.length;j++){
    document.write("ELEMNET AT INDEX "+j+ " is "+fruits[j]+"<br>")
}*/


//6.Generate the following series in your browser. See example output.
//a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
//b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
//c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
//d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
//e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k


document.write("COUNTING: <br><br> ");
for(var a=1;a<16;a++){
    document.write(a);
    document.write("   ,   ");
}

document.write("<br><br>REVERSE COUNTING:  <br><br>");
for (var b=10;b>0;b--){
    document.write(b+" , ");


}




document.write("<br><br>EVEN: <br><br>");

for( var x=0,k=0;k<22;k++){
document.write(x);
document.write(" , ");
x=x+2;
}

document.write("<br><br>ODD:  <br><br>");

for(var y=1,l=1;l<25;l++){
    
    document.write(y);
    document.write( "    ,    ");
    y=y+2;
}

document.write("<br><br>SERIES<br><br>");

for (var z=2,m=2;m<12;m++){
    document.write(z+"k");
    document.write("    ,      ");
z=z+2;
}

