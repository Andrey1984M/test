// let timeId = setTimeout(sayHello, 3000);

// clearTimeout(timeId);

// let timeId = setInterval(sayHello, 3000);

// clearTimeout(timeId);

// function sayHello() {
//     console.log('Hello');
// }

// let timeId = setTimeout(function log() {
//     console.log('Hello');
//     setTimeout(log, 2000);
// });

let btn = document.querySelector('.btn'),
    elem = document.querySelector('.box');

function myAnim() {
    let pos = 0;
    let id = setInterval(frame, 10);

    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
            console.log(elem.style.top + ' : ' + elem.style.left);
        }
    }
}

btn.addEventListener('click', myAnim);

let btnBlock = document.querySelector('.btn-block'),
    btns = document.getElementsByTagName('button');

btnBlock.addEventListener('click', function (event) {
    // if (event.target && event.target.tagName == 'BUTTON') {
    // if (event.target && event.target.classList.contains('first')) {
        if (event.target && event.target.matches('button.first')) {
        console.log('Hello');
    }
});