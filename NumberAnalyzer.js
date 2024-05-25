const numbers = [15, 22, 87, 41, 120]; 

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