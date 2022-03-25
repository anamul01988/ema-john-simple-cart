import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import { addToDb, getStoredCart } from '../../utilities/fakedb'; //aita import hoite jhamela kore
import './Shop.css';
const Shop = () => {
    const [products, setProducts]= useState([]);
    const [cart,setCart] = useState([]);
    useEffect(()=>{
        console.log("product load before fetch")
       fetch('products.json')
       .then(res =>res.json())
       .then(data =>{
        setProducts(data)
        console.log('products loaded');
       })
    },[]);

    useEffect(()=>{
        console.log("locla storage first line", products)
        const storedCart = getStoredCart();
        const savedCart = [];
        console.log(storedCart);
        for(const id in storedCart){
            // console.log(id)
            const addedProduct = products.find(product =>product.id === id);
             if(addedProduct){
                 const quantity = storedCart[id];
                 addedProduct.quantity = quantity;  //addedProduct er keta property hocce quantity tar moddhe quantiy value rakhteci jeitga dynamically pacci joto bar product press korbo totbar count hobe
                //   console.log(addedProduct)
                savedCart.push(addedProduct);
             }
        }
        // console.log('local storage finished')
        setCart(savedCart);
    },[products])


    const handleAddToCart = (selectedProdcut)=>{
        console.log(selectedProdcut)
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProdcut.id);
        if(!exists){
            selectedProdcut.quantity = 1;
            newCart = [...cart, selectedProdcut];
        }
        else{
            const rest = cart.filter(product =>product.id !== selectedProdcut.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
   
        setCart(newCart);
        addToDb(selectedProdcut.id);

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