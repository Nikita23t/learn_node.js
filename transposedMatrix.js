const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Введите размер матрицы N и M через пробел: ', (NandM) => {
    let [n, m] = NandM.trim().split(' ').map(Number);

    rl.question(`Заполните элементы матрицы ${n}x${m} через пробел: `, (input) => {
        let elements = input.trim().split(' ').map(Number);

        let matrix = [];
        for (let i = 0; i < n; i++) {
            matrix.push(elements.slice(i * m, (i + 1) * m));
        }

        let transposedMatrix = matrix[0].map((col, c) => matrix.map((row, r) => matrix[r][c]));
        for (let i = 0; i < transposedMatrix.length; i++) {
            console.log(transposedMatrix[i].reverse().join(' '));
        }

        rl.close();
    });
});