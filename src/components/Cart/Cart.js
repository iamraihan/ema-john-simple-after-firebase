import React from 'react';
import './Cart.css'

const Cart = (props) => {
    console.log(props);
    const { cart } = props
    // console.log(cart)
    let totalPrice = 0
    let shippingCharge = 0
    let quantity = 0
    for (const product of cart) {
        quantity = quantity + product.quantity
        totalPrice = totalPrice + product.price * product.quantity
        shippingCharge = shippingCharge + product.shipping
    }
    const tax = parseFloat((totalPrice * .1).toFixed(2))
    // const newTax = Number(tax)

    let grandTotal = totalPrice + shippingCharge + tax
    return (
        <div className='cart'>
            <h2>Order Summery</h2>

            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${shippingCharge}</p>
            <p>Tax: ${tax}</p>
            <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
            {props.children}
        </div>
    );
};

export default Cart;