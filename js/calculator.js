console.log("hello js");

/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
function calculatorModule(){
    
            let _total = 0;
            let _memory = 0;
      /**
       * sets the `total` to the number passed in
       * @param  { Number } x
       * @return { Number }    current total
       */
      function load(num){
        if(typeof num === 'number'){
            return _total = num
        }else{
            return error;
        }
        //return _total = num
      }
    
    
      /**
       * Return the value of `total`
       * @return { Number }
       */
      function getTotal(){
          return _total;
      }
    
      /**
       * Sums the value passed in with `total`
       * @param { Number } x
       */
        function add(num){
    
            //or use a validation function and type
            // validate(num)
    
            if(typeof num === 'number'){
                return _total += num
            }else{
                return error
            }
            //_total +=num
        }
    
      /**
       * Subtracts the value passed in from `total`
       * @param  { Number } x
       */
        function subtract(num){
            if(typeof num === 'number'){
                return _total -= num
            }else{
                return error
            }
            //_total -= num
        }
    
      /**
       * Multiplies the value by `total`
       * @param  { Number } x
       */
        function multiply(num){
            if(typeof num === 'number'){
                return _total *= num
            }else{
                return error
            }
           // _total *= num
        }
    
      /**
       * Divides the value passing in by `total`
       * @param  { Number } x
       */
        function divide(num){
            if(typeof num === 'number'){
                return _total /= num
            }else{
                return error
            }
            //_total /= num
        }
    
      /**
       * Return the value stored at `memory`
       * @return { Number }
       */
        function recallMemory(){
            return _memory
        }
    
      /**
       * Stores the value of `total` to `memory`
       */
        function saveMemory(){
            _memory = _total;
        }
    
      /**
       * Clear the value stored at `memory`
       */
        function clearMemory(){
            _memory = 0;
        }
    
      /**
       * Validation
       */
      let validity = function validation(){
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
            saveMemory: saveMemory,
            clearMemory: clearMemory,
        }
    
    }