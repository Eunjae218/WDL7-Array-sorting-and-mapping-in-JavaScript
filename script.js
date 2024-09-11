a1
let message = document.getElementById("msg");
let result = document.getElementById("result");
let points = [34, 94, 54, 101, 5, 41]

function ascending() {
   message.innerHTML = "Array in ascending order"
   result.innerHTML = points.sort(function (a, b) { return a - b })
}

function descending() {
   message.innerHTML = "Array in descending order"
   result.innerHTML = points.reverse(function (a, b) { return a + b })
}

//a2
let resutl = document.getElementById("resutl")
let multiplynum = [24, 76, 63, 37]

function multen(num){
    return num*10
}

//resutl.innerHTML = multiplynum.map(multen)
console.log(multiplynum.map(multen))