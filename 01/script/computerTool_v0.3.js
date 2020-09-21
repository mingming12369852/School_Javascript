
// ========Value===
var a = prompt("a=__");
var b = prompt("b=__");

var rrr = 0; // 
// ========Try=====
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

function show(answer, algorithm) {
    document.write(a + algorithm + b + "=" + answer + '<br>')
}


//-------

//2020年9月21日 (星期一) (GMT+8) 下午2:54
