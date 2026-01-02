import formatCurrency from '../scripts/utils/money.js';

console.log('test suite: formatCurrency');

console.log('convert cents to dollars');
if (formatCurrency(2095) === '20.95') {
    console.log('pass');
} else {
    console.error('fail');
}  

console.log('0 check');
if (formatCurrency(0) === '0.00') {
    console.log('pass');
} else {
    console.error('fail');
}

console.log('rounding up check');
if (formatCurrency(1000.5) === '10.01') {
    console.log('pass');
} else {
    console.error('fail');
}


