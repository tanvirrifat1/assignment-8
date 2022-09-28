import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Fitness.css'
const Fitness = () => {
    const [products, setProduct] = useState([])
    const [cart, setCart] = useState([])

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
                <div className='menu'>
                    <h1>Tanvir Ahmed Rifat</h1>
                    <p>Web-Developer</p>
                    <div className='menu-info'>
                        <h5>Weight: 57</h5>
                        <h5>Height: 5.4</h5>
                        <h5>Age: 20</h5>
                    </div>
                </div>
                <div>
                    <h2>Add A Break</h2>
                    <div className='btn-timer'>
                        <button>10s</button>
                        <button>20s</button>
                        <button>30s</button>
                        <button>40s</button>
                    </div>
                </div>
                <p>time:{cart.length}</p>
            </div>
        </div>
    );
};

export default Fitness;