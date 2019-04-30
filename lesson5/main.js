//touchstart
//touchmove
//touchend
//touchenter
//touchleave
//touchcancel

window.addEventListener('DOMContentLoaded', function () {
    let box = document.querySelector('.box');

    // box.addEventListener('touchstart', function (e) {

    //     e.preventDefault();
    //     console.log('Red Box: touchstart');
    //     console.log(e.target);
    //     console.log(e.touches[0].target);
    //     console.log(e.changedTouches);
    //     console.log(e.targetTouches);
    // });

    box.addEventListener('touchmove', function (e) {

        e.preventDefault();
        console.log('Red Box: ' + e.touches[0].pageX);
    });

    // new RegExp('pattern', 'flags');
    // /pattern/

    // let ans = prompt('Введите ваше имя', '');

    // let reg = /n/gi;

    // // console.log(ans.search(reg));
    // // console.log(ans.match(reg));
    // console.log(reg.test(ans));

    //i
    //g
    //M

    // \d   число
    // \w   буква
    // \s   пробел

    // let pass = prompt('Ведите пароль', '');

    // console.log(pass.replace(/./g, '*'));
    // alert('23-65-92'.replace(/-/g, ':'));

    // box.addEventListener('touchend', function(e) {

    //     e.preventDefault();
    //     console.log('Red Box: touchend');
    // });

    // let ans = prompt('Введите число', '');

    // let reg = /\d/g;

    // console.log(ans.match(reg));


    let str = 'My name is / R2D2';

    console.log(str.match(/\w\d\w\d/i));
    console.log(str.match(/\//i));
    console.log(str.match(/ /ig));
});