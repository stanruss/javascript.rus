// document.write ("Hello world");
// var strin;
// strin = "Hello world";
// var float;
// float = 2.18;
// document.write ("<br>namber " + strin +"&nbsp;" + float);
// var x = 25;
// var y;
// y = -21;
// var result;
// result = x / y;
// document.write("<br>" + result);
// result += x;
// document.write("<br>" + result);
// result -= y;
// document.write("<br>" + result);
// result ++;
// document.write("<br>" + result);
// result --;
// document.write("<br>" + result);
// document.write("<br>");
// document.write(x + " + " + y + " = " + (x+y));
// document.write("<br>");
// var str_1 = 12;
// var str_2 = Number(24);
// document.write(Number(str_1) + str_2);
// var fool;
// var z = 6;
// var d = 7;
// fool = z < d 
// document.write("<br>" + fool);
// document.write("<br>");
// document.write(10 + " % " + 7 + " = " + (10 % 7));
// document.write("<br>");
// var z = 3;
// var d = 4;
// var fool = false;
// if (z < d && fool == true) {
// 	document.write("прав");
// } else if (z > d || fool == false) {
// 	document.write("неправ");
// } else if (z != d) {
//   document.write("мб");
// } else {
// 		document.write("ok");
// }; 
// document.write("<br>");
/* var result = 6;
switch(result) {
	case 1: document.write("result = 1"); break;
	case 2: document.write("result = 2"); break;
	case 3: document.write("result = 3"); break;
	case 4: document.write("result = 4"); break;
	case 5: document.write("result = 5"); break;
	default: document.write("result > 5");
};
document.write("<br>");
z < d ? document.write("прав") : document.write("неправ"); */

// for (var i = 0; i <= 10; i++) {
// 	if (i % 4 == 0 && i != 0) continue;
// 	if (i == 8) break;
// 	document.write(i + "<br>")
// };
// var i = 0;
// while ( i <= 10) {
// document.write(i + "&nbsp;");
// i += 4;
// };
// var y = 1000;
// do {
// document.write( " <br> Цикл сработал");
// } while (y < 100);
// var person;
// // alert("Hello " + person);
// if(confirm("Are you shure?")) {
// 	person = prompt("Hi, whats your name?");
// 	alert("Hello " + person);
// } else {
// 	alert("Sorry " + person);
// };
var arr = new Array("str", 1.23, 7, false);
for (var i = 0; i < arr.length; i++) {
document.write("<br>" + arr[i]);
};
arr = new Array();
for (i = 0; i < 10; i++) {
	arr[i] = i * 3;
	document.write(arr[i] + "<br>");
};
var summ = 0;
for (i = 0; i < arr.length; i++)
	summ += arr[i];
	document.write("<br> Суммма - " + (summ / arr.length));
var arr_1 = new Array();
var arr_2 = new Array();
var arr_3 = new Array();
for (i = 0; i < 5; i++) arr_1[i] = i;
for (i = 0; i < 10; i++) arr_2[i] = i;
for (i = 0; i < 15; i++) arr_3[i] = i;
var arr = new Array(arr_1, arr_2, arr_3);
document.write("<br>");
for (var x = 0; x < arr.length; x++) {
	for (var g = 0; g < arr[x].length; g++) {
		document.write(arr[x] [g] + " ");
	};
};
