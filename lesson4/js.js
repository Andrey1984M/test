let btn = document.querySelectorAll('button'),
wrap = document.querySelector('.wrapper'),
linc = document.querySelector('a');

// btn[0].onclick = function() {
//     alert('Вы нажали первую кнопку!');
// };

// btn[0].onclick = function() {
//     alert('Вы опять нажали первую кнопку!');
// };


// btn[0].addEventListener('click', function(event) {
    // alert('Вы нажали первую кнопку!');
    // let target = event.target;

    // target.style.display = 'none';

    // console.log(event);
//     console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
// });

// wrap.addEventListener('click', function() {
//     console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
// }); 

linc.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
});
// btn[0].addEventListener('click', function() {
//     alert('Вы опять нажали первую кнопку!');    
// });

// btn[0].addEventListener('mouseenter', function() {
//     alert('Вы навели на первую кнопку');
// });

btn.forEach(function(item) {
    item.addEventListener('mouseleave', function() {
        console.log('Вышли');
    });
});