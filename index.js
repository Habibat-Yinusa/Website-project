function getAverage(a, b, c) {
  var average = (a + b + c) / 3;
  console.log(average);
  return average;
}

var result = getAverage(7, 8, 8);
document.write(result);
var string = "abc";
var string2 = "ABC";

console.log(string.toLowerCase === string2.toLowerCase);
var code = "1234";
if (code === "1234") {
  console.log("correct!");
} else {
  console.log("wrong code");
}
document.getElementById("hello").style.color = "red";
