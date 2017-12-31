
console.log("cashhhh me outside");

let calcMod = calculatorModule();

let bal = 0;

let num1 = 0;

var allButtons = document.getElementsByClassName("allbtn");
    for(var i = 0; i < allButtons.length; i++ ){
        allButtons[i].addEventListener('click', function(){
            updateDisplay(this.value);
        })
    }

var add = document.getElementById('addition');
add.addEventListener('click',calcMod.add(num1));

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



