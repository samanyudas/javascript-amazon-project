import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderCheckoutHeader} from './checkout/checkoutHeader.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import {loadProducts} from '../data/products.js';
import {loadCart} from '../data/cart.js';
// import '../data/cart-class.js';

Promise.all([
    new Promise((resolve) => {
        loadProducts(() => {
            resolve('values1');
        });
    }),
    new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    }),
]).then((values) => {
    console.log(values);
    renderOrderSummary();
    renderPaymentSummary();
});
renderCheckoutHeader();
