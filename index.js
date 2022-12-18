const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

function game(correctNum, counter) {
    readline.question(`Угадай число от 1 до 10 `, num => {
        if (num == correctNum) {
            console.log('Вы угадали!');
            console.log('Число попыток: ' + counter);  
            readline.close();
            return;
        } else if (num < correctNum) {
            console.log('Больше!');    
        } else {
            console.log('Меньше!');    
        }

        counter++;
        
        game(correctNum, counter)
    })
}

game(Math.floor(Math.random() * 10), 1);