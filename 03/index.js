var a = prompt("a=?") - 0;
var b = prompt("b=?") - 0;
var c = prompt("1.GCD(a,b) 2.LCM(a,b) 3.a^b ") - 0;


switch (c) {
  case 1:
    alert(gcd(a, b));
    break;
  case 2:
    alert(LCM(a, b));
    break;
  case 3:
    alert(pow(a, b));
    break;
  default:
    alert("wrong!!");
}

function gcd(a, b) {
  while (true) {
    r = a % b;
    if (r == 0) return b;
    else {
      a = b;
      b = r;
    }
  }
}

function LCM(a, b) {
  return (a * b) / gcd(a, b);
}

function pow(a, b) {
  var i = 1;
  var c = a;
  if (b == 0) a = 1;
  else {
    for (i = 1; i < b; i++) {
      c = c * a;
    }
    return c;
  }
  return a;
}
