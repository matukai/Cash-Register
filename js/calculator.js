console.log("hello from calculator.js");


function calculatorModule(){
    
            let _total = 0;
            let _memory = 0;
    
        function load(num){
            if(typeof num === 'number'){
            return _total = num
            }else{
            return error;
            }
        }
    
    
        function getTotal(){
          return _total;
        }
    

        function add(num){
            if(typeof num === 'number'){
                return _total += num
            }else{
                return error
            }
        }
    

        function subtract(num){
            if(typeof num === 'number'){
                return _total -= num
            }else{
                return error
            }
        }
    

        function multiply(num){
            if(typeof num === 'number'){
                return _total *= num
            }else{
                return error
            }
        }

        function divide(num){
            if(typeof num === 'number'){
                return _total /= num
            }else{
                return error
            }
        }
        function recallMemory(){
            return _memory;
        }
        
        //edited so deposit may add several times
        function addMemory(){
            return _memory += _total;
        }
    
        function subtractMemory(){
            return _memory -= _total;
        }
    
        function clearMemory(){
            _memory = 0;
        }
    
        function validation(){
          if(num === 'number'){
              return _total = num;
          }else{
              return error
          }
        }
    
        return{
            load:load,
            getTotal:getTotal,
            add: add,
            subtract: subtract,
            multiply: multiply,
            divide: divide,
            recallMemory: recallMemory,
            addMemory: addMemory,
            subtractMemory: subtractMemory,
            clearMemory: clearMemory,
        }
    
    }