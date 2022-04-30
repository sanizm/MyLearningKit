function p1Func(){
    document.getElementById("problem").innerHTML=
    "<p>draw a flowchart for a computer program to receive two numbers and output their sum.</p>"

    document.getElementById("flowchart").setAttribute("src","images/flowcharts/flowchart1.jpg");
    document.getElementById("flowchart").setAttribute("style", "display:none");

    document.getElementById("js").setAttribute("src","images/solutions/solution1.png");
    document.getElementById("js").setAttribute("style", "display:none");

    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;

   /* var btN = document.createElement("BUTTON");
    btN.innerHTML = "RUN THE PROGRAM";
    document.body.appendChild(btN);
    btN.onclick = problem1();*/
    
    
 
}

function checkUncheck1(){
    if (document.getElementById("check1").checked==true) {

        document.getElementById("flowchart").style.display="inline";  
    }
    else {
        document.getElementById("flowchart").style.display="none";
    }
  }
  
function checkUncheck2(){
    if (document.getElementById("check2").checked==true) {
       
        document.getElementById("js").style.display="inline";
    }
    else {
        document.getElementById("js").style.display="none";
    }
  }

  function zoomIn() {
    document.getElementById("flowchart").style.width="200%";
    document.getElementById("js").style.width="200%";

  }
  function zoomOut() {
    document.getElementById("flowchart").style.width="100%";
    document.getElementById("js").style.width="100%";
  }

  function p2Func(){
    document.getElementById("problem").innerHTML=
    "<p>draw a flowchart for a computer program to receive three numbers and store them in memory spaces " +
    "called a, b, and c as three sides of a triangle and, by using Heron’s formula, calculate and output the area of the triangle</p>"

    document.getElementById("flowchart").setAttribute("src","images/flowcharts/flowchart2.jpg");
    document.getElementById("flowchart").setAttribute("style", "display:none");

    document.getElementById("js").setAttribute("src","images/solutions/solution2.png");
    document.getElementById("js").setAttribute("style", "display:none");

    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
 
}

function p3Func(){
    document.getElementById("problem").innerHTML=
    "<p>draw a flowchart for a computer program to receive three numerical coefficients of a quadratic equation " +
    "(store them in memory spaces called a, b, and c) and calculate and output its roots. Write a precondition that assumes " +
    "coefficients are good enough such that a solution in real number exists</p>"

    document.getElementById("flowchart").setAttribute("src","images/flowcharts/flowchart3.jpg");
    document.getElementById("flowchart").setAttribute("style", "display:none");

    document.getElementById("js").setAttribute("src","images/solutions/solution3.png");
    document.getElementById("js").setAttribute("style", "display:none");

    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
 
}

function p4Func(){
    document.getElementById("problem").innerHTML=
    "<p>draw a flowchart to receive three numerical coefficients of a quadratic equation and determines " +
    "if it has two distinct real roots, one root, or no roots in real numbers. </p>"

    document.getElementById("flowchart").setAttribute("src","images/flowcharts/flowchart4.jpg");
    document.getElementById("flowchart").setAttribute("style", "display:none");

    document.getElementById("js").setAttribute("src","images/solutions/solution4.png");
    document.getElementById("js").setAttribute("style", "display:none");

    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
 
}

function p5Func(){
    document.getElementById("problem").innerHTML=
    "<p>draw a flowchart to receive a number and map it to a letter grade based on York standard</p>"

    document.getElementById("flowchart").setAttribute("src","images/flowcharts/flowchart5.jpg");
    document.getElementById("flowchart").setAttribute("style", "display:none");

    document.getElementById("js").setAttribute("src","images/solutions/solution5.png");
    document.getElementById("js").setAttribute("style", "display:none");

    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
 
}

function p6Func(){
    document.getElementById("problem").innerHTML=
     "<p>Devise a flowchart to receive a positive number and output each digit separately."+
     "For instance, if the input is 692, the program should output 2, 9, 6. "+
     "Another example, if the number is 135429 the program should out put 9, 2, 4, 5, 3, and 1.  </p>"


    document.getElementById("flowchart").setAttribute("src","images/flowcharts/flowchart6.jpg");
    document.getElementById("flowchart").setAttribute("style", "display:none");

    document.getElementById("js").setAttribute("src","images/solutions/solution6.png");
    document.getElementById("js").setAttribute("style", "display:none");

    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
 
}

