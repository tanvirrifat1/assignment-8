import React from 'react';
import './Product.css'
const Product = ({ product }) => {
    const { picture, age, name, time } = product
    return (
        <div className='pro-container'>
            <img className='img-container' src={picture} alt="" />
            <p>{name}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, ea.</p>
            <h5>For Age: {age}</h5>
            <h5> Time required: {time}</h5>
        </div>
    );
};

export default Product;