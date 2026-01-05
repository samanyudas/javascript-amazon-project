import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderCheckoutHeader} from './checkout/checkoutHeader.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import {loadProductsFetch} from '../data/products.js';
import {loadCart} from '../data/cart.js';
// import '../data/cart-class.js';

Promise.all([
    loadProductsFetch(),
    new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    }),
]).then((values) => {
    renderOrderSummary();
    renderPaymentSummary();
});
renderCheckoutHeader();