function p7Func(){
    document.getElementById("problem").innerHTML=
    "<p> Devise a flowchart to receive a positive number and output how many of its digits are equal to 7."+ 
    "For instance, if the input is 772, the program should output 2, because there are two sevens there." +
    "Another example, if the input is 14368, the program should output 0</p>"

    document.getElementById("flowchart").setAttribute("src","images/flowcharts/flowchart7.jpg");
    document.getElementById("flowchart").setAttribute("style", "display:none");

    document.getElementById("js").setAttribute("src","images/solutions/solution7.png");
    document.getElementById("js").setAttribute("style", "display:none");

    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
 
}

function p8Func(){
    document.getElementById("problem").innerHTML=
    "<p> Devise a flowchart to receive a positive number and output sum of its digits." +
    "For instance, if the input is 63932, the program should output 23, because 6+3+9+3+2 is 23." +
     "Another example, if the input is 23 the program should output 5. </p>"

    document.getElementById("flowchart").setAttribute("src","images/flowcharts/flowchart8.jpg");
    document.getElementById("flowchart").setAttribute("style", "display:none");

    document.getElementById("js").setAttribute("src","images/solutions/solution8.png");
    document.getElementById("js").setAttribute("style", "display:none");

    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
 
}

function p9Func(){
    document.getElementById("problem").innerHTML=
    "<p> Devise a flowchart to receive a positive number and output 'yes' if it's equal to its reverse; otherwise, output 'no'."+ 
    "For instance, if the input is 63936, the program should output 'yes', because if you read the digits from left to right or from "+
    "right to left, it's the same number. But, if the input is 632, the program should output 'no' because 632 is not the same as 236.</p>"
    document.getElementById("flowchart").setAttribute("src","images/flowcharts/flowchart9.jpg");
    document.getElementById("flowchart").setAttribute("style", "display:none");

    document.getElementById("js").setAttribute("src","images/solutions/solution9.png");
    document.getElementById("js").setAttribute("style", "display:none");

    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
 
}

function p10Func(){
    document.getElementById("problem").innerHTML=
    "<p> Devise an algorithm to receive a positive number, as n, and output n! (n Factorial). </p>"

    document.getElementById("flowchart").setAttribute("src","images/flowcharts/flowchart10.jpg");
    document.getElementById("flowchart").setAttribute("style", "display:none");

    document.getElementById("js").setAttribute("src","images/solutions/solution10.png");
    document.getElementById("js").setAttribute("style", "display:none");

    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
 
}

function p11Func(){
    document.getElementById("problem").innerHTML=
    "<p> Devise an algorithm to input an integer greater than 1, as n, and output the first n values of the Fibonacci sequence."+
    "In Fibonacci sequence, the first two values are 0 and 1 and other values are sum of the two values preceding it."+
    "For instance, if the input is 4, the program should print 0, 1, 1, 2,. As another example, if the input is 9,"+ 
    "the program should output 0, 1, 1, 2, 3, 5, 8, 13, 21,</p>"

    document.getElementById("flowchart").setAttribute("src","images/flowcharts/flowchart11.jpg");
    document.getElementById("flowchart").setAttribute("style", "display:none");

    document.getElementById("js").setAttribute("src","images/solutions/solution11.png");
    document.getElementById("js").setAttribute("style", "display:none");

    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
 
}

function p12Func(){
    document.getElementById("problem").innerHTML=
    "<p> Devise an algorithm to input a positive integer, n, – and by using XX characters – output the figure below"+ 
    "that has n rows and each row k has k pairs of XX. "+
    "For instance, if input is 5, the figure on the left (and if the input is 12, "+
    "the figure on the right) should be generated by the program. </p>"

    document.getElementById("flowchart").setAttribute("src","images/flowcharts/flowchart12.jpg");
    document.getElementById("flowchart").setAttribute("style", "display:none");

    document.getElementById("js").setAttribute("src","images/solutions/solution12.png");
    document.getElementById("js").setAttribute("style", "display:none");

    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
 
}

