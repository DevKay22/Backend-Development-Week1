const numbers1 = [15, 22, 87, 41, 120]; 
const numbers2 = [17, 18, 35, 46, 49, 78, 99, 115, 136];

function numberAnalyzer (numbers) {
  

    for (var i = 0; i < numbers.length; i++) {
        
        let number = numbers[i];
    
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


numberAnalyzer(numbers2);