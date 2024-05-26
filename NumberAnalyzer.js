const numbers1 = [15, 22, 87, 41, 120]; 
const numbers2 = [17, 18, 35, 46, 49, 78, 99, 115, 136];

// Number Analyzer function
function numberAnalyzer (numbers) {
  
    //For loop
    for (var i = 0; i < numbers.length; i++) {
        
        let number = numbers[i];
        
        //If-else statement
        if (number <= 100) {
            if (number % 2 === 0) {
                console.log(`${number} is even`);
            }
        
            else if(number % 2 === 1) {
                console.log(`${number} is odd`);
            }
        }
        
       else{
        console.log(`${number} is greater than 100`);
       }
        
    }

}

//Invoke function
numberAnalyzer(numbers2);