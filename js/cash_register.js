
console.log("cashhhh me outside");

let calc = calculatorModule();

var allButtons = document.getElementsByClassName("allbtn");
    for(var i = 0; i < allButtons.length; i++ ){
        allButtons[i].addEventListener('click', function(){
            updateDisplay(this.value);
        })
    }



    var operation = '';

    document.getElementById("equal").addEventListener("click", function(){
        
           if(operation === "add"){
                calc.add(+display.innerHTML);
                document.getElementById("display").innerHTML = calc.getTotal();
            } 
            else if(operation === "subtract"){
                calc.subtract(+display.innerHTML);
                document.getElementById("display").innerHTML = calc.getTotal();
            } else if(operation === "multiply"){
                calc.multiply(+display.innerHTML);
                document.getElementById("display").innerHTML = calc.getTotal();
            } else if(operation === "divide"){
                calc.divide(+display.innerHTML);
                document.getElementById("display").innerHTML = calc.getTotal();
            }
        });

    document.getElementById("plus").addEventListener("click", function(){
            operation = "add";
                var plusNumber = +display.innerHTML;
                calc.load(plusNumber);
                document.getElementById("display").innerHTML = "";
            });
    document.getElementById("minus").addEventListener("click", function(){
            operation = "subtract";
                var subtractNumber = +display.innerHTML;
                calc.load(subtractNumber);
                document.getElementById("display").innerHTML = "";
            });
    document.getElementById("multiply").addEventListener("click", function(){
            operation = "multiply";
                var multiplyNumber = +display.innerHTML;
                calc.load(multiplyNumber);
                document.getElementById("display").innerHTML = "";
            });
    document.getElementById("divide").addEventListener("click", function(){
            operation = "divide";
                var divideNumber = +display.innerHTML;
                calc.load(divideNumber);
                document.getElementById("display").innerHTML = "";
                });



function updateDisplay(num){
    var update = document.getElementById("display");
    update.innerHTML += num;
}

document.getElementById('clear').addEventListener('click',resetDisplay);
function resetDisplay (){
    var reset = document.getElementById('display').innerHTML = null;
}

document.getElementById("deposit").addEventListener("click", function(){
        var total = +display.innerHTML;
        calc.load(total);
        calc.addMemory();
        document.getElementById("display").innerHTML = "0";
    });

document.getElementById("getBal").addEventListener("click", function(){
        document.getElementById("display").innerHTML = calc.recallMemory();
        });

document.getElementById("withdraw").addEventListener("click", function(){
        var total = +display.innerHTML;
        calc.load(total);
        calc.subtractMemory();
        document.getElementById("display").innerHTML = "0";
        });
