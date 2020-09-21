
// ========Value===
var a = prompt("a=__");
var b = prompt("b=__");

var rrr = 0; // 
// ========Try=====
// add(a, b);
// subtract(a, b);
// multiply(a, b);
// divide(a, b);
// remainder(a, b);

computer(a, b,'+');
computer(a, b,'-');
computer(a, b,'*');
computer(a, b,'/');
computer(a, b,'%');


// ================
// ================

// ========Function

//-------
function add(a, b) {
    rrr = Number(a) + Number(b);
    show(rrr, '+');
}
function subtract() {
    rrr = Number(a) - Number(b);
    show(rrr, '-');
}
function multiply() {
    rrr = Number(a) * Number(b);
    show(rrr, '*');
}
function divide() {
    rrr = Number(a) / Number(b);
    show(rrr, '/');
}
function remainder() {
    rrr = Number(a) % Number(b);
    show(rrr, '%');
}
//-------

function computer(a, b, algorithm) {
    switch (algorithm) {
        case '+':
            rrr = Number(a) + Number(b);
            break;
        case '-':
            rrr = Number(a) - Number(b);
            break;
        case '*':
            rrr = Number(a) * Number(b);
            break;
        case '/':
            rrr = Number(a) / Number(b);
            break;
        case '%':
            rrr = Number(a) % Number(b);
            break;
    }

    show(rrr, algorithm);
}

//-------

function showType() {
    document.write("Type of: '", a, "' is ", typeof (a))
}







function show(answer, algorithm) {
    document.write(a + algorithm + b + "=" + answer + '<br>')
}


//-------

// ================
// ================

//
//2020年9月21日 (星期一) (GMT+8) 下午2:54

// ================
// ================
// String to Int
// u can user this function >>
//  1.Number();
//  2.parseInt();
//  3.parseFloat();


// var a,b,c,d;
// a = "8888";
// b = true;
// c = 8888;
// d = Number(a);