import React from 'react';
import './Cart.css';
const Cart = (props) => {
    return (
        <div>
             <h4>Order summery</h4>
                <p>selected items: {props.cart.length}</p>
                <p>{console.log(props.cart)}</p>
        </div>
    );
};

export default Cart;