function p13Func(){
    document.getElementById("problem").innerHTML=
    "<p>Determines if a natural number is prime or not</p>"

    document.getElementById("flowchart").setAttribute("src","images/flowcharts/flowchart13.jpg");
    document.getElementById("flowchart").setAttribute("style", "display:none");

    document.getElementById("js").setAttribute("src","images/solutions/solution13.png");
    document.getElementById("js").setAttribute("style", "display:none");

    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
 
}

function p14Func(){
    document.getElementById("problem").innerHTML=
    "<p>Receives 8 numbers and outputs “yes” if sum of the "+
    "first 4 numbers is equal to sum of the last 4 numbers</p>"

    document.getElementById("flowchart").setAttribute("src","images/flowcharts/flowchart14.jpg");
    document.getElementById("flowchart").setAttribute("style", "display:none");

    document.getElementById("js").setAttribute("src","images/solutions/solution14.png");
    document.getElementById("js").setAttribute("style", "display:none");

    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
 
}

function p15Func(){
    document.getElementById("problem").innerHTML=
    "<p>Receives natural numbers until a 0 is entered or "+
    "number of positive values is more than twice negative ones</p>"

    document.getElementById("flowchart").setAttribute("src","images/flowcharts/flowchart15.jpg");
    document.getElementById("flowchart").setAttribute("style", "display:none");

    document.getElementById("js").setAttribute("src","images/solutions/solution15.png");
    document.getElementById("js").setAttribute("style", "display:none");

    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
 
}

function p16Func(){
    document.getElementById("problem").innerHTML=
    "<p> Receives 8 numbers and outputs “yes” if number of "+
    "negative values in the first half is equal to the number "+
    "of positive values in the second half</p>"

    document.getElementById("flowchart").setAttribute("src","images/flowcharts/flowchart16.jpg");
    document.getElementById("flowchart").setAttribute("style", "display:none");

    document.getElementById("js").setAttribute("src","images/solutions/solution16.png");
    document.getElementById("js").setAttribute("style", "display:none");

    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
 
}

function p17Func(){
    document.getElementById("problem").innerHTML=
    "<p>Print all prime numbers less "+
    " than or equal to a certain input</p>"

    document.getElementById("flowchart").setAttribute("src","images/flowcharts/flowchart17.jpg");
    document.getElementById("flowchart").setAttribute("style", "display:none");

    document.getElementById("js").setAttribute("src","images/solutions/solution17.png");
    document.getElementById("js").setAttribute("style", "display:none");

    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
 
}

function p18Func(){
    document.getElementById("problem").innerHTML=
    "<p>Devise an algorithm to receive a positive number, n, and output "+
    "all prime numbers that are smaller than n "+
    "and have a digit 7. For example, if n is 100, the program should "+
    "output 7, 17, 37, 47, 67, 71, 73, 79, and 97</p>"

    document.getElementById("flowchart").setAttribute("src","images/flowcharts/flowchart18.jpg");
    document.getElementById("flowchart").setAttribute("style", "display:none");

    document.getElementById("js").setAttribute("src","images/solutions/solution18.png");
    document.getElementById("js").setAttribute("style", "display:none");

    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
 
}

function p19Func(){
    document.getElementById("problem").innerHTML=
    "<p> Write a flowchart to input a whole number and output “It’s PERFECT” if "+
    "the input is a “perfect number”; otherwise, it should output “It’s IMperfect”. A “perfect number” is"+
    "a positive whole number that is equal to the sum of all its positive divisors except itself. For example,"+
    "12 is imperfect because its divisors 1, 2, 3, 4, 6 do not sum to 12</p>"

    document.getElementById("flowchart").setAttribute("src","images/flowcharts/flowchart19.jpg");
    document.getElementById("flowchart").setAttribute("style", "display:none");

    document.getElementById("js").setAttribute("src","images/solutions/solution19.png");
    document.getElementById("js").setAttribute("style", "display:none");

    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
 
}

