import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Fitness.css'
const Fitness = () => {
    const [products, setProduct] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    return (
        <div className='fitness-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h4>About me</h4>
            </div>
        </div>
    );
};

export default Fitness;