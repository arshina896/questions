// 1


let int = 10;
let char = 'a';
let float = 10.5;
let double = 20.1234567;
let boolean = true;

document.write('the integer=', int);
document.write('<br>the character=', char);
document.write('<br>the float=', float);
document.write('<br>the double=', double);
document.write('<br>the boolean=', boolean);

// 2
document.write('<br>')
console.log("Hello World");
document.write("Hello World")
// alert("Hello World")
// 3
let num1 = 3;
let num2 = 4;
let sum = num1 + num2;
document.write('<br>sum of tow numbers = ', sum);
// 4
let diff = num1 - num2;
document.write('<br> difference = ', diff)
// 5
cube = num1 * num1 * num1;
document.write('<br> cube of a number = ', cube);
// 6
let s1 = 2;
let s2 = 3;
let d;
document.write('<br> before swap s1= ', s1, '    s2 = ', s2);
d = s1;
s1 = s2;
s2 = d;
document.write('<br> after swap s1= ', s1, '    s2 = ', s2);
// 7 factorial
function factorial(n) {
    let fact = 1;
    for (let i = 2; i <= n; i++) {
        fact = fact * i;

    }
    return fact;
}
let n=5;
document.write('<br>factorial of 5', factorial(n));
// 8
let x=10;
let y=8;
document.write(x>y? "<br>x is large" :"y is largest");
// 9
let l1=20;
let l2=30;
let l3=40;
if (l1>l2 && l1>l3) {
    document.write('<br>the large number of 3 number',l1);
} else if (l2>l1 && l2>l3) {
    document.write('<br>the large number of 3 number',l2);
} else{
    document.write('<br>the large number of 3 number',l3);
}
// 10
let test =98;
if ((test%2)==0) {
    document.write('<br>the ',test,' is even')
} else {
    document.write('<br> the ',test,' is not  even')
}
// 11

