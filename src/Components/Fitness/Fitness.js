import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
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
        // console.log(product)
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
                <Cart cart={cart}></Cart>
            </div>
            <div className='question'>
                <h4>question 1: how does react works ?</h4>
                <h4>Ans: ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code</h4>
                <br />
                <h4>question 2: what's the difference between props and state in react?</h4>
                <h4>Ans: Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.</h4>
                <br />
                <h4>question 3: What else does it take to load useEffect data?</h4>
                <h4>Ans: If we're using hooks in React function components, we can load data from an API when the component first loads by using the useEffect hook ...</h4>
            </div>
        </div>
    );
};

export default Fitness;