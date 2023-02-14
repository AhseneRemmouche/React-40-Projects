import './checkout.styles.css';
import CheckoutProduct from '../checkoutProduct/checkoutProduct.component';
import Subtotal from '../subtotal/subtotal.component';

function Checkout() {
    return (
        <div>
            <div className='checkout'>
                <div className='checkout__left'>
                    <img
                        src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
                        alt=''
                        className='checkout__ad'
                    />
                    <div>
                        <h2 className='checkout__title'>
                            Your Shopping Basket
                        </h2>
                        <CheckoutProduct />
                        <CheckoutProduct />
                    </div>
                </div>
                <div className='checkout__right'>
                    <Subtotal />
                </div>
            </div>
        </div>
    );
}

export default Checkout;