function p20Func(){
    document.getElementById("problem").innerHTML=
    "<p>Write a flowchart to input 40 numbers and output “yes” if number of negative "+
    "values among the first 10 inputs is equal to number of positive values among the "+
    "last 10 inputs. Note. The 20 numbers in middle are ignored</p>"

    document.getElementById("flowchart").setAttribute("src","images/flowcharts/flowchart20.jpg");
    document.getElementById("flowchart").setAttribute("style", "display:none");

    document.getElementById("js").setAttribute("src","images/solutions/solution20.png");
    document.getElementById("js").setAttribute("style", "display:none");

    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
 
}

function p21Func(){
    document.getElementById("problem").innerHTML=
    "<p> Write a flowchart to input numbers until 0 is entered and then output the maximum number "+
    "of consecutive 1s that were entered. For example, if the entered values are 1,2,4,5,1,1,3,4,1,1,1,8,6,1,1,3,2,0, "+
    "the program should output 3 since the maximum number of consecutive 1s is 3. </p>"

    document.getElementById("flowchart").setAttribute("src","images/flowcharts/flowchart21.jpg");
    document.getElementById("flowchart").setAttribute("style", "display:none");

    document.getElementById("js").setAttribute("src","images/solutions/solution21.png");
    document.getElementById("js").setAttribute("style", "display:none");

    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
 
}

function p22Func(){
    document.getElementById("problem").innerHTML=
    "<p> Devise an algorithm to first input n, as the number of digits of a binary number. Then, it "+
    "should input all digits of that binary number and convert the number to decimal. For example, if 5" +
    "is entered for n, the program should receive 5 binary digits, let’s say they are 1, 1, 0, 0, 1 "+
    "then the program should output 25 because 1*24 + 1*23 + 0*22 + 0*21 + 1*20 =25.  </p>"

    document.getElementById("flowchart").setAttribute("src","images/flowcharts/flowchart22.jpg");
    document.getElementById("flowchart").setAttribute("style", "display:none");

    document.getElementById("js").setAttribute("src","images/solutions/solution22.png");
    document.getElementById("js").setAttribute("style", "display:none");

    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
 
}

function p23Func(){
    document.getElementById("problem").innerHTML=
    "<p> Write a flowchart to input a whole number and output “This number is self-dividing” if the "+
    "input is a “self-dividing number”; otherwise, it should output “This number is NOT selfdividing”."+
    "A “self-dividing number” is a number that is divisible by every digit it contains. Note that in "+
    "addition, a self-dividing number is not allowed to contain the digit zero. For example,"+ 
    "128 is a self-dividing number because 1, 2, and 8 are all divisors of 128. </p>"

    document.getElementById("flowchart").setAttribute("src","images/flowcharts/flowchart23.jpg");
    document.getElementById("flowchart").setAttribute("style", "display:none");

    document.getElementById("js").setAttribute("src","images/solutions/solution23.png");
    document.getElementById("js").setAttribute("style", "display:none");

    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
 
}

function p24Func(){
    document.getElementById("problem").innerHTML=
    "<p>. Output whether the sum of the input is a negative or positive number."+
     +"Continue receiving numbers until a zero is received.</p>"

    document.getElementById("flowchart").setAttribute("src","images/flowcharts/flowchart24.jpg");
    document.getElementById("flowchart").setAttribute("style", "display:none");

    document.getElementById("js").setAttribute("src","images/solutions/solution24.png");
    document.getElementById("js").setAttribute("style", "display:none");

    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
 
}

function p25Func(){
    document.getElementById("problem").innerHTML=
    "<p>. Draw a flowchart to receive numbers, and if that number is greater than the previous"+
    "number, continue. Output the greatest number.</p>"

    document.getElementById("flowchart").setAttribute("src","images/flowcharts/flowchart25.jpg");
    document.getElementById("flowchart").setAttribute("style", "display:none");

    document.getElementById("js").setAttribute("src","images/solutions/solution25.png");
    document.getElementById("js").setAttribute("style", "display:none");

    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
 
}

