/*
var response = prompt("type something into response");
// response stores the input that you entered in the prompt

var number1 = 10000;
var number2 = 6789;
var product = number1*number2;
console.log(response);
*/

var firstPart = "Hello ";

var name = prompt(" Please Type in your Name. ")

var favFood1 = "steak";
var favFood2 = "pizza";
var favFood3 = "noodles";
var delimiter = ", ";
var secondPart =   " How are you ? " + " " + name;

//var thirdPart = " I see that you like to eat: " + favFood1 + ", " + favFood2 + ", " + favFood3+".";

var thirdPart = " I see that you like to eat: " + favFood1 + delimiter + favFood2 + delimiter + favFood3 + ".";

var foodSentence = firstPart + name + "." + thirdPart;

console.log(foodSentence);

 var solution = Math.round(7.87);
 var solution2 = Math.random(); // gets you a number btwn 0 - 1
 console.log(solution2);

/*
var cheese = Math.random();
var a = [true, “hello”, 300, cheese];
 console.log(a[2]);
*/



var days = ["sunday", "monday","tuesday","wednesday","thursday","friday","saturday"];

var favoriteDay = days[6];

days[2] = "TUESDAY";  // changing values in the array via assignment of values
days[7] = "Happyday";
days[10] = "newday";
console.log(days);

days.splice(4,0, "newvalueday");   // insert new value at wednesday - tricky

console.log(days);


//  var isItRaining = false;
/*
var isItRaining = prompt("Is it raining?");  // makes it true

console.log( typeof isItRaining )

console.log(sentence);
*/
/*
if (isItRaining="Yes") {
  console.log("it is raining ")
} else if (isItRaining="yes") {
  console.log("careful , it is raining.  Learn English")
}
else {

  console.log("enjoy your day, it's not raining")

}
*/

//https://alligator.io/react/
//-------------------------------
