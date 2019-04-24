let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}
start();

var appData = {
    budzet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpense: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
                b = prompt('Во сколько обойдется?', '');
            if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
                a != '' && b != '' && a.length < 50) {
                console.log('OK');
                appData.expenses[a] = b;
            } else {
                i--;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budzet / 30).toFixed();
        alert('Ежедневный бюджет: ' + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка!');
        }
        console.log(appData);
    },
    checkSaving: function () {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?', ''),
                percent = +prompt('Под какой процент?', '');

            appData.monthIncome = save / 100 / 12 * percent;
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        let i = 1;

        while (i < 4) {
            let a = prompt('Статья необязательных расходов?', '');

            appData.optionalExpenses[i] = a;
            i++;
        }
        console.log(appData.optionalExpenses);
    },
    chooseIncome: function () {
        for (let i = 0; i < 1; i++) {
            let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
            if (typeof (items) === 'string' && items != '' && items != null) {
                appData.income = items.split(', ');
                appData.income.push(prompt('Может что-то еще?', ''));
                appData.income.sort();
            } else {
                i--;
            }
        }
        appData.income.forEach(function(item, i) {
            i++;
            alert('Способы дополнительного заработка: ' + i + ' - ' + item);
        });
    }
};

for (let key in appData) {
    console.log('Наша программа включает в себя данные: ' + key + " - " + appData[key]);
}


// let i = 0;
// while (i < 2) {
//     let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         b = prompt('Во сколько обойдется?', '');
//     if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
//         a != '' && b != '' && a.length < 50) {
//         console.log('OK');
//         appData.expenses[a] = b;
//     } else {
//        i--;
//     }

//     i++;
// }

// let i = 0;
// do {
//     let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         b = prompt('Во сколько обойдется?', '');
//     if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
//         a != '' && b != '' && a.length < 50) {
//         console.log('OK');
//         appData.expenses[a] = b;
//     } else {
//         i--;
//     }
//     i++;
// } while (i < 2);