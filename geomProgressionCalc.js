function maxMoneyLeft(money, days, percent) {
    let allMoney = 0;
    for (let i = 0; i < days; i++) {
        money = money * percent;
        allMoney += money;
        i++
    }
    return Math.round(allMoney);
}

function maxMoney(money, days, percent) {
    let allMoney = 0;
    for (let i = 0; i < days; i++) {
        money = money * percent;
        i++
    }
    return Math.round(money);
}

// Чтение входных данных
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let money, days, percent;

rl.question('Введите изначальную сумму, кол-во дней и процент: ', (input) => {
    [money, days, percent] = input.trim().split(' ').map(Number);

    // Вызов функции и вывод результата
    console.log("Итоговая сумма: " + maxMoneyLeft(money, days, percent));
    console.log("Последняя цифра: " + maxMoney(money, days, percent));

    rl.close();
});