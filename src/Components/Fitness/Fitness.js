import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Fitness.css'
const Fitness = () => {
    const [products, setProduct] = useState([])
    const [cart, setCart] = useState([0])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const handleClick = (product) => {
        console.log(product)
        const newCart = [...cart, product]
        setCart(newCart)
    }

    return (
        <div className='fitness-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        handleClick={handleClick}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>

        </div>
    );
};

export default Fitness;