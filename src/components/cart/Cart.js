import { queryAllByAltText } from '@testing-library/react';
import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const {cart} = props;
    // console.log(cart)
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping * product.shipping;
        }
        // const tax = (total * 0.1).toFixed(2); //1% tax dewa lagbe proti product er jonno //toFixed use korar karone aita string hoice pore use er jonno number a convert kora lagbe
        // const grandTotal = total + Number(tax) + shipping; //number a convert korte Number, parseFloat, + use hoy
        const tax = parseFloat((total * 0.1).toFixed(2));
        const grandTotal = total + tax + shipping; //option 2
        return (
        <div className='cart'>
             <h4>Order summery</h4>
            {/* <p>Selected items : {cart.length}</p>  */}
            <p>Selected items : {quantity}</p> 
             {/* <p>{console.log(cart)}</p> */}
                <p>Total Price: $ {total}</p>
                <p>Total Shipping: $ {shipping}</p>
                <p>Tax: {tax}</p>
                <p>Grand Total: {grandTotal.toFixed(2)}</p>
            
        </div>
    );
};

export default Cart; 