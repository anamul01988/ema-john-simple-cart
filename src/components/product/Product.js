import React from 'react';
import './Product.css';
const Product = (props) => {
    console.log(props.product)
    const {name, img, seller, price, ratings} = props.product;
    return (
        <div className='product'>
           <img src={img} alt='img'></img>
           <div className='product-info'>
                    <p className="product-name"> {name}</p>
                    <p><small>Price: {price} </small></p>
                    <p><small>Seller: {seller} </small></p>
                    <p><small>Ratings: {ratings} starts</small></p>
           </div>
           <button className='btn-cart'><p>Add To Cart</p></button>
        </div>
    );
};

export default Product;