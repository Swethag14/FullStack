/*a=10
if(a==10)
{
    console.log(a,"is even");
}
else{
    console.log(a,"is odd");
}

array = [10,20,30,[1,2,3,4],"a","KEC",true]
console.log(array);

obj = {
    "Firstname" : "John",
    "Lastname"  : "David",
    "Age"       : 23,
}
console.log(obj);

object = {};
console.log(object);

obj2 = new Object();
console.log(obj2);
//use this if we want to change in future
obj1 = {}
obj1["movie"] = "Leo"
obj1["year"] = 2023
obj1["budget"] = "100cr"
obj1["actor"] = "Vijay"
console.log(obj1);
console.log(obj1.actor);

obj3 = new Object()
obj3["phone"] = "Vivo"
obj3["store"] = "Play store"
obj3["game1"] = "Candy crush"
obj3["game2"] = "Chess"
console.log(obj3);

for (i=1; i<=5; i++)  
{  
    console.log(i);
}  

var i=11;  
while (i<=15)  
{  
console.log(i);  
i++;  
}  

var i=21;  
do{  
console.log(i);  
i++;  
}while (i<=25); 

var arr = [3, 5, 7];
arr.foo = "hello";
    
for (var i in arr) {
  console.log(i); 
}
    
for (var i of arr) {
  console.log(i); 
}

a = 10
console.log(a);
a++;
console.log(a);
b = a + 2
console.log(b);
if(b > a)
{
    console.log("B is greater");
}
if(a > 5 && b > 10)
{
    console.log("True");
}
age = 15
let voteable = (age < 18) ? "Too young":"Old enough";
console.log(voteable);
x = 5 & 1;
console.log(x);
c = 6 ;
y = c++;
console.log(y);

function KEC(StudentDept)
{
    console.log(KEC(["AIML","CSE","IT"]))
}
arrowFun = (StudentDept) =>
{
    return(StudentDept[0])
}
console.log(arrowFun['AIML,CSE,IT',"AIML","CSE","IT"])

arrowFun = () =>
{
    console.log("Hello KEC");
}
arrowFun()

//destructuring
var marks = [10,20,30]
var [m1,m2,m3] = marks
console.log(m1,m2,m3);

//spread operator
Students1 = ["John","David","Rob"]
Students2 = ["ALice","Carrie","Daisy"]
newStudent = [...Students1,...Students2]
newStudent1 = [...Students1,"Harry"]
console.log(newStudent)
console.log(newStudent1)

//rest operator
function fun(...input) {
    let sum = 0;
    for (let i of input) {
        sum += i;
    }
    return sum;
}
console.log(fun(1, 2, 3)); 
console.log(fun(1, 2, 3, 4, 5));

//Scope
var a = 10;//global
console.log(a);
{
    let a = 5;//local
    console.log(a);
}
console.log(a);
*/











































