import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import './Shop.css';
const Shop = () => {
    const [products, setProducts]= useState([]);
    const [cart,setCart] = useState([]);
    useEffect(()=>{
       fetch('products.json')
       .then(res =>res.json())
       .then(data =>setProducts(data))
    },[]);

    const handleAddToCart = (product)=>{
        console.log(product)
        //cart.push(product) -->age aita use hoito ekhn spread operator use hoy ager value gula store korte
        const newCart = [...cart, product];
        setCart(newCart);
   }
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {/* <h3>this is for products</h3>
                <p>{products.length}</p> */}
                {
                    products.map(product => <Product
                         key={product.id}
                          product = {product}
                          handleAddToCart = {handleAddToCart}
                          ></Product>)
                }

            </div>
            <div className='cart-container'>
                <h4>Order summery</h4>
                <p>selected items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;