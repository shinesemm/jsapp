// First ODD or EVEN
function odd_even(){
    var no;
    no=Number(document.getElementById("no_input").value);
    if(no%2==0)
    {
    alert("Even Number");
    }
    else
    {
    alert("Odd Number");
    }
    }

// Second to check prime number 

function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(test_prime(37));

// 3 Sum of Natural Numbers

var num = window.prompt("Enter the number:","");
var n = parseInt(num);
result = sumnaturalno(n);
window.alert("The sum of " + n + "natural number is" + result);
function sumnaturalno(n)
{
    var i;
    var sum = 0;
    for(i = 1;i <= n; i++){
        sum = sum + i;}
    return (sum);
}

// 4 Javascript Program to check Leap Year

year = window.prompt("Input a Year : ");
x = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
console.log(x);

//5 Javascript Program to find ASCII value of a character

function myFunction() {
    var str = prompt("Enter a char");
    var n = str.charCodeAt(0);
    document.getElementById("demo").innerHTML = n;
}

// 6 Javascript Program to Multiply two Numbers

function multiplyBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;
}

// 7 Javascript Program to Add two Numbers

function add(){
    var a,b,c;
    a=Number(document.getElementById("first").value);
    b=Number(document.getElementById("second").value);
    c= a + b;
    document.getElementById("answer").value= c;
    }

// 8 Javascript Program to reverse words in a String


function reverseString(str) {
    return str;
}
reverseString("hello");

// 9 Javascript Program to reverse an array

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;

function myFunction() {
    fruits.reverse();
    document.getElementById("demo").innerHTML = fruits;
}

// 10 Javascript Program to check Armstrong number

function armstr()
{
var arm=0,a,b,c,d,num;
num=Number(document.getElementById("no_input").value);

temp=num;
while(temp>0)
{
a=temp%10;
temp=parseInt(temp/10);
arm=arm+a*a*a;
}
if(arm==num)
{
alert("Armstrong number");
}
else
{
alert("Not Armstrong number");
}
}

// 11 Javascript Program to find Largest of three numbers

function largest()
	{
		var num1, num2, num3;
		num1 = Number(document.getElementById("N").value);
		num2 = Number(document.getElementById("M").value);
		num3 = Number(document.getElementById("O").value);

		if(num1>num2 && num1>num3)
		{
			window.alert(num1+"-is greatest");
		}
		else if(num2>num1 && num2>num3)
		{
			window.alert(num2+"-is greatst");
		}
		else if(num3>num1 && num3>num1)
		{
			window.alert(num3+"is greatest");
		}
    }
    

// 12 Javascript Program to get Input From User

function myFunction() {
    var person = prompt("Please enter your name", "Harry Potter");
    if (person != null) {
        document.getElementById("demo").innerHTML =
        "Hello " + person + "! How are you today?";
    }
}

// 13 Javascript Program to generate Random Number

function myFunction() {
    document.getElementById("demo").innerHTML = Math.random();
}

// 14 Javascript Program to Calculate Area of Rectangle

