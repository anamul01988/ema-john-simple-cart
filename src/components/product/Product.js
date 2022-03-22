import React from 'react';
import './Product.css';
const Product = (props) => {
    // console.log(props.product)
    // const {handleAddToCart, product} = props;
    const {name, img, seller, price, ratings} = props.product;
    console.log(props)
    // const handleAddToCart = ()=>{
    //   console.log("clicked")
    // }  upor theke nice jabe ,,nicer theke nah tai aita tule niye shop.js a rakhlam
    return (
        <div className='product'>
           <img src={img} alt='img'></img>
           <div className='product-info'>
                    <p className="product-name"> {name}</p>
                    <p><small>Price:$ {price} </small></p>
                    <p><small>Seller: {seller} </small></p>
                    <p><small>Ratings: {ratings} starts</small></p>
           </div>
           <button  onClick={()=>props.handleAddToCart(props.product)}  className='btn-cart'><p>Add To Cart</p></button>
        </div>
    );
};

export default Product;