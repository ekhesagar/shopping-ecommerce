import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51IB8vYLV8jglPcFG861LF9LzAfn0LiQDEiORoVuDAAZzMMKitZN1KWTLBFPWnvlRn1ee7TUCbdL6lZKu7pNAuTXQ00jMWceEF0";

    const onToken = (token) => {
        console.log(token);
        alert('Payment successful')
    }

    return (
        <StripeCheckout 
            name='CRWN Clothing Ltd.'
            description={`Your total is ${price}`}
            image=''
            label='Pay Now'
            amount={priceForStripe}
            shippingAddress
            billingAddress
            token={onToken}
            panelLabel='Pay Now'
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;