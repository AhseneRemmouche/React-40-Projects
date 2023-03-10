import React from 'react';
import CurrencyFormat from 'react-currency-format';
import './subtotal.styles.css';

function Subtotal() {
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <div>
                        <p>
                            Subtotal (0 items): <strong>$0</strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type='checkbox' />
                            this order contains a gift
                        </small>
                    </div>
                )}
                decimalScale={2}
                value={0}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />
        </div>
    );
}

export default Subtotal;
