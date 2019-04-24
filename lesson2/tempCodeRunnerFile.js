 let arr = ['first', 2, 3, 'four', 5];

// arr[99] = 99;
// console.log(arr.length);
// console.log(arr);

// arr.pop();
// arr.push('5');
// arr.shift();
// arr.unshift('1');

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

arr.forEach(function (item, i, mass) {
    console.log(i + ': ' + item + ' (массив: ' + mass + ')');
});