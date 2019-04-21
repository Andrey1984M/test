var money = +prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    
var a = prompt('Введите обязательную статью расходов в этом месяце', ''),
    b = prompt('Во сколько обойдется?', '');

var appData = {
    budzet: money,
    timeData: time,
    expenses: {a, b},
    optionalExpenses: {},
    income: [],
    savings: false
};
alert(money/30);