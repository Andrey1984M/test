// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log('Hello! ' + this.name);
//     }
// }

// User.prototype.exit = function(name) {
//     console.log('Пользователь ' + this.name + ' ушел');
// }

// let ivan = new User('Ivan', 25),
//     alex = new User('Alex', 20);

// console.log(ivan);
// console.log(alex);

// ivan.hello();

// ivan.exit();


// function showThis(a, b) {  // 1) Просто вызов функции - windiw/indefined
//     console.log(this);

//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(4, 5);
// showThis(5, 5);

// let obj = { // 2) Метод объекта - this = объект
//     a: 20,
//     b: 15,
//     sum: function () {
//         console.log(this);

//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };
// obj.sum();

// let user = {
//     name: 'John'
// };

// function sayName(surname) {// 4) Указание конкретного контекста - call, apply, bind.
//     console.log(this);
//     console.log(this.name + surname);
// }
// // sayName.call(user);
// console.log(sayName.call(user, ' Smith'));
// console.log(sayName.apply(user, [' Show']));

// function count(number) { 
//     return this * number;
// }
// let double = count.bind(2);

// console.log(double(2));
// console.log(double(10));

// 3) Конструктор (new) - this = новый созданный объект

// let btn = document.querySelector('button');

// btn.addEventListener('click', function() {
//     console.log(this);
//     this.style.background = 'red';
//     function showThis() {
//         console.log(this);
//     }
//     showThis();
// });

let age = document.getElementById('age');
function showUser(surname, name) {
	alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
showUser.apply(age, ['Горький', 'Максим']);