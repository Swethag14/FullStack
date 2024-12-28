//if statement 
a=10
if(a==10)
{
    console.log(a,"is even");
}
else{
    console.log(a,"is odd");
}
//array
array = [10,20,30,[1,2,3,4],"a","KEC",true]
console.log(array);
//object
obj = {
    "Firstname" : "John",
    "Lastname"  : "David",
    "Age"       : 23,
}
console.log(obj);
//type2
object = {};
console.log(object);
//type3 
obj2 = new Object();
console.log(obj2);
//use this if we want to change in future//type4
obj1 = {}
obj1["movie"] = "Leo"
obj1["year"] = 2023
obj1["budget"] = "100cr"
obj1["actor"] = "Vijay"
console.log(obj1);
console.log(obj1.actor);
//type5
obj3 = new Object()
obj3["phone"] = "Vivo"
obj3["store"] = "Play store"
obj3["game1"] = "Candy crush"
obj3["game2"] = "Chess"
console.log(obj3);
//for loop
for (i=1; i<=5; i++)  
{  
    console.log(i);
}  
//while loop
var i=11;  
while (i<=15)  
{  
console.log(i);  
i++;  
}  
//do while loop
var i=21;  
do{  
console.log(i);  
i++;  
}while (i<=25); 
//for of for in
var arr = [3, 5, 7];
arr.a = "hello";
//for of 
for (var i in arr) {
  console.log(i); 
}
//for in  
for (var i of arr) {
  console.log(i); 
}
//assignment operator
a = 10
console.log(a);

a++;
console.log(a);
//arithmetic operator
b = a + 2
console.log(b);
//relational operator
if(b > a)
{
    console.log("B is greater");
}
//logical operator
if(a > 5 && b > 10)
{
    console.log("True");
}
//ternary operator
age = 15
let voteable = (age < 18) ? "Too young":"Old enough";
console.log(voteable);
//bitwise operator
x = 5 & 1;
console.log(x);
//unary operator
c = 6 ;
y = c++;
console.log(y);

//declaration.js
a="KEC"
console.log(a);
var b="AIML"
console.log(b);
const c= "https://kongu.ac.in"
console.log(c);
let d= 10;
console.log(d);
c=5;
console.log(c); 
