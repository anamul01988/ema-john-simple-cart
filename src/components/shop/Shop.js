import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
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
        // aita use e korbo nah --> cart.push(product) -->age aita use hoito ekhn spread operator use hoy ager value gula store korte
        const newCart = [...cart, product]; //ager gula copy kore arry er moddhe boshbabo then notun gula  aisha boshbe
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
               <Cart cart = {cart}/>
            </div>
        </div>
    );
};

export default Shop;