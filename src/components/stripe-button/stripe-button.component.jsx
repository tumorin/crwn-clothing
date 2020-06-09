import React from 'react';
import StripeChechout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Gs9q0C1BuDbR9VRXbW38QakezyHeSYzBre8Fhi4y8IaRQLQGu5a9Va8txT6nwBfJrBM5oI38kNs2loSPtgsFEeU00iTAhr788';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }
    return (
        <StripeChechout 
        label ='Pay Now'
        name = 'CRWN-CLOTHING'
        billingAddress
        shippingAddress
        image = 'https://sendeyo.com/up/d/f3eb2117da'
        description = {`Your total is $${price}`}
        amount = {priceForStripe}
        panelLabel = 'Pay Now'
        token = {onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;