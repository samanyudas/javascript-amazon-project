import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderCheckoutHeader} from './checkout/checkoutHeader.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import {loadProducts} from '../data/products.js';
// import '../data/cart-class.js';

renderCheckoutHeader();
loadProducts(() => {
    renderOrderSummary();
    renderPaymentSummary();
});
