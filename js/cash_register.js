
console.log("cashhhh me outside");

let calcMod = calculatorModule();

let bal = 0;

let num1 = 0;
let num2 = 0;

var allButtons = document.getElementsByClassName("allbtn");
    for(var i = 0; i < allButtons.length; i++ ){
        allButtons[i].addEventListener('click', function(){
            updateDisplay(this.value);
        })
    }
var operatorButtons = document.getElementsByClassName('operators');
    for(var i = 0; i < operatorButtons.length; i++){

    }



var equal1 = document.getElementById("equal").addEventListener('click', function(){execute(num1,'add',num2)})

function execute(x,y,z){
    calcMod._total = x;
    calcMod[y] = z;
    document.getElementById('display').innerHTML = calcMod.getTotal();
}

function updateDisplay(num){
    var update = document.getElementById("display");
    update.innerHTML += num;
}

document.getElementById('clear').addEventListener('click',resetDisplay);
function resetDisplay (){
    var reset = document.getElementById('display').innerHTML = null;
}

document.getElementById("getBal").addEventListener('click',getBalance);
function getBalance (){
    var balance = document.getElementById('display').innerHTML = bal;
}



