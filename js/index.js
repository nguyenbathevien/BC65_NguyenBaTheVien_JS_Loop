// Bài 1
document.getElementById("handleN").onclick = function () {
  var tong = 0;
  var n = 1;
  while (true) {
    tong += n;
    if (tong > 10000) {
      break;
    }
    n++;
  }
  document.getElementById("result1").innerHTML = `Số nhỏ nhất là ${n}`;
};

var x = 2;
var sum = 0;
var n = 4;
for (var i = 1; i <= n; i++) {
  sum += Math.pow(x, i);
}

// Bài 2
document.getElementById("handleSum").onclick = function () {
  var x = +document.getElementById("numberx").value;
  var n = +document.getElementById("numbern").value;
  var sum = 0;
  for (var i = 1; i <= n; i++) {
    sum += Math.pow(x, i);
  }
  document.getElementById("result2").innerHTML = `Tổng = ${sum}`;
};
document.getElementById("handleGiaiThua").onclick = function () {
  var giaithua = +document.getElementById("giaithua").value;
  var tich = 1;
  for (var i = 1; i <= giaithua; i++) {
    tich *= i;
  }
  document.getElementById("result3").innerHTML = `Giai Thừa = ${tich}`;
};
// Bài 4
document.getElementById("createButton").onclick = function () {
  createDivs();
};
function createDivs() {
  var print = document.getElementById("print");
  print.innerHTML = "";
  for (var i = 1; i <= 10; i++) {
    var div = document.createElement("div");
    div.className = "box";
    div.textContent = i; 
    if (i % 2 === 0) {
      div.style.backgroundColor = "red"; 
    } else {
      div.style.backgroundColor = "blue"; 
    }
    print.appendChild(div);
  }
}

// Bài 5
function inSoNguyenTo() {
  var inputValue = +document.getElementById("inputNumber").value;
  if (isNaN(inputValue) || inputValue <= 0) {
    alert("Vui lòng nhập vào số nguyên dương.");
    return;
  }

  var result5 = document.getElementById("result5");
  result5.innerHTML = ""; 
  for (var i = 2; i <= inputValue; i++) {
    if (isPrime(i)) {
      result5.innerHTML += i + " ";
    }
  }
}
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  var i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
}
