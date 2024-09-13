let result = document.getElementById("result");
let points = [34, 94, 54, 101, 5, 41];
let message = document.getElementById("msg");

function ascending() {
   message.innerHTML = "Array in ascending order"
   result.innerHTML = points.sort(function (a, b) { return a - b })
}

function descending() {
   message.innerHTML = "Array in descending order"
   result.innerHTML = points.reverse(function (a, b) { return a + b })
}