function p26Func(){
    document.getElementById("problem").innerHTML=
    "<p>Receive a number. Then receive more numbers (equal to the first number received)."+ 
    "Output the total number of positive and negative numbers (any zeros received are ignored).</p>"

    document.getElementById("flowchart").setAttribute("src","images/flowcharts/flowchart26.jpg");
    document.getElementById("flowchart").setAttribute("style", "display:none");

    document.getElementById("js").setAttribute("src","images/solutions/solution26.png");
    document.getElementById("js").setAttribute("style", "display:none");

    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
 
}

function p27Func(){
    document.getElementById("problem").innerHTML=
    "<p>Receive a number. Then receive more numbers (equal to the first number received)."+ 
    "Output the total number of positive and negative numbers (any zeros received are ignored)."+
    "solve this using while loop</p>"

    document.getElementById("flowchart").setAttribute("src","images/flowcharts/flowchart27.jpg");
    document.getElementById("flowchart").setAttribute("style", "display:none");

    document.getElementById("js").setAttribute("src","images/solutions/solution27.png");
    document.getElementById("js").setAttribute("style", "display:none");

    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
 
}

function p28Func(){
    document.getElementById("problem").innerHTML=
    "<p>draw a flowchart for a program to receive 8 numbers and it will output 'yes' if the sum of the"+
    "first four numbers is equal to the sum of the last four numbers, otherwise it will output 'no'</p>"

    document.getElementById("flowchart").setAttribute("src","images/flowcharts/flowchart28.jpg");
    document.getElementById("flowchart").setAttribute("style", "display:none");

    document.getElementById("js").setAttribute("src","images/solutions/solution28.png");
    document.getElementById("js").setAttribute("style", "display:none");

    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
 
}

function p29Func(){
    document.getElementById("problem").innerHTML=
    "<p>draw a flowchart for a program to calculate the sum of numbers from 10 to 30</p>"

    document.getElementById("flowchart").setAttribute("src","images/flowcharts/flowchart29.jpg");
    document.getElementById("flowchart").setAttribute("style", "display:none");

    document.getElementById("js").setAttribute("src","images/solutions/solution29.png");
    document.getElementById("js").setAttribute("style", "display:none");

    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
 
}

function p30Func(){
    document.getElementById("problem").innerHTML=
    "<p>draw a flowchart for a program to receive 2 positive number and calculate their product without using multiplication function</p>"

    document.getElementById("flowchart").setAttribute("src","images/flowcharts/flowchart30.jpg");
    document.getElementById("flowchart").setAttribute("style", "display:none");

    document.getElementById("js").setAttribute("src","images/solutions/solution30.png");
    document.getElementById("js").setAttribute("style", "display:none");

    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
 
}

