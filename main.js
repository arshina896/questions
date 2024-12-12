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
function even() {
    let n = parseFloat(document.getElementById("num").value);
    if (n % 2 == 0) {
        evencheck.innerHTML = `${n} is even `;
    } else {
        evencheck.innerHTML = `${n} is not even `;
    }
};
// Check the given number is odd or not
function odd() {
    let n = parseFloat(document.getElementById("oddnum").value);
    if (n % 2 != 0) {
        oddcheck.innerHTML = `${n} is odd `;
    } else {
        oddcheck.innerHTML = `${n} is not odd `;
    }
};
// Check the given number is divisible by 2 and 5.
function divisible() {
    let check = parseFloat(document.getElementById("chechdivisible").value);
    if ((check % 2 == 0) && (check % 5 == 0)) {
        divi.innerHTML = `${check} is divisible by 2 and 5`;
    } else {
        divi.innerHTML = `${check} is can not  divisible by 2 and 5`;
    }
};
function repeate() {
    let text = document.getElementById("count-text").value;
    let n = parseFloat(document.getElementById("count").value);

    for (let i = 0; i < n; i++) {

        reap.innerHTML += `${text} `;
    }
};
function concatString() {
    let fststring = document.getElementById("fst-string").value;
    let sec = document.getElementById("sec-string").value;
    let result = fststring.concat(sec);
    stringconcat.innerHTML = `${result}`;
};
function searchString() {
    let fststring = document.getElementById("searche-string").value;
    let word = document.getElementById("sub-word").value;
    if (fststring.includes(word)) {
        stringseacrch.innerHTML = `${word} is include this sentance`;
    } else {
        stringseacrch.innerHTML = `${word} is not  include this sentance`;
    }
};


// loop

// prime number check
function prime() {
    let num = parseInt(document.getElementById('check-prime').value);

    if (num === 1) {
        resu.innerHTML = "1 is neither prime nor composite.";
        return;
    }
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime == true) {
        resu.innerHTML = `${num} is a prime number.`;
    } else {
        resu.innerHTML = `${num} is not prime number.`;
    }
};
// palindrome
function palindrome() {
    let pli = document.getElementById('check-pali').value;
    const reversedNum = pli.split('').reverse().join('');
    if (pli === reversedNum) {
        palindro.innerHTML = `Yes, ${pli} is a palindrome.`;
    } else {
        palindro.innerHTML = `No, ${pli} is not a palindrome.`;
    }
};
// revers of a number
function reverseNumber() {
    let num = parseFloat(document.getElementById('number-reverse').value);
    let revers = 0;
    while (num > 0) {
        let s = num % 10;
        revers = revers * 10 + s;
        num = Math.floor(num / 10);
    }
    numrev.innerHTML = `reverse of this number is ${revers}`;
};

function numberToWords() {
    let num = parseFloat(document.getElementById('number-word').value);
    const words = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];

    word.innerHTML = `${words[num]}`;
};
// Reverse a string.
function reverseString() {
    let text = document.getElementById('str-rev').value;
    const reversedstr = text.split('').reverse().join('');
    revstr.innerHTML=`${reversedstr}`;
};