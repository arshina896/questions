// Find the largest of two numbers.
function largest() {
    let fstNumber;
    let secNumber;
    fstNumber = parseFloat(document.getElementById("fst-num").value);
    secNumber = parseFloat(document.getElementById("sec-num").value);

    if (fstNumber > secNumber) {
        res.innerHTML = `the largest number is ${fstNumber} `;
    } else {
        res.innerHTML = `the largest number is ${secNumber} `;
    }
};
// ind the largest of three numbers.
function threeLarge() {
    let fstNum;
    let secNum;
    let thirdNum;
    fstNum = parseFloat(document.getElementById("fst").value);
    secNum = parseFloat(document.getElementById("sec").value);
    thirdNum = parseFloat(document.getElementById("trd").value);

    if ((fstNum > secNum) || (fstNum > thirdNum)) {
        largenum.innerHTML = `the largest number is ${fstNum} `;
    }
     else if ((secNum > fstNum) || (secNum > thirdNum)) {

        largenum.innerHTML = `the largest number is ${secNum} `;
    }
    else {
        largenum.innerHTML = `the largest number is ${thirdNum} `;
    }
};
// Check the given number is even or not
function even(){
let n= parseFloat(document.getElementById("num").value);
if (n%2==0) {
    evencheck.innerHTML = `${n} is even `;
}else{
    evencheck.innerHTML = `${n} is not even `;
}
};
// Check the given number is odd or not
function odd(){
    let n= parseFloat(document.getElementById("oddnum").value);
    if (n%2!=0) {
        oddcheck.innerHTML = `${n} is odd `;
    }else{
        oddcheck.innerHTML = `${n} is not odd `;
    }
    };
    // Check the given number is divisible by 2 and 5.
    function divisible(){
        let check= parseFloat(document.getElementById("chechdivisible").value);
        if ((check%2==0) && (check%5==0)) {
            divi.innerHTML = `${check} is divisible by 2 and 5`;
        }else{
            divi.innerHTML = `${check} is can not  divisible by 2 and 5`;
        }
    };