function p31Func(){
    document.getElementById("problem").innerHTML=
    "<p>draw a flowchart for a program to output the factorial of numbers from 1 to 10.</p>"

    document.getElementById("flowchart").setAttribute("src","images/flowcharts/flowchart31.jpg");
    document.getElementById("flowchart").setAttribute("style", "display:none");

    document.getElementById("js").setAttribute("src","images/solutions/solution31.png");
    document.getElementById("js").setAttribute("style", "display:none");

    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
 
}
function p32Func(){
    document.getElementById("problem").innerHTML=
    "<p>draw a flowchart for a program to output the sum of the prime numbers less than and equal to 100</p>"

    document.getElementById("flowchart").setAttribute("src","images/flowcharts/flowchart32.jpg");
    document.getElementById("flowchart").setAttribute("style", "display:none");

    document.getElementById("js").setAttribute("src","images/solutions/solution32.png");
    document.getElementById("js").setAttribute("style", "display:none");

    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
 
}
function p33Func(){
    document.getElementById("problem").innerHTML=
    "<p>draw a flowchart for a program to receive a number and calculate the sum of 100 numbers"+
    "after the number for example if the number 10 received the output should be 10+11+12+…+110</p>"

    document.getElementById("flowchart").setAttribute("src","images/flowcharts/flowchart33.jpg");
    document.getElementById("flowchart").setAttribute("style", "display:none");

    document.getElementById("js").setAttribute("src","images/solutions/solution33.png");
    document.getElementById("js").setAttribute("style", "display:none");

    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
 
}
function p34Func(){
    document.getElementById("problem").innerHTML=
    "<p>. draw a flowchart for a program to receive a number and calculate the sum of next 10 factorials."+
    "for example if input 2 the program should calculate 2!+3!+4!+...+11!</p>"

    document.getElementById("flowchart").setAttribute("src","images/flowcharts/flowchart34.jpg");
    document.getElementById("flowchart").setAttribute("style", "display:none");

    document.getElementById("js").setAttribute("src","images/solutions/solution34.png");
    document.getElementById("js").setAttribute("style", "display:none");

    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
 
}
function p35Func(){
    document.getElementById("problem").innerHTML=
    "<p>draw a flowchart for a program to receive value n and produce a multiplication table size n</p>"

    document.getElementById("flowchart").setAttribute("src","images/flowcharts/flowchart35.jpg");
    document.getElementById("flowchart").setAttribute("style", "display:none");

    document.getElementById("js").setAttribute("src","images/solutions/solution35.png");
    document.getElementById("js").setAttribute("style", "display:none");

    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
 
}
function p36Func(){
    document.getElementById("problem").innerHTML=
    "<p>devise an algorithm to show the differnece between two numbers</p>"

    document.getElementById("flowchart").setAttribute("src","images/flowcharts/flowchart36.jpg");
    document.getElementById("flowchart").setAttribute("style", "display:none");

    document.getElementById("js").setAttribute("src","images/solutions/solution36.png");
    document.getElementById("js").setAttribute("style", "display:none");

    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
 
}
function p37Func(){
    document.getElementById("problem").innerHTML=
    "<p>draw a flowchart  for a program to output the palindrome numbers less than equal to 100</p>"

    document.getElementById("flowchart").setAttribute("src","images/flowcharts/flowchart37.jpg");
    document.getElementById("flowchart").setAttribute("style", "display:none");

    document.getElementById("js").setAttribute("src","images/solutions/solution37.png");
    document.getElementById("js").setAttribute("style", "display:none");

    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
 
}
function p38Func(){
    document.getElementById("problem").innerHTML=
    "<p>Draw a flowchart to receive a positive number (in base 10) and output its binary"+
    " representation (base 2). You are not allowed to use any built-in function to convert the number—such"+
    " as parseInt() or any other function. Instead, you should use some loops and convert the number"+
    " through a computational process</p>"

    document.getElementById("flowchart").setAttribute("src","images/flowcharts/flowchart38.jpg");
    document.getElementById("flowchart").setAttribute("style", "display:none");

    document.getElementById("js").setAttribute("src","images/solutions/solution38.png");
    document.getElementById("js").setAttribute("style", "display:none");

    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
 
}
function p39Func(){
    document.getElementById("problem").innerHTML=
    "<p>: Draw a flowchart to receive two positive whole numbers and compute their Greatest"+
    "Common Divisor, using the following Euclidean technique. If the inputs are 64 and 12,</p>"

    document.getElementById("flowchart").setAttribute("src","images/flowcharts/flowchart39.jpg");
    document.getElementById("flowchart").setAttribute("style", "display:none");

    document.getElementById("js").setAttribute("src","images/solutions/solution39.png");
    document.getElementById("js").setAttribute("style", "display:none");

    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
 
}
function p40Func(){
    document.getElementById("problem").innerHTML=
    "<p>: Draw a flowchart to receive a positive whole number and determine how many of its digits"+
    "in odd positions are 7. For instance, if the input is 6475672, the output should be 1 because there is only"+
    "one 7 in an odd position (position 5). As another example, if the input is 12345, the output should be 0. </p>"

    document.getElementById("flowchart").setAttribute("src","images/flowcharts/flowchart40.jpg");
    document.getElementById("flowchart").setAttribute("style", "display:none");

    document.getElementById("js").setAttribute("src","images/solutions/solution40.png");
    document.getElementById("js").setAttribute("style", "display:none");

    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
 
}



 