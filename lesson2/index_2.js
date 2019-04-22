'use strict';

// if (2 * 4 == 7) {
//     console.log('Верно!');
// } else {
//     console.log('Неверно!');
// }


// let num = 50;

// // if (num < 49) {
// //     console.log('Неверно!');
// // } else if (num > 100) {
// //     console.log('Много!');
// // } else {

// // }

// // (num == 50) ? console.log('Верно!'): console.log('Неверно!');

// switch (true) {
//     case num < 49:
//         console.log('Неверно!');
//         break;
//     case num > 100:
//         console.log('Много!');
//         break;
//     case num > 80:
//         console.log('Все еще много!');
//         break;
//     case num == 50:
//         console.log('Верно!');
//         break;
//     default:
//         console.log('Что то пошло не так');
//         break;
// }

let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

do {
    console.log(num);
    num++;
}
while (num < 55);


for (let i = 1; i < 8; i++) {
    if (i == 6) {
        continue;
    }
    console.log(i);
}