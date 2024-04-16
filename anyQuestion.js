const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const arr = [];

rl.question('Введите количество оценок: ', (quantityMarks) => {
    let inputLength = 0;

    rl.question('Введите оценки через пробел: ', (input) => {
        const marks = input.split(' ').map(Number);
        inputLength += marks.length;
        arr.push(...marks);
        if (inputLength === Number(quantityMarks)) {
            let count = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === 5) {
                    count++;
                }
            }
            console.log(count === 0 ? -1 : count)
            rl.close();
        } else if (inputLength > Number(quantityMarks)) {
            console.log('Ошибка, вы ввели не верное количество оценок');
            rl.close();
        }
    });
});
