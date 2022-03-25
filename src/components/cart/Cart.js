import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    let shipping = 0;
    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
        }
        // const tax = (total * 0.1).toFixed(2); //1% tax dewa lagbe proti product er jonno //toFixed use korar karone aita string hoice pore use er jonno number a convert kora lagbe
        // const grandTotal = total + Number(tax) + shipping; //number a convert korte Number, parseFloat, + use hoy
        const tax = parseFloat((total * 0.1).toFixed(2));
        const grandTotal = total + tax + shipping; //option 2
        return (
        <div className='cart'>
             <h4>Order summery</h4>
             <p>{console.log(cart)}</p>
                <p>Total Price: $ {total}</p>
                <p>Total Shipping: $ {shipping}</p>
                <p>Tax: {tax}</p>
                <p>Grand Total: {grandTotal.toFixed(2)}</p>
            
        </div>
    );
};

export default Cart; 